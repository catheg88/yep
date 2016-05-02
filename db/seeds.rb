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
  name: "City Wok",
  cuisine: "Mongilian",
  address: "123 Grant St.",
  phone: "415-867-5309",
  hours: "9am - 8pm",
  description: "Hello, welcome to CityWok!"
})

Restaurant.create({
  name: "Al's Pizza",
  cuisine: "Pizza",
  address: "1533 11th Ave, San Francisco, CA, 94122",
  phone: "415-123-4567",
  hours: "Daily 8am-8pm",
  description: "Come enjoy a classic San Francisco pizza!"
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
  hours: "Daily 10am-8pm",
  description: "Where else can you get chili ice cream?"
})

Restaurant.create({
  name: "McDonald's",
  cuisine: "McDelicious",
  address: "553 Cowtown Blvd, San Francisco, CA, 94111",
  phone: "415-734-5666",
  hours: "7am-11pm Daily",
  description: ""
})

Restaurant.create({
  name: "placeholder",
  cuisine: "placeholder",
  address: "placeholder",
  phone: "placeholder",
  hours: "placeholder",
  description: "placeholder"
})

Restaurant.create({
  name: "placeholder2",
  cuisine: "placeholder",
  address: "placeholder",
  phone: "placeholder",
  hours: "placeholder",
  description: "placeholder"
})

Restaurant.create({
  name: "placeholder3",
  cuisine: "placeholder",
  address: "placeholder",
  phone: "placeholder",
  hours: "placeholder",
  description: "placeholder"
})

Restaurant.create({
  name: "placeholder4",
  cuisine: "placeholder",
  address: "placeholder",
  phone: "placeholder",
  hours: "placeholder",
  description: "placeholder"
})

Restaurant.create({
  name: "placeholder5",
  cuisine: "placeholder",
  address: "placeholder",
  phone: "placeholder",
  hours: "placeholder",
  description: "placeholder"
})

Review.create({
  rev_content: "The food wasn't very good and the owner was incredibly rude.",
  yepp: false,
  user_id: 3,
  restaurant_id: 1
})
