const conexao = require('../infraestrutura/conexao')

class Atendimento { //responsável pela conxão
    adiciona(atendimento) {
        const sql = `INSERT INTO Atendimentos SET ?`

        conexao.query(sql, atendimento, (erro, resultados) => {
                if (erro) {
                    console.log(erro)
                } else {
                    console.log(resultados)
                }
            }) // Essa "?" significa que ele vai pegar o que a gente colocar aqui e inserir nessa teabela.
    }
}

module.exports = new Atendimento

//Para salvar os dados na nossa base de dados, usamos a query que a biblioteca do mysql nos disponibiliza.

//Agora que já cadastramos o atendimento, queremos cadastrar um novo serviço dentro da tabela Servicos no nosso sistema.

//Considerando que este serviço deve possuir id (que será incrementado automaticamente), nome e preço, como seria esse código de inserção?

//conexao.query(`INSERT INTO Servicos(nome, preco) VALUES('${nome}', 
//'${preco}')`, (erro, resultados) => {
// ...
// }) 
// }
// }