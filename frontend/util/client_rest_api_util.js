var ServerRestActions = require("../actions/client_rest_actions");

var ClientRestApiUtil = {
  fetchRestaurants: function(){
    $.ajax({
      url: "PATH",
      type: "METHOD",
      success: function (RESPONSE) {
        ServerActions.METHODNAME(RESPONSE);
      }
    });
  }

};

module.exports = ClientRestApiUtil;
