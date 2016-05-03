var React = require("react");
var RestResultsStore = require("../stores/rest_results_store.js");
var ClientRestActions = require("../actions/client_rest_actions.js");
var RestReview = require("./RestReview.jsx");
var CurrentUserState = require("../mixins/current_user_state");

var RestDetails = React.createClass({
  mixins: [CurrentUserState],

  getInitialState: function() {
    return { restaurantDetails: RestResultsStore.find(parseInt(this.props.params.id))};
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

  revContentChange: function(e) {
    this.setState({ revContent: e.currentTarget.value });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    ClientRestActions.addReview({
      rev_content: this.state.revContent,
      yepp: this.state.yepp,
      username: this.state.currentUser.username,
      restaurant_id: parseInt(this.props.params.id)
    });
  },

  render: function() {
    // if (this.state.restaurantDetails === undefined) {
    //   console.log("this.state.restaurantDetails === undefined");
    // } else
    if (this.state.restaurantDetails.reviews === undefined) {
      var _reviews = [];
    } else {
      _reviews = this.state.restaurantDetails.reviews;
    }

    // _revForm
    if (this.state.currentUser === undefined) {
      var postReviewLabel = <div>Sign in to leave a review</div>
      var postReviewForm = undefined;
      // var authLink = <a href="#" id="sign-in-sign-up">Sign In/Up</a>
    } else {
      var postReviewLabel = <div>{"Leave a review, " + this.state.currentUser.username + "!"}</div>
      var postReviewForm = (<form id="rev-form" onSubmit={this.handleSubmit}>
          	<br />
          	<label id="rev-content-field"> Review:&nbsp;&nbsp;&nbsp;<br />
          		<textarea value={this.state.revContent} onChange={this.revContentChange}/>
          	</label>
          	<br />
          	<br />
        		<section id="rev-yepp">
        			<label>
        				<input type="Radio" name="yepp" value="true" onChange={this.setYepp}/>
        				&nbsp;Yepp!&nbsp;&nbsp;
        			</label>
        			<label>
        				<input type="Radio" name="yepp" value="false" onChange={this.setYepp}/>
        				&nbsp;Nope!&nbsp;&nbsp;
        			</label>
        			<br />
        		</section>
        		<br />
    				<button>Submit</button>
        </form>
      )
      // var authLink = <a href="#" id="sign-out" onClick={this.logout}>Sign Out</a>
    }

    return (
      <div id="rest-details">
        <header id="restaurant-details-header">
          {this.state.restaurantDetails.name}
        </header>
        <content id="rest-detail-content">
          <div id="detail-hours">
            {this.state.restaurantDetails.hours} <br />
          </div>
          <div id="detail-cuisine">
            {this.state.restaurantDetails.cuisine} <br />
          </div>
          <div id="detail-address">
            {this.state.restaurantDetails.address} <br />
          </div>
          <div id="detail-phone">
            {this.state.restaurantDetails.phone} <br />
          </div>
          <div id="detail-description">
            {this.state.restaurantDetails.description} <br />
          </div>
        </content>
        <ul id="reviews-index">
          {_reviews.map(function (review) {
            return <RestReview key={review.id} review={review} />;
          })}
        </ul>
        <div id="rev-form-container">
          {postReviewLabel}
          {postReviewForm}
        </div>
      </div>
    );
  }

});

module.exports = RestDetails;
