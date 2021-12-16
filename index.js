//Express é um módulo do Node que contém uma biblioteca que possibilitará essa execução com o servidor.
const express = require('express') //chamando o express, como string pq ele é uma biblioteca.

const app = express() //criando o app com o express

app.listen(3000, () => console.log('servidor rodando na porta 3000')) //escolhendo a porta para o servidor. e uma função de console.log.
    //para rodar o servidor, digite no terminal "node index.js".

app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos')) //O express possui dois elementos que são devolvidos: req, a requisição que recebemos e res, o que enviaremos, o que desejamos renderizar na tela, por exemplo. Solicitaremos que uma mensagem seja exibida na tela. E o '/atendimentos' é a rota.

//no package.json, na parte scripts eu troquei o comando 'node index.js' que inicializava o server por 'start' para usar apenas 'npm start', e para não ter que ficar derrubando e iniciando o servidor, instalei o nodemon, para fazer as coisas de modo automático. Por fim, eu troque o 'node index.js' do start por 'nodemon index.js'. agora, pra restartar o server, basta digitar 'rs'no terminal. E na vdd nem precisa pq só de salvar uma alteração no código, o nodemon já restarta.