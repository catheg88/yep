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
        <div id="result-name">
          {this.props.restaurant.name}
        </div>
        <div id="result-cuisine">
          {this.props.restaurant.cuisine}
        </div>
        <div id="result-hours">
          {this.props.restaurant.hours}
        </div>
        <div id="result-description">
          {this.props.restaurant.description}
        </div>

      </li>
    );
  }
});

module.exports = RestResultItem;

// from render:
// {this.props.restaurant.address}
// {this.props.restaurant.phone}
