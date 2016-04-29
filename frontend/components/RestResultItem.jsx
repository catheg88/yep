var React = require("react");
var ClientRestActions = require("../actions/client_rest_actions");

RestResultItem = React.createClass({
  // contextTypes: {
  //   router: React.PropTypes.object.isRequired
  // },
  //
  // showDetail: function () {
  //   this.context.router.push('/pokemon/'+ this.props.pokemon.id);
  // },

  // onClick={this.showDetail} // this was from the li tag

  showDetail: function(e) {
    console.log(e.currentTarget);
    ClientRestActions.fetchRestaurants();
    ClientRestActions.getRestaurant(e.currentTarget.id);
  },

  render: function () {
    return(
      <li className="rest-result-item" onClick={this.showDetail} id={this.props.restaurant.id}>
        {this.props.restaurant.name}
        {this.props.restaurant.cuisine}
        {this.props.restaurant.hours}
        {this.props.restaurant.address}
        {this.props.restaurant.phone}
        {this.props.restaurant.description}

      </li>
    );
  }
});

module.exports = RestResultItem;
