# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Restaurant.create({name: "City Wok",
                   cuisine: "Mongilian",
                   address: "123 Grant St.",
                   phone: "415-867-5309",
                   hours: "9am - 8pm",
                   description: "Hello, welcome to CityWok!"
                   })

Restaurant.create({name: "Al's Pizza",
                   cuisine: "Pizza",
                   address: "1533 11th Ave, San Francisco, CA, 94122",
                   phone: "415-123-4567",
                   hours: "Daily 8am-8pm",
                   description: "Come enjoy a classic San Francisco pizza!"
                   })

Restaurant.create({name: "Manny's Meatloaf",
                   cuisine: "American",
                   address: "1234 7th St, San Francisco, CA, 94118",
                   phone: "415-518-7348",
                   hours: "M-F 8am-8pm; WKND 8am-12am",
                   description: "Meatloaf done right: meaty, loafy... oh Momma!"
                   })

Restaurant.create({name: "Chili Freeze",
                   cuisine: "American",
                   address: "1533 11th Ave, San Francisco, CA, 94120",
                   phone: "415-128-9999",
                   hours: "Daily 10am-8pm",
                   description: "Where else can you get chili ice cream?"
                   })
