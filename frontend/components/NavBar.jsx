var React = require("react");
var hashHistory = require('react-router').hashHistory;
var UserActions = require("../actions/user_actions");
var CurrentUserState = require("../mixins/current_user_state");
var Modal = require("react-modal");
var LoginModalStyle = require("../../app/assets/stylesheets/login_modal_style");
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

	componentWillUnmount: function() {
		this.listenerForModal.remove();
	},

  closeModal: function() {
    if (this.state.currentUser) {
      this.setState({ modalOpen: false })
    }
  },

  handleClick: function(){
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

	handleGHClick: function() {
		window.location.replace("https://github.com/catheg88");
	},

  render: function() {

    if (this.state.currentUser === undefined) {
      var username = "Not logged in"
      var authLink = <div className="sisuso" onClick={this.handleClick}>Sign In/Up</div>
    } else {
      var username = "Hello, " + this.state.currentUser.username + "!"
      var authLink = <div className="sisuso" onClick={this.logout}>Sign Out</div>
    }

    return (
      <header className="header">
				<div id="header-left-side">
					<div className="header-logo" onClick={this.goHome}>
						YEPP
					</div>
					<img id="gh-img" src="http://res.cloudinary.com/dfthfd7v8/image/upload/v1464125123/gh-logo_cbietc.png" onClick={this.handleGHClick} />
				</div>

        <ul className="header-list">
          <li>{username}</li>
          <li onClick={this.handleClick}>{authLink}</li>
        </ul>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={LoginModalStyle}>
          <LoginForm />
        </Modal>

      </header>
    )
  }
});

module.exports = NavBar;
