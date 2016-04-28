var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var RestaurantResultsStore = new Store(AppDispatcher);

var _restaurantResults, restaurantDetail;

RestaurantResultsStore.__onDispatch = function (payload) {
  switch (payload.ActionType) {
  case "LOGIN":
    RestaurantResultsStore.login(payload.user);
    break;
  case "LOGOUT":
    RestaurantResultsStore.logout();
    break;
  case "ERROR":
    RestaurantResultsStore.setErrors(payload.errors);
    break;
  }
  RestaurantResultsStore.__emitChange();
};

module.exports = RestaurantResultsStore;
