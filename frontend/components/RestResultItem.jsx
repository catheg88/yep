var React = require("react");
var ClientRestActions = require("../actions/client_rest_actions");
var hashHistory = require('react-router').hashHistory;

RestResultItem = React.createClass({
  showDetail: function(e) {
    ClientRestActions.getRestaurant(e.currentTarget.id);
    hashHistory.push("/restaurants/" + e.currentTarget.id);
  },

  render: function () {
    return(
      <li className="rest-result-item" onClick={this.showDetail} id={this.props.restaurant.id}>
        {this.props.restaurant.name}
        {this.props.restaurant.cuisine}
        {this.props.restaurant.hours}
        {this.props.restaurant.description}
      </li>
      // {this.props.restaurant.address}
      // {this.props.restaurant.phone}
    );
  }
});

module.exports = RestResultItem;
