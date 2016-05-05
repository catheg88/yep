User.create({
  username: "Guest",
  password: "password"
})

User.create({
  username: "atheg",
  password: "Woodland1"
})

User.create({
  username: "asdf",
  password: "asdfasdf"
})

Restaurant.create({
  name: "Wok 'n' Roll",
  cuisine: "Chinese",
  address: "123 Grant St.",
  phone: "415-867-5309",
  hours: "9am - 8pm Daily",
  description: "Hello, welcome to Wok 'n' Roll!"
})

Restaurant.create({
  name: "Al's Pizza",
  cuisine: "Pizza",
  address: "1533 11th Ave, San Francisco, CA, 94122",
  phone: "415-123-4567",
  hours: "8am-8pm Daily",
  description: "Come enjoy a classic San Francisco pizza!  This delicious pizza is locally sourced, and free from GMOs, trans fats, gluten, carbs, and dairy."
})

Restaurant.create({
  name: "Manny's Meatloaf",
  cuisine: "American",
  address: "1234 7th St, San Francisco, CA, 94118",
  phone: "415-518-7348",
  hours: "M-F 8am-8pm; WKND 8am-12am",
  description: "Meatloaf done right: meaty, loafy... oh man!"
})

Restaurant.create({
  name: "Chili Freeze",
  cuisine: "American",
  address: "1533 11th Ave, San Francisco, CA, 94120",
  phone: "415-128-9999",
  hours: "10am-8pm Daily",
  description: "Where else can you get chili ice cream?"
})

Restaurant.create({
  name: "McDonald's",
  cuisine: "American",
  address: "553 Cowtown Blvd, San Francisco, CA, 94111",
  phone: "415-734-5666",
  hours: "7am-11pm Daily",
  description: "Over 1 billion served"
})

Restaurant.create({name: "Carr's",
   cuisine: "American",
   address: "1 First St, San Francisco, CA 94118",
   phone: "666-666-6666",
   hours: "10am-8pm Daily",
   description: "Serving up an American heritage cow"
})

Restaurant.create({
  name: "The Oasis",
  cuisine: "Bars",
  address: "13 Elm St., San Francisco, CA 94119",
  phone: "415-822-8645",
  hours: "12pm-2am Daily",
  description: "A San Francisco classic, one of the original funky art on the walls places."
})

Restaurant.create({
  name: "Shining Time Station",
  cuisine: "Bars",
  address: "4658 Pine St., San Francisco, CA 94124",
  phone: "415-223-6441",
  hours: "12pm-2am Daily",
  description: "Train themed adult beverages, complete with the Trainwreck singature drink made with filtered charcoal."
})

Restaurant.create({
  name: "Jade Palace",
  cuisine: "Chinese",
  address: "599 3rd St., San Francisco, CA, 94116",
  phone: "415-885-7922",
  hours: "10am-8pm Daily",
  description: "All delicious dishes served with NO MSG.  Seriously!"
})

Restaurant.create({
  name: "Garden of Delightful Breakfast Drinks",
  cuisine: "CoffeeandTea",
  address: "88 Hip Way, San Francisco, CA, 94116",
  phone: "415-197-4588",
  hours: "7am-6pm Daily",
  description: "We get you your fix and start your day off right."
})

# ---

Restaurant.create({
  name: "Raja",
  cuisine: "Indian",
  address: "2 Folsom St., San Francisco, CA, 94116",
  phone: "415-452-2233",
  hours: "10am-8pm Daily",
  description: "All your Indian favorites."
})

Restaurant.create({
  name: "Banchan Party",
  cuisine: "Korean",
  address: "1800 Divisadero St., San Francisco, CA, 94120",
  phone: "415-452-5645",
  hours: "10am-10pm Daily",
  description: "Tiny plates!  But lots of them."
})

Restaurant.create({
  name: "Pepito's Tacos",
  cuisine: "LatinAmerican",
  address: "1869 Carrerra Ave., San Francisco, CA, 94118",
  phone: "415-315-7815",
  hours: "10am-10pm Daily",
  description: "Breakfast, Burritos, Tacos, and more.  Try our signature salsas."
})

Restaurant.create({
  name: "Keyser Soze",
  cuisine: "Ramen",
  address: "344 Embarcadero One, San Francisco, CA, 94117",
  phone: "415-315-1411",
  hours: "12pm-8pm Daily",
  description: "Traditional Ramen with a criminal twist."
})

Restaurant.create({
  name: "Carl's Deli",
  cuisine: "Sandwiches",
  address: "94 Summer St., San Francisco, CA, 94117",
  phone: "415-879-1355",
  hours: "12pm-8pm Daily",
  description: "Our famous Heartstopper will... STOP YOUR HEART!"
})

Restaurant.create({
  name: "Catch of the Century",
  cuisine: "Seafood",
  address: "93 Cantor St., San Francisco, CA, 94117",
  phone: "415-666-7948",
  hours: "12pm-8pm Daily",
  description: "Very clean seafood; no mercury!"
})

Restaurant.create({
  name: "MaSu",
  cuisine: "Sushi",
  address: "123 Lonely Ave., San Francisco, CA, 94121",
  phone: "415-916-6653",
  hours: "12pm-11pm Daily",
  description: "Only the rawest of the raw fish!"
})

Restaurant.create({
  name: "Thai Land",
  cuisine: "Thai",
  address: "2238 Clement St., San Francisco, CA, 94118",
  phone: "415-916-7945",
  hours: "12pm-10pm Daily",
  description: "Contains nuts.  Lots of nuts!"
})

Restaurant.create({
  name: "Mo's Vietnamese Kitchen",
  cuisine: "Vietnamese",
  address: "4811 Garber Ave., San Francisco, CA, 94121",
  phone: "415-888-4441",
  hours: "12pm-11pm Daily",
  description: "Serving a delicious taste of Vietnam since 1987."
})

Review.create({
  rev_content: "The food wasn't very good and the owner was incredibly rude.",
  yepp: false,
  user_id: 3,
  restaurant_id: 1,
  username: "Guest"
})

Review.create({
  rev_content: "Ask for their secret Mongolian menu!",
  yepp: true,
  user_id: 2,
  restaurant_id: 1,
  username: "atheg"
})

Review.create({
  rev_content: "oooo!",
  yepp: true,
  user_id: 2,
  restaurant_id: 1,
  username: "asdf"
})

Review.create({
  rev_content: "They served me green breadsticks!",
  yepp: false,
  user_id: 2,
  restaurant_id: 2,
  username: "atheg"
})

Review.create({
  rev_content: "The best pizza in town.",
  yepp: true,
  user_id: 2,
  restaurant_id: 2,
  username: "Guest"
})

Review.create({
  rev_content: "jkl;!",
  yepp: false,
  user_id: 2,
  restaurant_id: 2,
  username: "asdf"
})

Review.create({
  rev_content: "Yum!",
  yepp: true,
  user_id: 2,
  restaurant_id: 3,
  username: "atheg"
})

Review.create({
  rev_content: "Yuck!",
  yepp: false,
  user_id: 2,
  restaurant_id: 3,
  username: "Guest"
})

Review.create({
  rev_content: "BLARGLE!",
  yepp: false,
  user_id: 2,
  restaurant_id: 3,
  username: "asdf"
})
