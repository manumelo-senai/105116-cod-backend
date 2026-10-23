import http from "node:http";

const server = http.createServer((req, res) =>{

    const {url, method} = req;

    if(url === "/" && method === "GET"){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end("<h1>HOMEPAGE</h1>");
    } else if (url === "/api" && method === "GET"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message: "API Node.js Pura"}));
    }
    else{
        res.writeHead(400, {"Content-Type": "text/plain; charset=utf-8"});
        res.end("rota não encontrada");
    }

    
});

server.listen(3000, () => {
    console.log("servidor rodando na porta 3000");
});