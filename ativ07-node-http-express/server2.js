import http from "node:http";

const server = http.createServer((req, res) => {
    const {url, method} = req;

    if(url === "/" && method === "GET"){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end("<h1>HOMEPAGE</h1>");
    }

    else if (url === "/produtos" && methor === "GET"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message: "produtos no servidor nativo"}));
    }

    else {
        res.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
        res.end("rota não encontrada");
};

});

server.listen(3001, () => {
    console.log("servidor em execução");
});