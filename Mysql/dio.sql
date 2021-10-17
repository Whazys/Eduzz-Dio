CREATE TABLE pessoas (
  id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(30) NOT NULL,
  nascimento DATE
)

INSERT INTO pessoas (nome, nascimento) VALUES ('Rafael', '1993 03 23')
INSERT INTO pessoas (nome, nascimento) VALUES ('Junior', '1998 05 23')
INSERT INTO pessoas (nome, nascimento) VALUES ('Fernando', '1994 03 17')
INSERT INTO pessoas (nome, nascimento) VALUES ('Carlos', '2001 08 27')

UPDATE pessoas SET NOME='Rafael Santos' WHERE id = '1'

DELETE FROM pessoas WHERE id = '4'

SELECT FROM pessoas ORDER BY nome;
SELECT FROM pessoas ORDER BY nome DESC;