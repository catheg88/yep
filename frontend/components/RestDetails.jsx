var React = require("react");
var RestResultsStore = require("../stores/rest_results_store.js");
var ClientRestActions = require("../actions/client_rest_actions.js");
var RestReview = require("./RestReview.jsx");
var LoginForm = require('./LoginForm.jsx');
var CurrentUserState = require("../mixins/current_user_state");
var Modal = require("react-modal");
var LoginModalStyle = require("../../app/assets/stylesheets/login_modal_style");
var ReviewModalStyle = require("../../app/assets/stylesheets/review_modal_style");
var EditModalStyle = require("../../app/assets/stylesheets/edit_modal_style");
var UserStore = require("../stores/user_store.js");

var RestDetails = React.createClass({
  mixins: [CurrentUserState],

  getInitialState: function() {
    if (RestResultsStore.all().length === 0) { // no restaurants in store, just for loading
      return ({ restaurantDetails: {
          name: "",
          hours: "",
          cuisine: "",
          address: "",
          phone: "",
          description: ""
        }
      })

    } else {
      var restFromStore = RestResultsStore.find(parseInt(this.props.params.id));
      return ({ restaurantDetails: restFromStore,
                reviewModalOpen: false,
                loginModalOpen: false,
                editFormData: ""
              });
    }
  },


// Review Modal
  openReviewModal: function(){
    this.setState({ reviewModalOpen: true });
  },
  onReviewModalClose: function(){
    this.setState({ reviewModalOpen: false });
  },


// Login Modal
  openLoginModal: function(){
    this.setState({ loginModalOpen: true });
  },
  closeLoginModal: function(){
    if (this.state.currentUser) {
      this.setState({ loginModalOpen: false })
    }
  },
  onLoginModalClose: function(){
    this.setState({ loginModalOpen: false });
  },



  sendMyRevToState: function(myReview){
    this.setState({ editModalOpen: true });
    this.setState({ editFormData: myReview });
    this.openEditModal();
  },
// Edit Modal
  openEditModal: function(){
    // set the state of RestDetails to reflect the information from the review
    this.setState({ editModalOpen: true });
  },
  onEditModalClose: function(){
    this.setState({ loginModalOpen: false });
  },




  componentDidMount: function() {
    this.restListener = RestResultsStore.addListener(this.updateRestaurantInState);
    ClientRestActions.getRestaurant(this.props.params.id);
  },
  updateRestaurantInState: function() {
    this.setState({ restaurantDetails: RestResultsStore.find(parseInt(this.props.params.id))});
  },

  componentWillUnmount: function() {
    this.restListener.remove();
  },

  revContentChange: function(e) {  // TODO move to form
    this.setState({ editFormData: {rev_content: e.currentTarget.value, yepp: this.state.editFormData.yepp }});
  },
  setYepp: function(e) {
    this.setState({ editFormData: {rev_content: this.state.editFormData.rev_content, yepp: e.currentTarget.value }});
  },

  handleReviewSubmit: function(e) {
    e.preventDefault();
    this.setState({ reviewModalOpen: false });
    ClientRestActions.addReview({
      rev_content: this.state.revContent,
      yepp: this.state.yepp,
      username: this.state.currentUser.username,
      restaurant_id: parseInt(this.props.params.id)
    });
    this.setState({revContent: ""})
  },



  handleReviewEdit: function(e) { // TODO doesn't catch the errors
    e.preventDefault();
    this.setState({ editModalOpen: false });
    // ClientRestActions.editReview(this.state.editFormData);
  },



  render: function() {

    if (this.state.restaurantDetails === undefined) {
    } else
    if (this.state.restaurantDetails.reviews === undefined) {
      var _reviews = [];
    } else {
      _reviews = this.state.restaurantDetails.reviews;
    }


    var _myReview = undefined;
    var _currentUser = undefined;
    var revEditFormText = undefined;
    var revEditYepp = undefined;
    var yeppButton = undefined;
    var nopeButton = undefined;


    var that = this;
    if (this.state.editFormData.revContent !== undefined) {
      revEditFormText = this.state.editFormData.revContent;
      revEditYepp = this.state.yepp;
    } else {
      if (this.state.currentUser !== undefined) {
        _currentUser = this.state.currentUser.username;
      }
      if (this.state.currentUser !== undefined) {
        var tsrdr = this.state.restaurantDetails.reviews
        _reviews.forEach(function(review) {
          if (review.username === _currentUser) {
            _myReview = review;
            tsrdr.forEach(function(review) {
              if (review.username === _currentUser) {
                revEditFormText = review.rev_content;
                revEditYepp = review.yepp;
              }
              if (that.state.editFormData !== undefined) {
                revEditFormText = that.state.editFormData.rev_content;
                revEditYepp = that.state.editFormData.yepp;
              }

            })
          }
        });
      }
    }


    if (revEditYepp === "true") {
      yeppButton = { element: <input type="Radio" name="yepp" value="true" onChange={this.setYepp} checked/> }
      nopeButton = { element: <input type="Radio" name="yepp" value="false" onChange={this.setYepp}/> }
    } else {
      yeppButton = { element: <input type="Radio" name="yepp" value="true" onChange={this.setYepp}/> }
      nopeButton = { element: <input type="Radio" name="yepp" value="false" onChange={this.setYepp} checked/> }
    }


    // action button logic
    if (this.state.currentUser === undefined) {  // signed out; show sign in button
      var postReviewLabel = <div id="review-button" onClick={this.openLoginModal}>Sign in to leave a review</div>
      var reviewButtonForm = undefined;
    } else if (_myReview !== undefined) { // signed in; has reviewed; show edit
      var postReviewLabel = <div id="review-button" onClick={this.sendMyRevToState.bind(this, _myReview)}>Edit/Delete my review</div>
      var reviewButtonForm = (<form id="edit-form" onSubmit={this.handleReviewEdit}>
          <br />
          <label id="rev-content-holder">Review:&nbsp;&nbsp;&nbsp;<br />
            <textarea id="rev-textbox" value={revEditFormText} onChange={this.revContentChange}/>
          </label>
          <br />
          <br />
          <section id="rev-yepp">
            <label>
              {yeppButton.element}
              &nbsp;Yepp!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label>
              {nopeButton.element}
              &nbsp;Nope!
            </label>
            <br />
          </section>
          <br />
          <button id="login-submit">Submit</button>
          <button id="delete" onClick={this.deleteReview}>Delete</button>
        </form>
      )
    } else { // signed in; hasn't reviewed; show create review
      var postReviewLabel = <div id="review-button" onClick={this.openReviewModal}>{"Leave a review, " + this.state.currentUser.username}</div>
      var reviewButtonForm = (<form id="review-form" onSubmit={this.handleReviewSubmit}>
            <br />
            <label id="rev-content-holder">Review:&nbsp;&nbsp;&nbsp;<br />
              <textarea id="rev-textbox" value={this.state.revContent} onChange={this.revContentChange}/>
            </label>
            <br />
            <br />
            <section id="rev-yepp">
              <label>

                <input type="Radio" name="yepp" value="true" onChange={this.setYepp}/>
                &nbsp;Yepp!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <label>
                <input type="Radio" name="yepp" value="false" onChange={this.setYepp}/>
                &nbsp;Nope!
              </label>
              <br />
            </section>
            <br />
            <button id="login-submit">Submit</button>
        </form>
      )
    }

    return (
      <div id="rest-details">
        <header id="restaurant-details-header">
          {this.state.restaurantDetails.name}
        </header>
        <content id="rest-detail-content">



          <div id="detail-hours">&nbsp;Hours:&nbsp;&nbsp;
            {this.state.restaurantDetails.hours} <br />
          </div>



          <div id="detail-cuisine">&nbsp;Cuisine:&nbsp;&nbsp;
            {this.state.restaurantDetails.cuisine} <br />
          </div>
          <div id="detail-address">&nbsp;Address:&nbsp;&nbsp;
            {this.state.restaurantDetails.address} <br />
          </div>
          <div id="detail-phone">&nbsp;Phone:&nbsp;&nbsp;
            {this.state.restaurantDetails.phone} <br />
          </div>
          <div id="detail-description">&nbsp;Description:&nbsp;&nbsp;
            {this.state.restaurantDetails.description} <br />
          </div>
        </content>
        <div id="review-header">Reviews</div>
        <ul id="reviews-index">
          {_reviews.map(function (review) {
            return <RestReview key={review.id} review={review} />;
          })}
        </ul>
        <div id="rev-form-container">
          {postReviewLabel}
          <Modal
            isOpen={this.state.reviewModalOpen}
            onRequestClose={this.onReviewModalClose}
            style={ReviewModalStyle}>
            {reviewButtonForm}
          </Modal>

          <Modal
            isOpen={this.state.loginModalOpen}
            onRequestClose={this.onLoginModalClose}
            style={LoginModalStyle}>
            <LoginForm />
          </Modal>

          <Modal
            isOpen={this.state.editModalOpen}
            onRequestClose={this.onEditModalClose}
            style={EditModalStyle}>
            {reviewButtonForm}
          </Modal>

        </div>
      </div>

    );
  }

});

module.exports = RestDetails;
