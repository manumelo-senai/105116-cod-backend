import http from "node:http";

const server = http.createServer((req, res) => {
    res.end("olá, cliente. meu primeiro servidor node.js");
});

server.listen(300, () => {
    console.log("servidor inicializado com sucesso");
});