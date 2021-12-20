class Tabelas {
    init(conexao) { //realizando a conexao sem dizer a lib. A conexao pode vir de qqr lugar.
        this.conexao = conexao; //chama isso antes de passar qqr coisa aqui, dps apagar

        this.criarAtendimento();
    }

    criarAtendimento() {
        const sql = `CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL
        AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20),
            servico varchar(20) NOT NULL, status varchar(20) NOT NULL,
            observacoes text, PRIMARY KEY(id))
            `
            //COMANDO "IF NOT EXIST" na tabela verifica se deve criar a tabela de novo, senão retornará um erro.
            //quando se tem muitas linhas como no caso acima, não se usa áspas simples nem duplas, apenas (`) crase
        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas; //importei elainstanciada pq vou utilixar desse mesmo jeito, n vou ter mts instancias.