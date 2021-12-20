const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Olá, Você está na rota de atendimentos'))

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento)
            // console.log('Atendimento enviado')
            // console.log(req.body) //aqui está todos os dados que estamos enviando
        res.send('POST atendimento')
    })
}