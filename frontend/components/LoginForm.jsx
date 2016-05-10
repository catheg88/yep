var React = require("react");
var UserActions = require("../actions/user_actions");
var CurrentUserState = require("../mixins/current_user_state");


var LoginForm = React.createClass({
	mixins: [CurrentUserState],
	getInitialState: function(){
		return {form: "login", username: "", password: ""};
	},

	setForm: function(e){
		this.setState({form: e.currentTarget.value});
	},

	usernameChange: function(e) {
		this.setState({ username: e.currentTarget.value });
	},

	passwordChange: function(e) {
		this.setState({ password: e.currentTarget.value });
	},

	handleSubmit: function(e){
		e.preventDefault();
		UserActions[this.state.form]({
			username: this.state.username,
			password: this.state.password
		});
	},

	logout: function(e){
		e.preventDefault();
		UserActions.logout();
	},

	errors: function(){
		if (!this.state.userErrors){
			return;
		}
		var self = this;
		return (<ul id="auth-errors">
		{
			Object.keys(this.state.userErrors).map(function(key, i){
				return (<li key={i}>{self.state.userErrors[key]}</li>);
			})
		}
		</ul>);
	},

	form: function(){
		if (this.state.currentUser) {
			return;
		}
		return(
			<form id="actual-login-form" onSubmit={this.handleSubmit}>
				<section>
					<br />
					<label id="un-field"> Username:&nbsp;&nbsp;&nbsp;<br />
						<input type="text" value={this.state.username} onChange={this.usernameChange}/>
					</label>
					<br />
					<br />
					<label id="pw-field"> Password:&nbsp;&nbsp;&nbsp;<br />
						<input type="password" value={this.state.password} onChange={this.passwordChange}/>
					</label>
					<br />
					<br />
				</section>

				<section id="form-radios">
					<label>
						<input type="Radio" name="action" value="login" onChange={this.setForm}/>
						&nbsp;Login&nbsp;&nbsp;
					</label>
					<br />
					<label>
						<input type="Radio" name="action" value="signup" onChange={this.setForm}/>
						&nbsp;Sign Up&nbsp;&nbsp;
					</label>
					<br />
					<label>
						<input type="Radio" name="action" value="guestLogin" onChange={this.setForm}/>
						&nbsp;Guest Login&nbsp;&nbsp;
					</label>
				</section>
				<br />
				<div className="form-button" onClick={this.handleSubmit}>Submit</div>
			</form>
		);
	},

				// <div id="login-errors">{this.errors()}</div>

	render: function(){
		return (
			<div id="login-form">
				{this.form()}

			</div>
		);
	}
});

module.exports = LoginForm;
