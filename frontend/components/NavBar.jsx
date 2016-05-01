var React = require("react");
var hashHistory = require('react-router').hashHistory;
var UserActions = require("../actions/user_actions");
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
    if (!this.state.currentUser) {
      this.setState({ modalOpen: true });
    }
  },

  onModalClose: function(){
    this.setState({ modalOpen: false })
  },

  logout: function(e) {
    e.preventDefault();
    UserActions.logout();
  },

	goHome: function() {
		hashHistory.push("/");
	},

  render: function() {

    if (this.state.currentUser === undefined) {
      var username = "Not logged in"
      var authLink = <a href="#" id="sign-in-sign-up">Sign In/Up</a>
    } else {
      var username = "Hello, " + this.state.currentUser.username + "!"
      var authLink = <a href="#" id="sign-out" onClick={this.logout}>Sign Out</a>
    }

    return (
      <header className="header">

        <div className="header-logo" onClick={this.goHome}>
					YEPP
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
        </Modal>

      </header>
    )
  }
});

module.exports = NavBar;
