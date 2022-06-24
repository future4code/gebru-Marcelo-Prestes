CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
#INSERT INTO Rating (id, comment, rate, movie_id)

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);
#d)

ALTER TABLE Movie DROP COLUMN rating;
#Exercício 2
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

#b) Exemplo de uma criação

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
);
#Exercício 3

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

#b)
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;