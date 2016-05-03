var UserStore = require('../stores/user_store');
var UserActions = require('../actions/user_actions');

var CurrentUserState = {

	getInitialState: function(){
		return {
			currentUser: UserStore.currentUser(),
			userErrors: UserStore.errors()
		};
	},

	componentDidMount: function(){
		this.userListener = UserStore.addListener(this.updateUser);
		if (typeof UserStore.currentUser() === 'undefined') {
			UserActions.fetchCurrentUser();
		}
	},

	componentWillUnmount: function(){
		this.userListener.remove();
	},

	updateUser: function(){
		this.setState({
			currentUser: UserStore.currentUser(),
			userErrors: UserStore.errors(),
		});
		if (this.state.currentUser !== undefined) {
			this.setState({ loginModalOpen: false })
		}
	}

};

module.exports = CurrentUserState;
