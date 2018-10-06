CREATE TABLE contributions(
    postId SERIAL PRIMARY KEY NOT NULL
    latitude
    longitude
    title TEXT
    description TEXT
    tags TEXT
    userId
    photoUrl TEXT NOT NULL
    time
);

CREATE TABLE users(
    userId SERIAL PRIMARY KEY NOT NULL
    email TEXT NOT NULL
    password TEXT NOT NULL
    name
);