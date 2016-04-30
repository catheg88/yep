var React = require("react");
var RestResultsStore = require("../stores/rest_results_store.js");
var RestResultItem = require("./RestResultItem.jsx");
var ClientRestActions = require("../actions/client_rest_actions.js");

var RestResults = React.createClass({
  getInitialState: function() {
    return { restaurants: RestResultsStore.all() };
  },

  componentDidMount: function() {
    console.log("RestResults.jsx componentDidMount; add listener; fetchRestaurants");
    this.restListener = RestResultsStore.addListener(this.updateRestaurants);
    ClientRestActions.fetchRestaurants();
  },

  componentWillUnmount:  function() {
    console.log("RestResults.jsx componentWillUnmount; remove listener");
    this.restListener.remove();
  },

  updateRestaurants: function() {
    this.setState({ restaurants: RestResultsStore.all() })
  },

  render: function() {
    return (
      <div id="restaurant-results">
        <header id="restaurant-results-header">
          Restaurants Results
        </header>
        <ul id="results-index">
          {this.state.restaurants.map(function (restaurant) {
            return <RestResultItem key={restaurant.id} restaurant={restaurant} />;
          })}
        </ul>
      </div>
    )
  }
});

module.exports = RestResults;
