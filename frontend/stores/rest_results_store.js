var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var RestResultsStore = new Store(AppDispatcher);

var _restResults, restaurantDetail;

RestResultsStore.__onDispatch = function (payload) {
  switch (payload.ActionType) {
  case "LOGIN":
    RestResultsStore.login(payload.user);
    break;
  case "LOGOUT":
    RestResultsStore.logout();
    break;
  case "ERROR":
    RestResultsStore.setErrors(payload.errors);
    break;
  }
  RestResultsStore.__emitChange();
};

module.exports = RestResultsStore;
