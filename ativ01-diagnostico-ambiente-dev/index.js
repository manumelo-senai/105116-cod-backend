const os = require("os");

const plataforma = os.platform();
const memoriaTotalBytes = os.totalmem();
const memoriaTotalGB = (memoriaTotalBytes / (1024 ** 3)).toFixed(2);
const qtdCPUs = os.cpus().length;

// Exibindo os resultados no console
console.log(`Plataforma do SO: ${plataforma}`);
console.log(`Memória Total: ${memoriaTotalGB} GB (${memoriaTotalBytes} bytes)`);
console.log(`Quantidade de CPUs: ${qtdCPUs}`);