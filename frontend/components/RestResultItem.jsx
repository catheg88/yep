var React = require("react");
var ClientRestActions = require("../actions/client_rest_actions");
var hashHistory = require('react-router').hashHistory;

RestResultItem = React.createClass({



  showDetail: function(e) { // rather than change what the index item displays, redirect using router to render the details component
    e.preventDefault();
    // OLD ClientRestActions.fetchRestaurants();
    ClientRestActions.getRestaurant(e.currentTarget.id);
    // hashHistory.push --match path to restaurant.  restaurants/ redirect to e.g. restaurants/1
      // unmounts index; mounts details
    console.log("hashHistory.push");
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
