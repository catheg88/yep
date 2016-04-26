# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## SearchBar Cycles

### SearchBar API Request Actions

* `fetchAllRestaurants`
  0. invoked from `SearchBar` `didMount`/`willReceiveProps`
  0. `GET /api/restaurants` is called
  0. `receiveAllRestaurants` is set as the callback.

* `fetchMatchingRestaurants`
  0. invoked from `SearchBar,` `onChange` of input or `onChecked` cuisine type check boxes
  0. `GET /api/restaurants/` + a matcher from the component's state is called. #
  0. `receiveMatchingRestaurants` is set as the callback.

### SearchBar API Response Actions

* `receiveMatchingRestaurants`
  0. invoked from an API callback.
  0. `SearchStore` store updates `_matcher` and emits change.

### Store Listeners

* `SearchBar` component listens to `SearchBar` store.

## Reviews Cycles

### Reviews API Request Actions

* `fetchSingleReview`
  0. invoked from `RestaurantForm` `click` on Edit/Delete links
  0. `GET /api/reviews/:id` is called.
  0. `receiveSingleNotebook` is set as the callback.

* `fetchRestaurantReviews` `didMount`/`willReceiveProps`
* 0. invoked from `RestaurantForm` `
  0. `GET /api/reviews` is called. #
  0. `receiveRestaurantReviews` is set as the callback.

### Reviews API Response Actions

* `receiveRestaurantReviews`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews` and emits change.

* `receiveRestaurantReview`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews[id]` and emits change.

* `removeReview`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews[id]` and emits change.

###Review Listeners

* `Review` component listens to `Review` store.
