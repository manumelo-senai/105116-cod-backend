const idade = -10;

try{
    if(idade < 0) {
        throw new Error ("A idade não pode ser negativa.");
    }
    console.log("idade válida.");
}catch (e) {
    console.log(e.message);
}