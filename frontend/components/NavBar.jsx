var React = require("react");
var UserActions = require("../actions/user_actions"); // why am i including these?
var CurrentUserState = require("../mixins/current_user_state");

var NavBar = React.createClass({
	mixins: [CurrentUserState],

  render: function() {

    if (this.state.currentUser === undefined) { // before username state is set up
      var username = "not logged in"
      var authButton = <a href="#">sign in / sign up</a>
    } else { // after username state is set up
      var username = "Hello, " + this.state.currentUser.username + "!"
      var authButton = <a href="#">sign out</a>
    }

    return (
      <header className="header">

        <div className="header-logo">
          <a href="#">sick logo here</a>
        </div>

        <ul className="header-list">
          <li>{username}</li>
          <li>{authButton}</li>
        </ul>

      </header>
    )
  }
});

module.exports = NavBar;
