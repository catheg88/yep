var UserConstants = require('../constants/user_constants');
var UserApiUtil = require('../util/user_api_util');
var UserStore = require('../stores/user_store');
var AppDispatcher = require('../dispatcher/dispatcher');

var UserActions = {
  // 1
  fetchCurrentUser: function(){
    UserApiUtil.fetchCurrentUser(UserActions.receiveCurrentUser, UserActions.handleError);
  },

  // 1
  login: function(user){
    UserApiUtil.post({
      url: "/api/session",
      user: user,
      success: UserActions.receiveCurrentUser,
      error: UserActions.handleError
    });
  },

  // 2
  guestLogin: function(){
    UserActions.login({username: "guest", password: "password"});
  },

  //1
  signup: function(user){
    UserApiUtil.post({
      url: "/api/user",
      user: user,
      success: UserActions.receiveCurrentUser,
      error: UserActions.handleError
    });
  },

  // 2 helper invoked by fetchCurrentUser, login, signup
  receiveCurrentUser: function(user){
    console.log("204 triggered success");
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGIN,
      user: user
    });
  },

  // 1
  logout: function(){
    UserApiUtil.logout(UserActions.removeCurrentUser, UserActions.handleError);
  },

  // 2 helper invoked by logout
  removeCurrentUser: function(){
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGOUT
    });
  },

// 2 helper invoked by most core actions
  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }
};

module.exports = UserActions;
