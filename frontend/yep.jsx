var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var React = require('react'),
    ReactDOM = require('react-dom');
    Modal = require("react-modal");

var LoginForm = require('./components/LoginForm.jsx');
var NavBar = require('./components/NavBar.jsx');
var RestaurantResults = require('./components/RestaurantResults.jsx');

var CurrentUserState = require('./mixins/current_user_state');

var App = React.createClass({
  mixins: [CurrentUserState],
  render: function () {
    return (
      <div>
        <NavBar />
        <RestaurantResults />
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>

    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  Modal.setAppElement(document.body)
  var root = document.getElementById('content');
  ReactDOM.render(routes, root);
});
