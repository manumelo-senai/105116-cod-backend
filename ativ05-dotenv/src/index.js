import dotenv from "dotenv";

dotenv.config();

console.log(process.env.IDADE_MINIMA);
console.log(process.env.IDADE_MAXIMA);

const {IDADE_MINIMA, IDADE_MAXIMA} = process.env;
console.log({IDADE_MINIMA, IDADE_MAXIMA});