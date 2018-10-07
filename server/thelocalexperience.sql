CREATE TABLE contributions(
    postId SERIAL PRIMARY KEY NOT NULL,
    latitude TEXT,
    longitude TEXT,
    title TEXT,
    description TEXT,
    tags TEXT,
    userId TEXT,
    photoUrl TEXT NOT NULL,
    time TEXT
);

CREATE TABLE users(
    userId SERIAL PRIMARY KEY NOT NULL
    email TEXT NOT NULL
    password TEXT NOT NULL
    name
);