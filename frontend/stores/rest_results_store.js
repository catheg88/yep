var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var RestaurantConstants = require("../constants/restaurant_constants");

var RestResultsStore = new Store(AppDispatcher);

var _restResults = window._restResults = {}; // TODO
var _unselectedRestaurants = {};

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
  }
  RestResultsStore.__emitChange();
};

var resetRestaurants = function(restaurants) { // TODO this will keep a restuarant from updating if it's changed in the db
  // _restResults = {};
  restaurants.forEach(function(restaurant) {
    if (_restResults[restaurant.id] !== undefined) {
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

var setSelectedCuisines = function(cuisines) {
  Object.keys(cuisines).forEach(function(cuisine) { // for each selected cuisine
    if (cuisines[cuisine] === true) {
      // console.log("select " + cuisine);


      Object.keys(_restResults).forEach( function(_restResultKey) {
        // console.log(_restResults[_restResultKey].cuisine);
        if (_restResults[_restResultKey].cuisine === cuisine) {
          console.log(_restResults[_restResultKey]); // this is the same restaurant as store

        }
      });


    } else {
      return;
    }
  });
};




module.exports = RestResultsStore;

window.RestResultsStore = RestResultsStore;
