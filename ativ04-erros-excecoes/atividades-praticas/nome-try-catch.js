const nome = "";

try{
    if(nome === ""){
        throw new Error ("O nome é obrigatório.");
    }
    console.log("Bem-vindo ${nome}.");
}catch (erro) {
    console.log(erro.message);
}