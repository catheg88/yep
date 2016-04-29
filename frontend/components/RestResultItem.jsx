var React = require("react");

RestResultItem = React.createClass({
  // contextTypes: {
  //   router: React.PropTypes.object.isRequired
  // },
  //
  // showDetail: function () {
  //   this.context.router.push('/pokemon/'+ this.props.pokemon.id);
  // },

  // onClick={this.showDetail} // this was from the li tag

  render: function () {
    return(
      <li className="rest-result-item">
        <p>Name: {this.props.restaurant.name}</p>
      </li>
    );
  }
});

module.exports = RestResultItem;
