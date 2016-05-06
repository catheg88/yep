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
var RestResults = require('./components/RestResults.jsx');
var RestDetails = require('./components/RestDetails.jsx');

var CurrentUserState = require('./mixins/current_user_state');

var App = React.createClass({
  mixins: [CurrentUserState],
  render: function () {
    return (
      <div id="App">
        <NavBar />
        {this.props.children}
        <a id="gh-link" href="https://github.com/catheg88/yep">Visit catheg88's GitHub</a>
      </div>
    );
  }
});


var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={RestResults} />
      <Route path="restaurants" component={RestResults} />
      <Route path="restaurants/:id" component={RestDetails} />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  Modal.setAppElement(document.body)
  var root = document.getElementById('content');
  ReactDOM.render(routes, root);
});
