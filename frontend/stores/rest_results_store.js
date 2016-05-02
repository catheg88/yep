var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var RestaurantConstants = require("../constants/restaurant_constants");

var RestResultsStore = new Store(AppDispatcher);

var _restResults = window._restResults = {}; // TODO


RestResultsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
  case RestaurantConstants.RESTAURANTS_RECEIVED:
    resetRestaurants(payload.restaurants);
    break;
  case RestaurantConstants.RESTAURANT_RECEIVED:
    setRestaurant(payload.restaurant);
    break;
  }
  RestResultsStore.__emitChange();
};

var resetRestaurants = function(restaurants) { // TODO this will keep a restuarant from updating if it's changed in the db
  // _restResults = {};
  restaurants.forEach(function(restaurant) {
    // debugger
    if (_restResults[restaurant.id] !== undefined) {
      // console.log(_restResults[restaurant.id]);
      return;
    }
    _restResults[restaurant.id] = restaurant;
    window._restResults[restaurant.id] = restaurant; // TODO
  });
};

var setRestaurant = function(restaurant) {
  _restResults[restaurant.id] = restaurant;
  window._restResults[restaurant.id] = restaurant; // TODO
};

RestResultsStore.all = function () {
  var restaurants = [];
  for (var id in _restResults) {
    restaurants.push(_restResults[id]);
  }
  return restaurants;
};

RestResultsStore.find = function(id) {
  return _restResults[id];
};

module.exports = RestResultsStore;

window.RestResultsStore = RestResultsStore;
