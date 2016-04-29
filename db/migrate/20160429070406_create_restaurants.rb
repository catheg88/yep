class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :cuisine, null: false
      t.string :address, null: false
      t.string :phone, null: false
      t.string :hours, null: false
      t.string :description, null: false

      t.timestamps null: false
    end
    add_index :restaurants, :name, unique: true
  end
end
