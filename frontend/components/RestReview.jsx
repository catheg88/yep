var React = require("react");
var RestResultsStore = require("../stores/rest_results_store.js");
var ClientRestActions = require("../actions/client_rest_actions.js"); // TODO why do i have this?

var RestReview = React.createClass({

  render: function() {
    return (
      <div>
        <li>sup</li>
      </div>
    )
  }
});

module.exports = RestReview;




// <li className="rest-review" id={this.props.restaurant.id}>
//   {this.props.restaurant.name}
// </li>
