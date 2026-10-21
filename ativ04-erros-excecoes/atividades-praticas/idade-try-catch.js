let idade = -20;

try{
    if (idade < 0){
        throw new Error("idade inválida.");
    }
    console.log("idade válida!");
}catch (erro){
    console.log(erro.message);
}