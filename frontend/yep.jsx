import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

var React = require('react'),
    ReactDOM = require('react-dom');

var LoginForm = require('./components/LoginForm');

var CurrentUserState = require('.mixins/current_user_state');

var App = React.createClass({
  mixins: [CurrentUserState],
  render: function () {
    return (
      <div>
        <h1>Yep!</h1>
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
  var root = document.getElementById("content");
  ReactDOM.render(<Router history={hashHistory} routes={routes}/>, root);
});
