#ALTER TABLE Actor DROP COLUMN salary;
#comando iria retirar a coluna salario da tabela ator
#ALTER TABLE Actor MODIFY gender VARCHAR(6);
#Atera na tabela Actor a coluna gender para aceitar somente até 6 caracteres no formato string

ALTER TABLE Actor MODIFY gender VARCHAR(100);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

#ALTER TABLE Actor DROP COLUMN salary;
#comando iria retirar a coluna salario da tabela ator
#ALTER TABLE Actor MODIFY gender VARCHAR(6);
#Atera na tabela Actor a coluna gender para aceitar somente até 6 caracteres no formato string

ALTER TABLE Actor MODIFY gender VARCHAR(100);

SELECT * FROM Actor;
#a) *Escreva uma query que atualize o nome e a data de nascimento 
# do ator com o id `003`*

UPDATE Actor
set 
name = "Mpises do egito",
birth_date = "2020-02-10"
where id = "003";

UPDATE Actor
SET
NAME = "Moises do Egito"
WHERE id = "003";

#b) *Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.*


UPDATE Actor
SET name = "JULIANA PÃES"
WHERE id = "009";

update Actor
set name = "JULIANA PAES"
where id = "009";

#c) *Escreva uma query que atualize todas as informações do ator com o id `005`*
update Actor
set 
name = "Chiquinha",
salary = 80000,
birth_date = "1983-11-03",
gender = "famale"
WHERE id = "006";


#d) *Escreva uma query em que você tente atualizar um dado da tabela que não existe 
#(com um id inválido, por exemplo). Teste, anote e explique o resultado.*
update Actor
set 
name = "Marcelo Prestes",
salary = 20000
WHERE id = "005";
# Deu a seguinte mensagem 0 linha(s) afetada(s) Linha(s) correspondida(s): 0 Alterado: 0 Avisos: 0, apesar de não dar um erro,
# não alterou/afetou, nenhuma informação, uma vez que o ID005, não existe
#a) *Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`*
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
#b) *Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*
DELETE FROM Actor WHERE gender = "male" and salary > 1000000;

SELECT sum(salary) from Actor;
SELECT COUNT(*) FROM Actor;
SELECT COUNT(*) FROM Actor WHERE gender = "female";

#A) *Releia a última query. Teste-a. Explique o resultado com as suas palavras*
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

#TROUXE O TOTAL DE CADA GENEREO REGISTRADO NA TABELA


#b) *Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*
SELECT id, name FROM Actor
ORDER BY name DESC;
#c) *Faça uma query que retorne todos os atores ordenados pelo salário*
SELECT * FROM Actor
ORDER BY salary;
#d) *Faça uma query que retorne os atores com os três maiores salarios*
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
#e) *Faça uma query que retorne a média de salário por gênero*
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;