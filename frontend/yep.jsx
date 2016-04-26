import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

var React = require('react'),
    ReactDOM = require('react-dom');
    // PostIndex = require('./components/postIndex.jsx'),
    // PostShow = require('./components/postShow.jsx'),
    // PostEdit = require('./components/postEdit.jsx');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>YEP</h1>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>

  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("content");
  ReactDOM.render(<Router history={hashHistory} routes={routes}/>, root);
});
