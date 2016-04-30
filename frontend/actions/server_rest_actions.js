var Dispatcher = require('../dispatcher/dispatcher.js');
var RestaurantConstants = require('../constants/restaurant_constants.js');

var ServerRestActions = {

  receiveRestaurants: function (restaurants) {
    Dispatcher.dispatch({
      actionType: RestaurantConstants.RESTAURANTS_RECEIVED,
      restaurants: restaurants
    });
  },

  receiveRestaurant: function (restaurant) {
    console.log("receiveRestaurant server action");
    Dispatcher.dispatch({
      actionType: RestaurantConstants.RESTAURANT_RECEIVED,
      restaurant: restaurant
    });
  }



};

module.exports = ServerRestActions;
