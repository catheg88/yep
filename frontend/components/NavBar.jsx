var React = require("react");
var UserActions = require("../actions/user_actions"); // why am i including these? bc I'm utilizing logout
var CurrentUserState = require("../mixins/current_user_state");
var Modal = require("react-modal");
var ModalStyle = require("../../app/assets/stylesheets/modal_style");
var LoginForm = require('./LoginForm.jsx');
var UserStore = require("../stores/user_store.js");


var NavBar = React.createClass({
	mixins: [CurrentUserState],

  getInitialState: function(){
    return({ modalOpen: false })
  },

  componentDidMount: function() {
    this.listenerForModal = UserStore.addListener(this.closeModal);
  },

  closeModal: function() {
    if (this.state.currentUser) {
      this.setState({ modalOpen: false })
    }
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

  logout: function(e) {
    e.preventDefault();
    UserActions.logout();
  },

  render: function() {

    if (this.state.currentUser === undefined) { // before username state is set up
      var username = "not logged in"
      var authLink = <a href="#" id="sign-in-sign-up">sign in / sign up</a>
    } else { // after username state is set
      var username = "Hello, " + this.state.currentUser.username + "!"
      var authLink = <a href="#" id="sign-out" onClick={this.logout}>sign out</a>
    }

    return (
      <header className="header">

        <div className="header-logo">
          <a href="#">YEPP logo here</a>
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

        </Modal>

      </header>
    )
  }
});

module.exports = NavBar;
