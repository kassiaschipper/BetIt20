

# BetIt 20 Seu novo sitema de apostas! 

Este é o repositório do projeto BetIt 20, uma aplicação que simula um sistema de apostas.

## Configuração

Siga as instruções abaixo para configurar e executar a aplicação localmente.

### Pré-requisitos

- Certifique-se de ter o Git instalado em seu sistema.
- Certifique-se de ter o Node.js e o npm (gerenciador de pacotes do Node.js) instalados em seu sistema.
- Certifique-se de ter o React instalado em seu sistema.

### Instalação
1. Clone este repositório:
  ```shell
 git clone <URL do repositório>
  ```
2. Acesse a pasta do projeto:
 ```bash
 cd /betIt20
 ```
3. Crie um banco de dados postgres com o seguinte script
  ```bash
  CREATE TABLE "User" (
	"id" serial NOT NULL UNIQUE PRIMARY KEY,
	"name" char(200) NOT NULL,
	"cpf" char(11) NOT NULL UNIQUE)

  CREATE SEQUENCE my_sequence
    START WITH 1000
    INCREMENT BY 1
    MINVALUE 1000
    NO MAXVALUE
    CACHE 1;

CREATE TABLE "Bet" (
	"id" INTEGER DEFAULT nextval('my_sequence') PRIMARY KEY,
	"userId" INTEGER NOT NULL REFERENCES "User"("id")
	""numberslist" INT[] CHECK (cardinality(numberslist) = 5)  
);

ALTER SEQUENCE my_sequence RESTART WITH 1000;
```
4. Ná raiz do projeto - no mesmo nível que as pastas Back e Front - crie um arquivo .env
   conforme arquivo .env.example, lembrando de colocar as informções do seu banco de dados no .env

5. Instale as dependencia do projeto no Front
   ```bash
   cd Front/betIt20
   ```
   ```bash
   npm install
   ```
6. Instale as dependencia do projeto no Back
   ```bash
   cd Back/betIt20
   ```
   ```bash
   npm install
   ```
7. Acesse a pasta betIt20 do Back 
   ```bash
   cd /Back/betIt20
   ```
8. Rode o comando
 ```bash
   npx nodemon src/index.js
 ```
Se aparecer no console a mensagem Listening on port <port> o back end já está pronto

9. Em um novo terminal, acesse a pasta Front, na raiz do projeto e então a pasta betIt20
  ```bash
  cd /Front/betIt20
  ```
10. Rode o comando
 ```bash
  npm run dev
  ```
11. Acesse o link que aparecer no terminal, e pronto já pode testar a aplicação
