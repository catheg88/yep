# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160503033428) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "restaurants", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "cuisine",     null: false
    t.string   "address",     null: false
    t.string   "phone",       null: false
    t.string   "hours",       null: false
    t.string   "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "restaurants", ["name"], name: "index_restaurants_on_name", unique: true, using: :btree

  create_table "reviews", force: :cascade do |t|
    t.text     "rev_content",   null: false
    t.boolean  "yepp",          null: false
    t.integer  "user_id",       null: false
    t.integer  "restaurant_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "username"
  end

  add_index "reviews", ["restaurant_id"], name: "index_reviews_on_restaurant_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
