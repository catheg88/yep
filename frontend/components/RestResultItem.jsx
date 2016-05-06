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

        <div className="rest-result-details">
          <div className="rest-result-detail">
            {this.props.restaurant.name}
          </div>
          <div className="rest-result-detail">
            {this.props.restaurant.hours}
          </div>
        </div>


        <div id="rest-result-detail-description">
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
