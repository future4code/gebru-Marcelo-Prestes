-- Queries executadas pelo workbench

CREATE TABLE movie (
	id INT PRIMARY KEY AUTO_INCREMENT,
   title VARCHAR(255) NOT NULL,
   year YEAR NOT NULL
);

INSERT INTO movie (title, year)
VALUES
	("Deadpool", 2016),
   ("X-men: O Filme", 2000);
    
SELECT * FROM movie;

CREATE TABLE `character` (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    gender ENUM ("MALE", "FEMALE", "OTHER"),
    description VARCHAR(255) DEFAULT "No description provided"
);


INSERT INTO `character` (name, gender) 
VALUES
	("Storm", "FEMALE"),
   ("Colossus","MALE");

INSERT INTO `character` (name, gender, description) 
VALUES
	("Deadpool", "OTHER", "Sexy motherf***");
    
SELECT * FROM `character`;


CREATE TABLE movie_characters (
	movie_id INT,
   character_id INT,
   FOREIGN KEY(movie_id) REFERENCES movie (id),
   FOREIGN KEY(character_id) REFERENCES `character` (id)
);

INSERT INTO movie_characters 
VALUES
	(1,2),
   (1,4),
   (2,1),
   (2,2);
    
SELECT name, title FROM movie_characters
JOIN movie ON movie_id = movie.id
JOIN `character` ON character_id = `character`.id
WHERE movie_id = 2;