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
        {this.props.restaurant.name}
      </li>
    );
  }
});

module.exports = RestResultItem;
