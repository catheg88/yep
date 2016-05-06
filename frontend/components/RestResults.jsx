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
    ClientRestActions.handleCuisineChange(this.state.cuisines)
  },

  selectAll: function() {
    var cuisinesForState = {
      "American": true,
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
    this.setState({ cuisines: cuisinesForState }, function() {
      ClientRestActions.handleCuisineChange(this.state.cuisines)
    });
  },

  uncheckAll: function() {
    var cuisinesForState = {
      "American": false,
      "Bars": false,
      "Chinese": false,
      "CoffeeandTea": false,
      "Indian": false,
      "Korean": false,
      "LatinAmerican": false,
      "Pizza": false,
      "Ramen": false,
      "Sandwiches": false,
      "Seafood": false,
      "Sushi": false,
      "Thai": false,
      "Vietnamese": false
    }
    this.setState({ cuisines: cuisinesForState }, function() {
      ClientRestActions.handleCuisineChange(this.state.cuisines)
    });
  },




  render: function() {

    var yeppInfo = (
      <section id="yepp-info">
        <div id="yepp-info-logo">YEPP</div>
        <div className="subtitle">1. Discover eats in San Francisco...</div>
        <br />
        <div className="subtitle">2. RENDER JUDGEMENT!</div>
      </section>
    )

    var filter = (<form id="filter" onSubmit={this.handleSubmit}>
      <div id="filter-column-holder">
        <div className="filter-column" id="col-i">
          <label><input type="checkbox" value="American" onChange={this.handleCuisineChange} checked={this.state.cuisines["American"]} />&nbsp;American</label><br />
          <label><input type="checkbox" value="Bars" onChange={this.handleCuisineChange} checked={this.state.cuisines["Bars"]} />&nbsp;Bars</label><br />
          <label><input type="checkbox" value="Chinese" onChange={this.handleCuisineChange} checked={this.state.cuisines["Chinese"]} />&nbsp;Chinese</label><br />
          <label><input type="checkbox" value="CoffeeandTea" onChange={this.handleCuisineChange} checked={this.state.cuisines["CoffeeandTea"]} />&nbsp;Coffee and Tea</label><br />
          <label><input type="checkbox" value="Indian" onChange={this.handleCuisineChange} checked={this.state.cuisines["Indian"]} />&nbsp;Indian</label><br />
          <label><input type="checkbox" value="Korean" onChange={this.handleCuisineChange} checked={this.state.cuisines["Korean"]} />&nbsp;Korean</label><br />
          <label><input type="checkbox" value="LatinAmerican" onChange={this.handleCuisineChange} checked={this.state.cuisines["LatinAmerican"]} />&nbsp;Latin American</label><br />
        </div>
        <div className="filter-column">
          <label><input type="checkbox" value="Pizza" onChange={this.handleCuisineChange} checked={this.state.cuisines["Pizza"]} />&nbsp;Pizza</label><br />
          <label><input type="checkbox" value="Ramen" onChange={this.handleCuisineChange} checked={this.state.cuisines["Ramen"]} />&nbsp;Ramen</label><br />
          <label><input type="checkbox" value="Sandwiches" onChange={this.handleCuisineChange} checked={this.state.cuisines["Sandwiches"]} />&nbsp;Sandwiches</label><br />
          <label><input type="checkbox" value="Seafood" onChange={this.handleCuisineChange} checked={this.state.cuisines["Seafood"]} />&nbsp;Seafood</label><br />
          <label><input type="checkbox" value="Sushi" onChange={this.handleCuisineChange} checked={this.state.cuisines["Sushi"]} />&nbsp;Sushi</label><br />
          <label><input type="checkbox" value="Thai" onChange={this.handleCuisineChange} checked={this.state.cuisines["Thai"]} />&nbsp;Thai</label><br />
          <label><input type="checkbox" value="Vietnamese" onChange={this.handleCuisineChange} checked={this.state.cuisines["Vietnamese"]} />&nbsp;Vietnamese</label><br />
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
              <div className="filter-button" onClick={this.uncheckAll}>Uncheck all</div>
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
