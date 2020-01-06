const http = require('http');
const express = require('express');
const fs = require('fs');
const PORT = 3000;
const app = express();
const server = http.createServer(app);

const template = fs.readFileSync('./public/madlib.html','utf-8');
app.get(`/`, (req, res) => {
    let content = template;
    res.send(content);
})

app.get(`/:name`, (req, res) => {
    let content = template.replace("***NAME***", req.params.name);
    res.send(content);
})

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
})