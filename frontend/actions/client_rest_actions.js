var ClientRestApiUtil = require("../util/client_rest_api_util.js");

var ClientRestActions = {
  fetchRestaurants: function(){
    ClientRestApiUtil.fetchRestaurants();
  }

};

module.exports = ClientRestActions;
