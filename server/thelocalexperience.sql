CREATE TABLE contributions(
    postId SERIAL PRIMARY KEY NOT NULL
    coordinates
    description TEXT
    tags TEXT
    userId
    photoUrl TEXT NOT NULL
    date
    time
);

CREATE TABLE users(
    userId SERIAL PRIMARY KEY NOT NULL
    email TEXT NOT NULL
    password TEXT NOT NULL
    name
);