# Yep

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: https://yepp.herokuapp.com

## Minimum Viable Product

Yep is a web application inspired by Yelp that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for a Yelp-inspired site: the ability to search for restaurants, view their details, and read and write reviews.
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](https://github.com/appacademy/sample-project-proposal/blob/master/docs/production_readme.md) -- you'll write this later)

## Product Goals and Priorities

Yep will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Search for restauraunts by name or category, with auto-completion and dynamic search results (MVP)
- [ ] Create, read, edit, and delete reviews (MVP)
- [ ] Expand and collapse restaurant details in search results (MVP)
- [ ] View all of a user's reviews (expected feature, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (1 day) Tues

**Objective:** Functioning rails project with Authentication, and live on Heroku

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [ ] blank landing page after signin
- [x] running on Heroku

### Phase 2: Create Restaurant and Review models, API, and basic APIUtil (2 days) Wed-Thurs

**Objective:**  can be created, read, edited and destroyed through
the API.

- [ ] create `Restaurant` model
- [ ] seed the database with a small amount of test data
- [ ] jBuilder views for restaurants
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (2 days) Fri-Sat

**Objective:** Restaurants can be returned using a dynamic search feature.
- [ ] setup the SearchBar
- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- [ ] implement the dynamic search component, building out the flux loop as needed.
  - [ ] `RestaurantResults`
  - [ ] `Restaurant`

### Phase 4: Start Styling (1 day) Sun

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Reviews (2 day) Mon, Tues

**Objective:** Reviews belong to both users and restaurants.

- build out API, Flux loop, and components for:
  - [ ] Review CRUD
- Use CSS to style new views


### Phase 6: Bonus - add view review by users functionality (2 days) Wed, Thurs

**Objective:** make model and introduce new view

- [ ] create new API & user views to view reviews by user
- build out API, Flux loop, and components for:
  - [ ] showing information about user
  - [ ] showing user's reviews

### Phase 7:  Styling Cleanup and Seeding (1 day) Fri

**objective:** Make the site feel more cohesive and awesome.

- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.
