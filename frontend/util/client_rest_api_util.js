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
  },

  addReview: function(review) {
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
      }
    });
  },

  editReview: function(review) {
    console.log(review.restaurant_id);
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
    });
  }

};

module.exports = ClientRestApiUtil;
