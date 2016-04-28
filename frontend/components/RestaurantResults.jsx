var React = require("react");
var RestaurantResultsStore = require("../stores/restaurant_results_store.js");
var ClientRestActions = require("../actions/client_rest_actions.js");
var ClientRestApiUtil = require("../util/client_rest_api_util.js");


var RestaurantResults = React.createClass({

  componentDidMount: function() {
    this.restaurantsListener = RestaurantResultsStore.addListener(this.updateRestaurants) //TODO - do i have this action right?
    ClientRestActions.fetchRestaurants();
  },

  updateRestaurants: function() {

  },

  render: function() {
    return (
      <div id="restuarant-results">
        <p>here are all the yummy foods</p>
      </div>
    )
  }
});

module.exports = RestaurantResults;
