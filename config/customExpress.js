const express = require('express')
const consign = require('consign') //consign serve para gerenciamento de rotas
const bodyParser = require('body-parser')

module.exports = () => {
        const app = express()
        app.use(express.urlencoded({ extended: true }))
        app.use(express.json())
        consign()
            .include('controllers')
            .into(app)
        return app
    }
    // module.exports = () => {
    //     const app = express()

//     app.use(bodyParser.urlencoded({ extended: true }))
//     app.use(bodyParser.json())

//     consign()
//         .include('controllers') //todo controller que eu alterar na pasta, ele já vai alterar e deixar aqui pra gente, e ao mesmo tempo ele está conseguindo separar melhor as responsabilidades e organizar melhor o código.
//         .into(app)

//     return app
// }