let preco = 0;

try{
    if (preco <= 0){
        throw new Error("o preço deve ser maior do que zero.");
    }
    console.log("preço válido.");
}catch (erro){
    console.log(erro.message);
}

preco = 25;

try {
    if (preco <= 0){
        throw new Error ("O preço deve ser maior do que zero.");
    }
    console.log("preço válido");
} catch (erro){
    console.log(erro.message);
}