var React = require("react");
var RestResultsStore = require("../stores/rest_results_store.js");
var ClientRestActions = require("../actions/client_rest_actions.js");

var RestDetails = React.createClass({
  getInitialState: function() {
    return { restaurantDetails: RestResultsStore.find(parseInt(this.props.params.id))};
  },

  componentDidMount: function() {
    this.restListener = RestResultsStore.addListener(this.updateRestaurantInState);
    ClientRestActions.getRestaurant(this.props.params.id);
  },

  componentWillUnmount:  function() {
    this.restListener.remove();
  },

  updateRestaurantInState: function() {
    this.setState({ restaurantDetails: RestResultsStore.find(parseInt(this.props.params.id))});
  },

  render: function() {
    return (
      <div id="rest-details">
        {this.state.restaurantDetails.name} <br />
        {this.state.restaurantDetails.cuisine} <br />
        {this.state.restaurantDetails.address} <br />
        {this.state.restaurantDetails.phone} <br />
        {this.state.restaurantDetails.hours} <br />
        {this.state.restaurantDetails.description} <br />
      </div>
    );
  }

});

module.exports = RestDetails;
