var ServerRestActions = require("../actions/server_rest_actions");
var Dispatcher = require('../dispatcher/dispatcher.js');

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
  },

  addReview: function(review) { // y
    $.ajax({
      url: "api/reviews",
      type: "POST",
      data: {review: {rev_content: review.rev_content,
                      yepp: review.yepp,
                      username: review.username,
                      restaurant_id: review.restaurant_id
        }
      },
      success: function (restaurant) {
        ServerRestActions.receiveRestaurant(restaurant);
      },
      error: ClientRestApiUtil.handleError
    });
  },

  editReview: function(review) {
    $.ajax({
      url: "api/reviews/" + review.id,
      type: "PATCH",
      data: {review: {rev_content: review.rev_content,
                      yepp: review.yepp,
                      username: review.username,
                      restaurant_id: review.restaurant_id
                    }
                  },
      success: function (restaurant) {
        ServerRestActions.receiveRestaurant(restaurant);
      }
      // error: ClientRestActions.handleError
    });
  },

  deleteReview: function(id) {
    $.ajax({
      url: "api/reviews/" + id,
      type: "DELETE",
      success: function (restaurant) {
        ServerRestActions.receiveRestaurant(restaurant);
      }
    });
  },

  handleError: function(error) {
    Dispatcher.dispatch({
      actionType: "REV_ERROR",
      errors: error.responseJSON.errors
    });
  }

};

module.exports = ClientRestApiUtil;
