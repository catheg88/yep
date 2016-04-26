# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## reviews
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
rev-content   | text      | not null
author_id     | integer   | not null, foreign key (references users), indexed
restaurant_id | integer   | not null, foreign key (references restaurants), indexed

## restaurants
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
name          | text      | not null
cuisine       | text      | not null
address       | text      | not null
phone         | text      | not null
hours         | text      | not null
description   | text      | not null
