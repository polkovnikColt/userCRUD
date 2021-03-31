SELECT ('CREATE DATABASE user_crud') WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'user_crud')/gexec;

CREATE TABLE user(
        id serial PRIMARY KEY,
    	email VARCHAR ( 50 ) UNIQUE NOT NULL,
    	password VARCHAR ( 50 ) NOT NULL,
    	profile INTEGER FOREIGN KEY(profile.id)
);

CREATE TABLE profile(
    id serial PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    age INTEGER NOT NULL,
    city VARCHAR(60) NOT NULL,
    birthday VARCHAR(30) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    role VARCHAR(20) NOT NULL,
    user INTEGER FOREIGN KEY(user.id)
);
INSERT INTO user(email,password,role)
VALUES ('admin@admin.com','$2b$05$cgWqLcbFKqUc05F8uQvTleMfBAkP7gDry3A5ASwwuF/rJwEoPvMUq','admin')