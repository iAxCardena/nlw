//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operacoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db //exporta o objeto db

// Utilizar o objeto de banco de dados, para as operacoes
db.serialize(() => {
//     //Com comnados SQL:
//     //Criar uma tabela
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)

//     //Inserir dados na tabela
    // const query = `
    //     INSERT INTO places(
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    
    // const values = [
    //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim America",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err) //Mostra qual erro que aconteceu
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)   //referencia a resposta do run()
    // }

    // db.run(query, values, afterInsertData)

//     //Consultar os dados da tabela
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err) {
    //         return console.log(err) //Mostra qual erro que aconteceu
    //     }

    //     console.log("Aqui estao seus registros: ")
    //     console.log(rows)
    // })

//     //Deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [2], function(err) {
    //     if(err) {
    //         return console.log(err) //Mostra qual erro que aconteceu
    //     }

    //     console.log("Registro deletado com sucesso")
    // })
})

