import express from "express";

const app = express();

app.get("/", (req, res)=> {
    res.type("html").send("<h1>HOMEPAGE</h1>");
});

app.listen(3000, () => {
    console.log("rodando");
});