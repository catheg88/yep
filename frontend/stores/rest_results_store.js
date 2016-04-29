var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var RestaurantConstants = require("../constants/restaurant_constants");

var RestResultsStore = new Store(AppDispatcher);

var _restResults = window._restResults = {};

RestResultsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
  case RestaurantConstants.RESTAURANTS_RECEIVED:
    resetRestaurants(payload.restaurants);
    break;
  case RestaurantConstants.RESTAURANT_RECEIVED:
    resetRestaurant(payload.restaurant);
    break;
  }
  RestResultsStore.__emitChange();
};

var resetRestaurants = function(restaurants) {
  _restResults = {};
  restaurants.forEach(function(restaurant) {
    _restResults[restaurant.id] = restaurant;
    window._restResults[restaurant.id] = restaurant;
  });
};

var resetRestaurant = function(restaurant) {
  _restResults[restaurant.id] = restaurant;
};

module.exports = RestResultsStore;
