var React = require("react");
var RestResultsStore = require("../stores/rest_results_store.js");
var ClientRestActions = require("../actions/client_rest_actions.js");



var RestResults = React.createClass({

  componentDidMount: function() {
    this.restListener = RestResultsStore.addListener(this.updateRestaurants) //TODO - do i have this action right?
    ClientRestActions.fetchRestaurants();
  },

  updateRestaurants: function() {
    //TODO
  },

  render: function() {
    return (
      <div id="restuarant-results">
        <p>here are all the yummy foods</p>
      </div>
    )
  }
});

module.exports = RestResults;
