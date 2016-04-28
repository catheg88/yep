var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var React = require('react'),
    ReactDOM = require('react-dom');

var LoginForm = require('./components/LoginForm.jsx');
var NavBar = require('./components/NavBar.jsx');

var CurrentUserState = require('./mixins/current_user_state');

var App = React.createClass({
  mixins: [CurrentUserState],
  render: function () {
    return (
      <div>
        <NavBar />
        <LoginForm />
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
  var root = document.getElementById('content');
  ReactDOM.render(routes, root);
});
