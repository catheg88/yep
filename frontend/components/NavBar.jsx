var React = require("react");
var UserActions = require("../actions/user_actions"); // why am i including these?
var CurrentUserState = require("../mixins/current_user_state");
var Modal = require("react-modal");
var ModalStyle = require("../../app/assets/stylesheets/modal_style");
var LoginForm = require('./LoginForm.jsx');


var NavBar = React.createClass({
	mixins: [CurrentUserState],

  getInitialState: function(){
    return({ modalOpen: false })
  },

  _handleClick: function(){
    if (!this.state.currentUser) { // if signed in
      this.setState({ modalOpen: true });
    } else { // if not signed in
      // do something totally fuckin different
    }
  },

  onModalClose: function(){
    this.setState({ modalOpen: false })
  },

  render: function() {

    if (this.state.currentUser === undefined) { // before username state is set up
      var username = "not logged in"
      var authLink = <a href="#" id="sign-in-sign-up">sign in / sign up</a>
    } else { // after username state is set up
      var username = "Hello, " + this.state.currentUser.username + "!"
      var authLink = <a href="#" id="sign-out">sign out</a>
    }

    return (
      <header className="header">

        <div className="header-logo">
          <a href="#">sick logo here</a>
        </div>

        <ul className="header-list">
          <li>{username}</li>
          <li onClick={this._handleClick}>{authLink}</li>
        </ul>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}>
          <LoginForm />
          <br />
          <button onClick={this.onModalClose}>Close</button>
        </Modal>

      </header>
    )
  }
});

module.exports = NavBar;
