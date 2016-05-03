var React = require("react");
var RestResultsStore = require("../stores/rest_results_store.js");
var ClientRestActions = require("../actions/client_rest_actions.js"); // TODO why do i have this?

var RestReview = React.createClass({

  render: function() {
    if (this.props.review.yepp === true) {
      var _yepp = "Yepp!"
    } else {
      _yepp = "Nope!"
    }
    return (
      <div className="review">
        <li>{this.props.review.username}</li>
        <li>{this.props.review.rev_content}</li>
        <li>{_yepp}</li>
      </div>
    )
  }
});

module.exports = RestReview;




// <li className="rest-review" id={this.props.restaurant.id}>
//   {this.props.restaurant.name}
// </li>
