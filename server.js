const express = require("express");
const app = express();
const port = process.env.PORT || 80;

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.sendFile(__dirname+'/public/index.html')
});

app.get("/Dashboard", function(req, res){
    res.send("Dashboard");
});

app.get("/Denuncias", function(req, res){
    res.send("Lista de denuncias");
});

app.get("/configuracao", function(req, res){
    res.send("Configurações do sistema");
});

app.listen(port, function(){
    console.log("Servidor rodando na porta 80");
})