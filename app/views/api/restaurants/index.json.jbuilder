json.array!(@restaurants) do |restaurant|
  json.id restaurant.id
  json.name restaurant.name
  json.cuisine restaurant.cuisine
  json.hours restaurant.hours
  json.description restaurant.description
end
