var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var RestaurantConstants = require("../constants/restaurant_constants");

var RestResultsStore = new Store(AppDispatcher);

var _restResults = window._restResults = {};

RestResultsStore.__onDispatch = function (payload) {
  // console.log("hit RRS.__onDispatch.  payload.actionType:" + payload.actionType)
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

var resetRestaurants = function(restaurants) {
  _restResults = {};
  restaurants.forEach(function(restaurant) {
    _restResults[restaurant.id] = restaurant;
    window._restResults[restaurant.id] = restaurant; // TODO
  });
};

var setRestaurant = function(restaurant) {
  _restResults[restaurant.id] = restaurant;
};

RestResultsStore.all = function () {
  var restaurants = [];
  for (var id in _restResults) {
    restaurants.push(_restResults[id]);
  }
  return restaurants;
};

module.exports = RestResultsStore;

window.RestResultsStore = RestResultsStore;
