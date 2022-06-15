CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;
DESCRIBE Actor;
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
# não havia o valor de gender pre definido para essa query
INSERT INTO Actor
VALUES ("002", "Glória Pires", 120000, "1963-08-23", "pj");
INSERT INTO Actor
VALUES ("004", "Milton Goncalves", 30000, "1933-12-09","mestre");
#Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
#Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'

INSERT INTO Actor (id, name, salary,birth_date, gender )
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
#Error Code: 1136. Column count doesn't match value count at row 1
#Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1
# Significa que os valores passados na query não são compatives com as variavaeis/tipos definidos na criacao, faltou os seguintes parametros birth_date, gender
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006",
  "Francisco Cuoco",
  400000,
  "1949-04-18", 
  "male"
);
#Código de erro: 1364. O campo 'nome' não tem um valor padrão
# correção 1 : adicionar o parametro name e atribuir um nome em Values 
# correção 2 : Apos ação acima mostrou que já havia o mesmo nº de id, passado no momento da criação de Milton Goncalves, feita alteração

SELECT * FROM Actor;
# Atraves do comando acima, peguei as informações da tabela, com o objetivo de pegar os ID, e definir a sequência para os próximas adições de valores na tabela

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "008", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "009", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

#UPDATE Actor SET gender = "mestre"
#WHERE gender = "male";
#a) Escreva uma query que retorne todas as informações das atrizes
SELECT * from Actor WHERE gender = "female";
#b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
SELECT salary from Actor WHERE name = "Tony Ramos";
# c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
SELECT * FROM Actor WHERE gender = "invalid";
#d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
SELECT id, nome, salary FROM Actor WHERE salary < 500000;

#e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. 
# Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) 
#e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que 
#funcione, teste o comando e anote-o também como resposta

SELECT id, nome from Actor WHERE id = "002";
# Response = Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'
# nome não e uma valor pre-definido na tabale, e sim "name"
#Correção: abaixo
SELECT id, name from Actor WHERE id = "002"
#Return válido, trouxe Glória Pires