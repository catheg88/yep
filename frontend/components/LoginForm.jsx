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
	greeting: function(){
		if (!this.state.currentUser) {
			return;
		}
		return (
			<div>
				<input type="submit" value="logout" onClick={this.logout}/>
			</div>
		);
	},
	errors: function(){
		if (!this.state.userErrors){
			return;
		}
		var self = this;
		return (<ul>
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
					<label> Username:<br />
						<input type="text" value={this.state.username} onChange={this.usernameChange}/>
					</label>
					<br />
					<br />
					<label> Password:<br />
						<input type="password" value={this.state.password} onChange={this.passwordChange}/>
					</label>
					<br />
					<br />
				</section>

				<section>
					<label> Login
						<input type="Radio" name="action" value="login" onChange={this.setForm}/>
					</label>

					<label> Sign Up
						<input type="Radio" name="action" value="signup" onChange={this.setForm}/>
					</label>
				</section>

				<button>Submit</button>
			</form>
		);
	},
	render: function(){
		return (
			<div id="login-form">
				{this.greeting()}
				{this.errors()}
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
