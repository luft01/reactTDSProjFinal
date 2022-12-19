import http from'http';
import express from'express';
import bodyParser from'body-parser';
import cors from 'cors';
import mysql from "mysql2" ;
const app = express();
const port = process.eventNames.PORT || 4040;
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "kkvgby50",
    database: "db_ded",
  });

  app.get('/', function(req, res){
    res.json({ user: 'geek' });
});

app.get("/users", (req, res) => {
  let mysql = "SELECT * FROM users";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
app.get("/personagens", (req, res) => {
  let mysql = "SELECT * FROM personagens";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.put("/editperso", (req, res) => {

  const { idusers } = req.body;
  const { nome } = req.body;
  const { senha } = req.body;
  const { login } = req.body;
  console.log(idusers,nome,senha,login)
  let mysql = "UPDATE users SET nome = ?, senha = ?, login = ? WHERE idusers = ?";
  db.query(mysql, [nome, senha, login, idusers], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/cadUser", (req, res) => {
console.log('chamou user')
  const { nome } = req.body;
  const { senha } = req.body;
  const { login } = req.body;

  let mysql = "INSERT INTO users (nome, senha, login) VALUES (?, ?, ?)";
  db.query(mysql, [nome, senha, login], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.delete("/delete/:idusers", (req, res) => {
  console.log('chamou delete')
  const { idusers } = req.params;
  let mysql = "DELETE FROM users WHERE idusers = ?";
  db.query(mysql, idusers, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/cadPerso", (req, res) => {

  const { nome } = req.body;
  const { classe } = req.body;
  const { raca } = req.body;
  const { idade } = req.body;
  const { genero } = req.body;
  console.log(nome, classe, raca, idade,genero)


  let mysql = "INSERT INTO personagens (nome, classe, raca,idade,genero) VALUES (?, ?, ?, ?, ?)";
  db.query(mysql, [nome, classe, raca,idade,genero], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

const server = http.createServer(app);
server.listen(port);
console.log('Servidor rodando na porta 4040');