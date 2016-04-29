class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.text :rev_content, null: false
      t.boolean :yepp, null: false
      t.integer :author_id, null: false
      t.integer :restaurant_id, null: false

      t.timestamps null: false
    end
    add_index :reviews, :author_id
    add_index :reviews, :restaurant_id
  end
end
