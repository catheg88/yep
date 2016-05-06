var ClientRestApiUtil = require("../util/client_rest_api_util.js");
// var Dispatcher = require('../dispatcher/dispatcher.js');

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
  },

  deleteReview: function(id) {
    ClientRestApiUtil.deleteReview(id);
  },

  handleCuisineChange: function(cuisines) {
    Dispatcher.dispatch({
      actionType: "CUISINE_CHANGE",
      cuisines: cuisines
    });
  },

  handleError: function() {
    // console.log("handleerrorhandleerrorhandleerrorhandleerrorhandleerrorhandleerror");
    // Dispatcher.dispatch({
    //   actionType: UserConstants.ERROR,
    //   errors: error.responseJSON.errors
    // });
  }

};

module.exports = ClientRestActions;
