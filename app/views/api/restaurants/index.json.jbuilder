json.array!(@restaurants) do |restaurant|
  json.id restaurant.id
  json.name restaurant.name
  json.cuisine restaurant.cuisine
  json.address restaurant.address
  json.phone restaurant.phone
  json.hours restaurant.hours
  json.description restaurant.description
end
