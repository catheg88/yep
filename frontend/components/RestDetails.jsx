var React = require("react");
var RestResultsStore = require("../stores/rest_results_store.js");
var ClientRestActions = require("../actions/client_rest_actions.js");
var RestReview = require("./RestReview.jsx");
var LoginForm = require('./LoginForm.jsx');
var CurrentUserState = require("../mixins/current_user_state");
var Modal = require("react-modal");
var LoginModalStyle = require("../../app/assets/stylesheets/login_modal_style");
var ReviewModalStyle = require("../../app/assets/stylesheets/review_modal_style");
var UserStore = require("../stores/user_store.js");

var RestDetails = React.createClass({
  mixins: [CurrentUserState],

  getInitialState: function() {
    if (RestResultsStore.all().length === 0) {
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
      return ({ restaurantDetails: RestResultsStore.find(parseInt(this.props.params.id)),
                reviewModalOpen: false,
                loginModalOpen: false,
              });
    }
  },

  onReviewModalClose: function(){
    this.setState({ reviewModalOpen: false });
  },

  onLoginModalClose: function(){
    this.setState({ loginModalOpen: false });
  },

  closeLoginModal: function(){
    if (this.state.currentUser) {
      this.setState({ loginModalOpen: false })
    }
  },

  openReviewModal: function(){
    this.setState({ reviewModalOpen: true });
  },

  openLoginModal: function(){
    this.setState({ loginModalOpen: true });
  },

  componentDidMount: function() {
    this.restListener = RestResultsStore.addListener(this.updateRestaurantInState);
    ClientRestActions.getRestaurant(this.props.params.id);
  },

  componentWillUnmount: function() {
    this.restListener.remove();
  },

  updateRestaurantInState: function() {
    this.setState({ restaurantDetails: RestResultsStore.find(parseInt(this.props.params.id))});
  },

  setYepp: function(e) {
    this.setState({ yepp: e.currentTarget.value });
  },

  revContentChange: function(e) {  // TODO move to form
    this.setState({ revContent: e.currentTarget.value });
  },

  handleReviewSubmit: function(e) {
    this.setState({ reviewModalOpen: false });
    e.preventDefault();
    ClientRestActions.addReview({
      rev_content: this.state.revContent,
      yepp: this.state.yepp,
      username: this.state.currentUser.username,
      restaurant_id: parseInt(this.props.params.id)
    });
    this.setState({revContent: ""})
  },

  render: function() {
    if (this.state.restaurantDetails === undefined) {
    } else
    if (this.state.restaurantDetails.reviews === undefined) {
      var _reviews = [];
    } else {
      _reviews = this.state.restaurantDetails.reviews;
    }

    // _revForm
    if (this.state.currentUser === undefined) {
      var postReviewLabel = <div id="review-button" onClick={this.openLoginModal}>Sign in to leave a review</div>
      var postReviewForm = undefined;
    } else {
      var postReviewLabel = <div id="review-button" onClick={this.openReviewModal}>{"Leave a review, " + this.state.currentUser.username + "!"}</div>
      var postReviewForm = (<form id="review-form" onSubmit={this.handleReviewSubmit}>
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
            {postReviewForm}
          </Modal>

          <Modal
            isOpen={this.state.loginModalOpen}
            onRequestClose={this.onLoginModalClose}
            style={LoginModalStyle}>
            <LoginForm />
          </Modal>

        </div>
      </div>
    );
  }

});

module.exports = RestDetails;
