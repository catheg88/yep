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

  handleSubmit: function() {

  },

  render: function() {
    // debugger
    if (this.state.restaurantDetails.reviews === undefined) {
      var _reviews = [];
    } else {
      _reviews = this.state.restaurantDetails.reviews;
    }

    // _revForm
    if (this.state.currentUser === undefined) {
      var postReviewLabel = "Sign in to leave a review"
      var postReviewForm = undefined;
      // var authLink = <a href="#" id="sign-in-sign-up">Sign In/Up</a>
    } else {
      var postReviewLabel = "Leave a review, " + this.state.currentUser.username + "!"
      var postReviewForm = (<form id="rev-form" onSubmit={this.handleSubmit}>
          	<br />
          	<label id="rev-content-field"> Review:&nbsp;&nbsp;&nbsp;<br />
          		<textarea value={this.state.revContent} onChange={this.revContentChange}/> // TODO figure out the state
          	</label>
          	<br />
          	<br />
        		<section id="rev-yepp">
        			<label>
        				<input type="Radio" name="action" value="true" onChange={this.setYepp}/>
        				&nbsp;Yepp!&nbsp;&nbsp;
        			</label>
        			<br />
        			<label>
        				<input type="Radio" name="action" value="false" onChange={this.setYepp}/>
        				&nbsp;Nope!&nbsp;&nbsp;
        			</label>
        			<br />
        		</section>
        		<br />
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
          {this.state.restaurantDetails.hours} <br />
          {this.state.restaurantDetails.cuisine} <br />
          {this.state.restaurantDetails.address} <br />
          {this.state.restaurantDetails.phone} <br />
          {this.state.restaurantDetails.description} <br />
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


// <content id="reviews">
//   {this.state.restaurantDetails.reviews}
// </content>

module.exports = RestDetails;
