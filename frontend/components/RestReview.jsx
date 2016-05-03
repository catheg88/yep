var React = require("react");
var RestResultsStore = require("../stores/rest_results_store.js");
var CurrentUserState = require("../mixins/current_user_state");
var ClientRestActions = require("../actions/client_rest_actions.js"); // TODO why do i have this?

var RestReview = React.createClass({
  mixins:  [CurrentUserState],
  render: function() {
    if (this.props.review.yepp === true) {
      var _yepp = "Yepp!"
    } else {
      _yepp = "Nope!"
    }

    if(this.state.currentUser !== undefined) {

      if(this.state.currentUser.username === this.props.review.username) {
        var mine = "my-review";
      } else {
        mine = "";
      }

    }

    return (
      <div className="review" id={mine}>
        <div id="review-author">Posted by: {this.props.review.username}</div>
        <div id="review-meat">{this.props.review.rev_content}</div>
        <div id="review-yepp">{_yepp}</div>
      </div>
    )
  }
});

module.exports = RestReview;




// <li className="rest-review" id={this.props.restaurant.id}>
//   {this.props.restaurant.name}
// </li>
