var React = require("react");
var UserActions = require("../actions/user_actions"); // why am i including these?
var CurrentUserState = require("../mixins/current_user_state");

var NavBar = React.createClass({
	mixins: [CurrentUserState],

  render: function() {


    if (this.state.currentUser === undefined) {
      return (
        <div id="navbar">
          <h3>sup</h3>
        </div>
      )
    } else {
      return (
        <div id="navbar">
          <h3>{this.state.currentUser.username}</h3>
        </div>
      )
    }

  }
});

module.exports = NavBar;
