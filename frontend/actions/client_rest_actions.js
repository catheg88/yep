var ClientRestApiUtil = require("../util/client_rest_api_util.js");

var ClientRestActions = {
  fetchRestaurants: function(){
    ClientRestApiUtil.fetchRestaurants();
  },

  getRestaurant: function(id){
    console.log("getRestaurant client action, id: " + id);
    ClientRestApiUtil.getRestaurant(id);
  }

};

module.exports = ClientRestActions;
