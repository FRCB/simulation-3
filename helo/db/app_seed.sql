CREATE TABLE users
(
id SERIAL PRIMARY KEY,
username TEXT,
password TEXT, 
profile_picture TEXT
)

CREATE TABLE posts
(
id SERIAL PRIMARY KEY,
title TEXT,
username TEXT, 
profile_picture TEXT
)