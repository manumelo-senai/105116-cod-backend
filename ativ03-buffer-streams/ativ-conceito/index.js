//const buffer = Buffer.from ("Olá, mundo!");

//console.log(buffer);
//console.log(buffer.toString());
//console.log(buffer.length);

import {createReadStream} from "node:fs";

const leitura = createReadStream("dados.txt", {
    encoding: "UTF-8",
    highWaterMark:200
});



leitura.on("data", (chunk) => {
    console.log("novo bloco recebido:");
    console.log(chunk);
});

leitura.on("end", () => {
    console.log("Leitura concluída.")
});

leitura.on("error", (error) => {
    console.log("Erro na leitura", error.message)
});