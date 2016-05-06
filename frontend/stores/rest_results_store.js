var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var RestaurantConstants = require("../constants/restaurant_constants");

var RestResultsStore = new Store(AppDispatcher);

var _restResults = window._restResults = {}; // TODO
var _unselectedRestaurants = {};
var _errors;

RestResultsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
  case RestaurantConstants.RESTAURANTS_RECEIVED:
    resetRestaurants(payload.restaurants);
    break;
  case RestaurantConstants.RESTAURANT_RECEIVED:
    setRestaurant(payload.restaurant);
    break;
  case "CUISINE_CHANGE":
    setSelectedCuisines(payload.cuisines);
    break;
  case "REV_ERROR":
    RestResultsStore.setErrors(payload.errors);
    break;
  }
  RestResultsStore.__emitChange();
};

var resetRestaurants = function(restaurants) { // TODO this will keep a restuarant from updating if it's changed in the db
  _restResults = {};
  _errors = null; // candidate

  restaurants.forEach(function(restaurant) {
    // if (_restResults[restaurant.id]) {
    //   return;
    // }
    _restResults[restaurant.id] = restaurant;
    window._restResults[restaurant.id] = restaurant; // TODO
  });
};

var setRestaurant = function(restaurant) {
  _errors = null; // candidate

  _restResults[restaurant.id] = restaurant;
  window._restResults[restaurant.id] = restaurant; // TODO
};

RestResultsStore.all = function () {
  _errors = null; // candidate

  var restaurants = [];
  for (var id in _restResults) {
    restaurants.push(_restResults[id]);
  }
  return restaurants;
};

RestResultsStore.find = function(id) {
  _errors = null; // candidate

  return _restResults[id];
};

RestResultsStore.setErrors = function(errors) {
  _errors = errors;
  // console.log(_errors);
};

RestResultsStore.errors = function() {
  if (_errors) {
    return [].slice.call(_errors);
  }
};

var setSelectedCuisines = function(cuisines) {
  for (var restaurant in _unselectedRestaurants) {
    _restResults[restaurant] = _unselectedRestaurants[restaurant];
  }

  _unselectedRestaurants = {};

  Object.keys(cuisines).forEach(function(cuisine) { // for each selected cuisine
    if (cuisines[cuisine] === false) {

      Object.keys(_restResults).forEach( function(_restResultKey) {
        var restaurant = _restResults[_restResultKey]; // for each restaurant in the store,
        if (restaurant.cuisine === cuisine) { // if it doesn't match the cuisine type,
          _unselectedRestaurants[restaurant.id] = restaurant; // copy it to unselected store
          delete _restResults[restaurant.id]; // then remove it from the store
        }
      });

    } else {
      return;
    }
  });
};




module.exports = RestResultsStore;

window.RestResultsStore = RestResultsStore;
