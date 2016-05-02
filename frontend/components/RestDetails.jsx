var React = require("react");
var RestResultsStore = require("../stores/rest_results_store.js");
var ClientRestActions = require("../actions/client_rest_actions.js");
var RestReview = require("./RestReview.jsx");

var RestDetails = React.createClass({
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

  render: function() {
    // debugger
    if (this.state.restaurantDetails.reviews === undefined) {
      var _reviews = [];
    } else {
      _reviews = this.state.restaurantDetails.reviews;
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
          <RestReview />
        </ul>

      </div>
    );
  }

});

// {_reviews.map(function (review) {
//   return <RestReview key={review.id} restaurant={review} />;
// })}

// <content id="reviews">
//   {this.state.restaurantDetails.reviews}
// </content>

module.exports = RestDetails;
