## Respostas teóricas

**Modularização**

- ** que significa modularizar um projeto de software?** dividir o código em partes menores e independentes (módulos), cada uma responsável por uma função específica que podem ser reutilizadas e combinadas entre elas.
- **Duas vantagens da modularização:** 1- facilita reutilização de códigos entre diferentes partes do projeto; 2- ajuda no desenvolvimento em equipe, ou na capacidade da memória humana, que vai trabalhar em muitas partes, já que diminui os incidentes por não duplicar funções e deixando o sistema sem uma função concreta.
- **Por que dividir um projeto em vários arquivos facilita a manutenção?** Porque isola responsabilidades — ao corrigir um bug ou alterar uma funcionalidade, é possível localizar fácil o arquivo responsável, sem precisar entender o sistema inteiro (em sistemas grandes, nem o dono do projeto consegue), reduzindo o risco de efeitos inconsistência em outras partes do código. (o código do travessão no windows é alt + 0151).

**CommonJS e ES Modules (ESM)**

- **O que são CommonJS e ES Modules?** são dois sistemas de módulos do JavaScript/Node.js. CommonJS é o sistema tradicional do Node.js, que usa `require()` e `module.exports`, com carregamento síncrono. ES Modules é o padrão oficial do JavaScript (ECMAScript), que usa `import` e `export`, com carregamento assíncrono e suporte nativo em navegadores (detalhe curioso é que tanto o js, quanto o ts, no fim são executados como ECMAScript, o ECMA é as regras de como o js vai funcionar).
- **Diferença entre `require()` e `import`:** `require()` é uma função do CommonJS, carrega os módulos de forma síncrona e pode ser chamada em qualquer ponto do código (inclusive condicionalmente). `import` é uma declaração do ESM, processada de forma assíncrona e estática (precisa ficar no topo do arquivo, antes de outras instruções ou o programa roda sem ter conhecimento do que deveria desde o início), o que permite otimizações como tree-shaking.
- **Para que servem `module.exports` e `export`?** Ambos servem para tornar funções, variáveis ou objetos de um arquivo disponíveis para serem importados e usados em outros arquivos. `module.exports` é usado no CommonJS; `export` é usado no ESM.
- **Configuração no `package.json` para usar ES Modules em arquivos `.js`:** adicionar `"type": "module"` (amazing!).
