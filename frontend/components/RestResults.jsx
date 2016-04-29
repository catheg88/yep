var React = require("react");
var RestResultsStore = require("../stores/rest_results_store.js");
var ClientRestActions = require("../actions/client_rest_actions.js");



var RestResults = React.createClass({

  componentDidMount: function() {
    this.restListener = RestResultsStore.addListener(this.updateRestaurants);
    ClientRestActions.fetchRestaurants();
  },

  updateRestaurants: function() {
    this.setState({ restaurants: RestResultsStore.all() })
  },

  render: function() {
    return (
      <div id="restaurant-results">
        <p>here are all the yummy foods</p>
      </div>
    )
  }
});

module.exports = RestResults;
