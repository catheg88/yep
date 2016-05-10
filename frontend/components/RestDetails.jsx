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
        },
        reviewErrors: RestResultsStore.errors(),
        yepp: true
      })

    } else {
      var restFromStore = RestResultsStore.find(parseInt(this.props.params.id));
      return ({ restaurantDetails: restFromStore,
                reviewModalOpen: false,
                loginModalOpen: false,
                editFormData: "",
                reviewErrors: RestResultsStore.errors()
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
    rev_id = myReview.id;
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
    this.setState({ editModalOpen: false });
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

  revEditContentChange: function(e) {  // TODO move to form
    this.setState({ editFormData: {rev_content: e.currentTarget.value, yepp: this.state.editFormData.yepp }});
  },
  setYeppEdit: function(e) {
    this.setState({ editFormData: {rev_content: this.state.editFormData.rev_content, yepp: e.currentTarget.value }});
  },
  deleteReview: function() {
    rev_id: this.state.editFormData.id;
    ClientRestActions.deleteReview(rev_id);
    this.setState({ editModalOpen: false })
  },


  revPostContentChange: function(e) {  // TODO move to form
    this.setState({ revContent: e.currentTarget.value });
  },
  setYeppPost: function(e) {
    this.setState({ yepp: e.currentTarget.value });
  },



  handleReviewSubmit: function(e) {
    e.preventDefault();
    this.setState({ reviewModalOpen: false });
    var revcont;
    if (this.state.revContent === undefined) {
      revcont = " "
    } else {
      revcont = this.state.revContent
    }
    var yeppval;
    if (this.state.yepp === undefined) {
      yeppval = true;
    } else {
      yeppval = this.state.yepp;
    }
    // debugger
    ClientRestActions.addReview({
      rev_content: revcont,
      yepp: yeppval,
      username: this.state.currentUser.username,
      restaurant_id: parseInt(this.props.params.id)
    });
    this.setState({revContent: " "})
  },

  handleReviewEdit: function(e) { // TODO doesn't catch the errors
    e.preventDefault();
    this.setState({ editModalOpen: false });
    var restId = parseInt(this.props.params.id)
    ClientRestActions.editReview({
      id: rev_id,
      rev_content: this.state.editFormData.rev_content,
      yepp: this.state.editFormData.yepp,
      username: this.state.currentUser.username,
      restaurant_id: restId
    });
  },




  // errors: function(){
	// 	if (!this.state.reviewErrors){
	// 		return;
	// 	}
	// 	var self = this;
	// 	return (<ul id="rev-errors">
	// 	{
	// 		Object.keys(this.state.reviewErrors).map(function(key, i){
	// 			return (<li key={i}>{self.state.reviewErrors[key]}</li>);
	// 		})
	// 	}
	// 	</ul>);
	// },

  getImageUrl: function() {
    switch (this.state.restaurantDetails.cuisine) {
    case "American":
      return(<img src="https://res.cloudinary.com/dfthfd7v8/image/upload/v1462661170/american_y81leq.jpg" />);
      break;
    case "Bars":
      return(<img src="https://res.cloudinary.com/dfthfd7v8/image/upload/v1462669716/bars_b1tu4p.jpg" />);
      break;
    case "Chinese":
      return(<img src="https://res.cloudinary.com/dfthfd7v8/image/upload/v1462669715/chinese_cupue9.jpg" />);
      break;
    case "CoffeeandTea":
      return(<img src="https://res.cloudinary.com/dfthfd7v8/image/upload/v1462669716/coffee_xa2xf1.jpg" />);
      break;
    case "Indian":
      return(<img src="https://res.cloudinary.com/dfthfd7v8/image/upload/v1462669716/indian_le3kjf.png" />);
      break;
    case "Korean":
      return(<img src="https://res.cloudinary.com/dfthfd7v8/image/upload/v1462669716/korean_jwdwg5.jpg" />);
      break;
    case "LatinAmerican":
      return(<img src="https://res.cloudinary.com/dfthfd7v8/image/upload/v1462669716/latinamerican_jr9atw.jpg" />);
      break;
    case "Pizza":
      return(<img src="https://res.cloudinary.com/dfthfd7v8/image/upload/v1462669716/pizza_sxf50t.jpg" />);
      break;
    case "Ramen":
      return(<img src="https://res.cloudinary.com/dfthfd7v8/image/upload/v1462669716/ramen_trhmln.jpg" />);
      break;
    case "Sandwiches":
      return(<img src="https://res.cloudinary.com/dfthfd7v8/image/upload/v1462669716/sandwiches_pz3kmt.jpg" />);
      break;
    case "Seafood":
      return(<img src="https://res.cloudinary.com/dfthfd7v8/image/upload/v1462669716/seafood_dmpvbr.jpg" />);
      break;
    case "Sushi":
      return(<img src="https://res.cloudinary.com/dfthfd7v8/image/upload/v1462669721/sushi_h6bwvl.jpg" />);
      break;
    case "Thai":
      return(<img src="https://res.cloudinary.com/dfthfd7v8/image/upload/v1462669721/thai_cum8d4.jpg" />);
      break;
    case "Vietnamese":
      return(<img src="https://res.cloudinary.com/dfthfd7v8/image/upload/v1462669721/vietnamese_heestl.jpg" />);
      break;
    }
  },

  // <div id="rev-errors">{this.errors()}</div>


  render: function() {
    // debugger
    // console.log(RestResultsStore.errors());
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



    if (revEditYepp === true || revEditYepp === "true") {
      yeppButton = { element: <input type="Radio" name="yepp" value="true" onChange={this.setYeppEdit} checked/> }
      nopeButton = { element: <input type="Radio" name="yepp" value="false" onChange={this.setYeppEdit}/> }
    } else {
      yeppButton = { element: <input type="Radio" name="yepp" value="true" onChange={this.setYeppEdit}/> }
      nopeButton = { element: <input type="Radio" name="yepp" value="false" onChange={this.setYeppEdit} checked/> }
    }


    // action button logic
    if (this.state.currentUser === undefined) {  // signed out; show sign in button
      var postReviewLabel = <div id="review-button" onClick={this.openLoginModal}>Sign in to leave a review</div>
      var reviewButtonForm = undefined;
    } else if (_myReview !== undefined) { // signed in; has reviewed; show edit
      var postReviewLabel = <div id="review-button" onClick={this.sendMyRevToState.bind(this, _myReview)}>Edit/Delete my review</div>
      var reviewButtonForm = (<form id="edit-form" onSubmit={this.handleReviewEdit}>
          <br />
          <label id="rev-content-holder">Edit:&nbsp;&nbsp;&nbsp;<br />
            <textarea id="rev-textbox" value={revEditFormText} onChange={this.revEditContentChange}/>
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
          <div className="form-button" onClick={this.handleReviewEdit}>Edit review</div>
          <div className="form-button" onClick={this.deleteReview}>Delete</div>
        </form>
      )
    } else { // signed in; hasn't reviewed; show create review
      var postReviewLabel = <div id="review-button" onClick={this.openReviewModal}>{"Leave a review, " + this.state.currentUser.username}</div>
      var reviewButtonForm = (<form id="review-form" onSubmit={this.handleReviewSubmit}>
            <br />
            <label id="rev-content-holder">Review:&nbsp;&nbsp;&nbsp;<br />
              <textarea id="rev-textbox" value={this.state.revContent} onChange={this.revPostContentChange}/>
            </label>
            <br />
            <br />
            <section id="rev-yepp">
              <label>

                <input type="Radio" name="yepp" value="true" onChange={this.setYeppPost} defaultChecked/>
                &nbsp;Yepp!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <label>
                <input type="Radio" name="yepp" value="false" onChange={this.setYeppPost}/>
                &nbsp;Nope!
              </label>
              <br />
            </section>
            <br />
            <div className="form-button" onClick={this.handleReviewSubmit}>Submit</div>
        </form>
      )
    }

    return (
      <div id="rest-details">
        <header id="restaurant-details-header">
          {this.state.restaurantDetails.name}
        </header>
        <content id="rest-detail-content">

          <div id="image">
            {this.getImageUrl()}
          </div>

          <div id="rest-details-info">
            <div id="detail-hours">Hours:&nbsp;&nbsp;
              {this.state.restaurantDetails.hours} <br />
            </div>
            <div id="detail-cuisine">Cuisine:&nbsp;&nbsp;
              {this.state.restaurantDetails.cuisine} <br />
            </div>
            <div id="detail-address">Address:&nbsp;&nbsp;
              {this.state.restaurantDetails.address} <br />
            </div>
            <div id="detail-phone">Phone:&nbsp;&nbsp;
              {this.state.restaurantDetails.phone} <br />
            </div>
            <p id="detail-description">Description:&nbsp;&nbsp;
              {this.state.restaurantDetails.description} <br />
          </p>
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
