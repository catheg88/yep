# YEPP

[YEPP][heroku]

[heroku]: https://yepp.herokuapp.com

YEPP is a web application inspired by Yelp, using Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.

## Features & Implementation

### Single-Page Design

This web application is built with a single static page design.  All content is rendered into a single "content" div:

`<div id="content"></div>`

Decisions about what React components to render are handled by the React router. It always serves up an `App` component, and changes to displayed content are achieved by rendering its children.

"""
<Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={RestResults} />
    <Route path="restaurants" component={RestResults} />
    <Route path="restaurants/:id" component={RestDetails} />
  </Route>
</Router>
"""

YEPP utilizes a PostgreSQL database.  The Rails application has the following tables:

* Users, which stores username, hashed passwords, and session tokens
* Restaurants, which holds name, cuisine type, address, phone number, hours, and a description
* Reviews, which contains review text, review "Yepps" ("Yepp!" or "Nope!" as a boolean), and restaurant and user ids to join the restaurants, reviewers, and reviews through ActiveRecord associations.

### Restaurant Viewing

A restaurant store holds and updates information on the restaurants to display.  The initial request to the database, made by the home page, fetches the minimum restaurant information required to display in the restaurant index.  Clicking on a restaurant makes an additional request to fetch the full restaurant information, including reviews, for display on the details view.  Once the restaurant store fetches full information on a restaurant, subsequent views of the same details page rely on the stored restaurant information and do not make fresh server requests for restaurant details.  New server requests to retrieve a restaurant's information from the database are triggered only by events that change the restaurant in the database (e.g., leaving a review).

### Filtering by Cuisine Type

The filter controls on the home page allow a user to select specific cuisine types for display.  The filter checkboxes listen to the restaurant store for changes.  Their status (checked or unchecked) is linked to the component's state.  Updating the filters updates the component's state, which triggers a filter action in the restaurant store.  Restaurants not matching the current filter criteria are removed from the store, and added to a separate local store of unselected restaurants.  When the filter is expanded to include more restaurants, the app uses both stores to find all restaurant information, again avoiding additional unnecessary server requests for information the store has already received.

### Posting, Editing, and Deleting Reviews

Users can leave reviews and see them rendered into the restaurant details in real time. Users are allowed one review only; once a review is submitted, the app identifies and highlights the user's review (through the detail component's state).  User's own reviews are editable and deletable at will, with an edit form that pre-populates with the user's review information.

### Future Development:

I continue to actively develop this project to expand its features and functionality.  Future features for development include:

* Additional restaurant sorting, with dynamic text search
* Review sorting, by date created and positive/negative review sentiment
* Restaurant scoring, to display a "Yepp" percentage
* User Profiles, to view reviews by user
