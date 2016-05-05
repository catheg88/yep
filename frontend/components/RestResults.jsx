var React = require("react");
var RestResultsStore = require("../stores/rest_results_store.js");
var RestResultItem = require("./RestResultItem.jsx");
var ClientRestActions = require("../actions/client_rest_actions.js");

var RestResults = React.createClass({
  getInitialState: function() {
    return { restaurants: RestResultsStore.all(),
      cuisines: {"American": true,
      "Bars": true,
      "Chinese": true,
      "CoffeeandTea": true,
      "Indian": true,
      "Korean": true,
      "LatinAmerican": true,
      "Pizza": true,
      "Ramen": true,
      "Sandwiches": true,
      "Seafood": true,
      "Sushi": true,
      "Thai": true,
      "Vietnamese": true
      }
    };
  },

  componentDidMount: function() {
    this.restListener = RestResultsStore.addListener(this.updateRestaurants);
    ClientRestActions.fetchRestaurants();
  },

  componentWillUnmount:  function() {
    this.restListener.remove();
  },

  updateRestaurants: function() {
    this.setState({ restaurants: RestResultsStore.all() })
  },

  handleSubmit: function() {},

  handleCuisineChange: function(e) {
    var cuisinesFromState = this.state.cuisines;
    if (this.state.cuisines[e.currentTarget.value]) {
      cuisinesFromState[e.currentTarget.value] = false;
      this.setState({ cuisines: cuisinesFromState })
    } else {
      cuisinesFromState[e.currentTarget.value] = true;
      this.setState({ cuisines: cuisinesFromState })
    }
    console.log(this.state.cuisines);
  },

  selectAll: function() {
    // this.setState({ })
  },

  uncheckAll: function() {
  },


  render: function() {


    var yeppInfo = (
      <section id="yepp-info">
        <p>YEPP stuff here</p>
      </section>
    )

    var filter = (<form id="filter" onSubmit={this.handleSubmit}>
      <div id="filter-column-holder">
        <div className="filter-column" id="col-i">
          <label><input type="checkbox" value="American" onChange={this.handleCuisineChange} />&nbsp;American</label><br />
          <label><input type="checkbox" value="Bars" onChange={this.handleCuisineChange} />&nbsp;Bars</label><br />
          <label><input type="checkbox" value="Chinese" onChange={this.handleCuisineChange} />&nbsp;Chinese</label><br />
          <label><input type="checkbox" value="CoffeeandTea" onChange={this.handleCuisineChange} />&nbsp;Coffee and Tea</label><br />
          <label><input type="checkbox" value="Indian" onChange={this.handleCuisineChange} />&nbsp;Indian</label><br />
          <label><input type="checkbox" value="Korean" onChange={this.handleCuisineChange} />&nbsp;Korean</label><br />
          <label><input type="checkbox" value="LatinAmerican" onChange={this.handleCuisineChange} />&nbsp;Latin American</label><br />
        </div>
        <div className="filter-column">
          <label><input type="checkbox" value="Pizza" onChange={this.handleCuisineChange} />&nbsp;Pizza</label><br />
          <label><input type="checkbox" value="Ramen" onChange={this.handleCuisineChange} />&nbsp;Ramen</label><br />
          <label><input type="checkbox" value="Sandwiches" onChange={this.handleCuisineChange} />&nbsp;Sandwiches</label><br />
          <label><input type="checkbox" value="Seafood" onChange={this.handleCuisineChange} />&nbsp;Seafood</label><br />
          <label><input type="checkbox" value="Sushi" onChange={this.handleCuisineChange} />&nbsp;Sushi</label><br />
          <label><input type="checkbox" value="Thai" onChange={this.handleCuisineChange} />&nbsp;Thai</label><br />
          <label><input type="checkbox" value="Vietnamese" onChange={this.handleCuisineChange} />&nbsp;Vietnamese</label><br />
        </div>
      </div>
    </form>)


    return (
      <div id="restaurant-results">
        <section id="filter-and-info">
          {yeppInfo}
          <div id="filter-holder">
            {filter}
            <div id="filter-button-holder">
              <div className="filter-button" onClick={this.selectAll}>Select all</div>
              <div className="filter-button" onClick={this.selectAll}>Uncheck all</div>
            </div>
          </div>
        </section>
        <header id="restaurant-results-header">
          Restaurants Results
        </header>
        <ul id="results-index">
          {this.state.restaurants.map(function (restaurant) {
            return <RestResultItem key={restaurant.id} restaurant={restaurant} />;
          })}
        </ul>
      </div>
    )
  }
});

module.exports = RestResults;
