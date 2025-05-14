-- Drop existing tables if they exist
DROP TABLE IF EXISTS movies CASCADE;
DROP TABLE IF EXISTS actors CASCADE;
DROP TABLE IF EXISTS movie_actors CASCADE;

-- Create the movies table
CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    release_year INT NOT NULL,
    genre VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the actors table
CREATE TABLE actors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    birth_year INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the movie_actors table (many-to-many relationship)
CREATE TABLE movie_actors (
    movie_id INT REFERENCES movies(id) ON DELETE CASCADE,
    actor_id INT REFERENCES actors(id) ON DELETE CASCADE,
    PRIMARY KEY (movie_id, actor_id)
);

-- Insert sample data into movies
INSERT INTO movies (title, release_year, genre) VALUES
('The Shawshank Redemption', 1994, 'Drama'),
('The Godfather', 1972, 'Crime'),
('The Dark Knight', 2008, 'Action'),
('Pulp Fiction', 1994, 'Crime'),
('Forrest Gump', 1994, 'Drama');

-- Insert sample data into actors
INSERT INTO actors (name, birth_year) VALUES
('Morgan Freeman', 1937),
('Marlon Brando', 1924),
('Christian Bale', 1974),
('John Travolta', 1954),
('Tom Hanks', 1956);

-- Insert sample data into movie_actors
INSERT INTO movie_actors (movie_id, actor_id) VALUES
(1, 1), -- Morgan Freeman in The Shawshank Redemption
(2, 2), -- Marlon Brando in The Godfather
(3, 3), -- Christian Bale in The Dark Knight
(4, 4), -- John Travolta in Pulp Fiction
(5, 5); -- Tom Hanks in Forrest Gump