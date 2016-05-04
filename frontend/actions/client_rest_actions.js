var ClientRestApiUtil = require("../util/client_rest_api_util.js");

var ClientRestActions = {
  fetchRestaurants: function() {
    ClientRestApiUtil.fetchRestaurants();
  },

  getRestaurant: function(id) {
    ClientRestApiUtil.getRestaurant(id);
  },

  addReview: function(review) {
    ClientRestApiUtil.addReview(review);
  },

  editReview: function(review) {
    ClientRestApiUtil.editReview(review);
  }

};

module.exports = ClientRestActions;
