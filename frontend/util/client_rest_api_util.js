var ServerRestActions = require("../actions/server_rest_actions");

var ClientRestApiUtil = {
  fetchRestaurants: function(){
    $.ajax({
      url: "api/restaurants",
      success: function (restaurants) {
        ServerRestActions.receiveRestaurants(restaurants);
      }
    });
  },

  getRestaurant: function(id){
    $.ajax({
      url: "api/restaurants/" + id,
      success: function (restaurant) {
        ServerRestActions.receiveRestaurant(restaurant);
      }
    });
  }

};

module.exports = ClientRestApiUtil;
