json.array!(@restaurants) do |restaurant|
  json.id restaurant.id
  json.name restaurant.name
end
