# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Restaurant.create({name: "City Wok",
                   cuisine: "Mongolian BBQ",
                   address: "123 Grant St.",
                   phone: "415-867-5309",
                   hours: "9am - 8pm",
                   description: "Hello, welcome to CityWok!"
                   })

Restaurant.create({name: "Al's Pizza",
                   cuisine: "pizza",
                   address: "1533 11th Ave, San Francisco, CA, 94122",
                   phone: "415-123-4567",
                   hours: "Daily 8am-8pm",
                   description: "Come enjoy a classic San Francisco pizza!"
                   })
