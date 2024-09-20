CREATE TYPE user_type AS ENUM ('ADMIN', 'USER');

CREATE TABLE users (
    id SERIAL,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    dt_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tipo user_type,
    profile_image VARCHAR(255),
    CONSTRAINT usersPK PRIMARY KEY(id)
);
