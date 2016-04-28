div id root
  div id pokedex
    div class pokemon-index-pane
      form class new pokemon
        div
          label pokemon_name
          input type=text id=pokemon_name
        div
        div
        button Create Pokemon
      ul
        li class poke-list-item
        li class poke-list-item
        li class poke-list-item
    div // right pane
      div class pokemon-detail-pane
        div class detail
        h2 class detail-header // toy header
        ul
          p toy list item
          p toy list item
          p toy list item

items that care whether we're logged in or not
  navbar // signed in status as navbar's state. navbar listens to user store
    user name
    sign up/sign in button / sign out button

      both sub-elements are not react elements, just displayed or not based on
      the navbar's state.


  restaurant results // always displayed. state = what restaurants to display
    listens to restaurants store
    for now, it should display all restaurants
      make a fetchAllRestaurants client action, to populate restaurant store
      restaurant results controller serves up all the restaurants
        path?
      receiveRestaurants server action, which dispatches the restaurants and adds them to the restaurant store
      restaurant results updates its state to reflect all restaurants in store

      all the restaurants reviews should be included in the store, yes?


  restaurant // state = whether to display in condensed or expanded view.  doesn't listen to a store; listens for a click to    expand // actually, it better listen to the store, so that when someone posts a review, it adds it
    when expanded:
      details: already has them, from the store
      reviews - separate fetch request to pull reviews for only one restaurant into restaurant store // state = determined
        review index // state = reviews to show. listens to reviews store
        review/sign in button // state = signed in status.  listens to session store
        review form as modal
        on review submit, updates state; setRestaurant
          make a setRestaurant client action
          restaurant controller posts the new data, returns just one


  react router: its job is to decide what components to display at any given time
  navbar
    should be displayed always, so i can render that component straight into App, yes? and keep it out of the router
      same for the restaurants list.  always render, not part of router
    it listens to the users store, for
      1) whether logged in, and
      2) who the current user is
    it always has two components:
      1) username: either the current user from store or ""
      2) button to sign up/sign in, or sign out
      these 2 components are always rendered, and what is rendered depends on state of navbar
    api and controller for this already set up

  next, turn login form into a modal that is rendered when someone clicks button on navbar, or button to add a review.
    needs to be in the router, bc sometimes it's rendered and sometimes it's not.
    hook it up to onClick listeners on navbar, review form button
      handleClick:  router changes url, renders login modal
    when form is submitted, change url back to app.

  next, make search results
    not in router; always displayed


  stores
    -not refactoring login; don't need user store
    -instead, i need a reviews store. user data associated w each review
  review form: should it listen to the user store?

  restaurant


render the nav bar and the showrestaurants right into the app navbar

  i think there's only going to be 2 routes:
  showing the login modal
  showing the review form modal





KNOWN ISSUES/TODOS:
-benchBnB front-end auth makes several GET requests always, so when you
 refresh the page the screen flickers from the login form to logged in
  -solution:  style the header so that before it loads, it's "LOADING"
  -catch get requests - 404s
-hook up the authButton to the form

-modal
  -error with one setState or another...