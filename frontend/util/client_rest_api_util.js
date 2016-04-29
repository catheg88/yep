var ServerRestActions = require("../actions/server_rest_actions");

var ClientRestApiUtil = {
  fetchRestaurants: function(){
    $.ajax({
      url: "api/restaurants",
      type: "GET",
      success: function (restaurants) {
        ServerRestActions.receiveRestaurants(restaurants);
      }
    });
  }

};

module.exports = ClientRestApiUtil;
