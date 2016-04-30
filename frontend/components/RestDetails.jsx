var React = require("react");
var RestResultsStore = require("../stores/rest_results_store.js");
var ClientRestActions = require("../actions/client_rest_actions.js");

var RestDetails = React.createClass({
  getInitialState: function() {
    return { restaurantDetails: RestResultsStore.find(parseInt(this.props.params.restaurantId))};
  },

  componentDidMount: function() {
    console.log("RestDetails.jsx componentDidMount; add listener; _");
    this.restListener = RestResultsStore.addListener(this.updateRestaurantInState);
    ClientRestActions.getRestaurant(id);
  },

  componentWillUnmount:  function() {
    console.log("RestDetails.jsx componentWillUnmount; remove listener");
    this.restListener.remove();
  },

  updateRestaurantInState: function() {
    this.setState({ restaurantDetails: RestResultsStore.find(parseInt(this.props.params.restaurantId))});
  },

  render: function() {
    return (
      <div>

      </div>
    );
  }

});

module.exports = RestDetails;
