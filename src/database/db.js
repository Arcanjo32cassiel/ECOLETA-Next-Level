    // inportar a dependencia  do sqlite3
    const sqlite3 = require("sqlite3").verbose()



    // iniciar o abjeto d que irá fazer operações no banco de dados

    const db = new sqlite3.Database("./src/database/database.db");

    module.exports = db

    // utilizar o objeto de banco de dados, para fazer alterações

    //  db.serialize(() => {

    //     // com comandos SQL vai :

    //     //1 criar uma tabela
    // db.run(`
    //                 CREATE TABLE IF NOT EXISTS places (
    //                     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //                     image TEXT,
    //                     name TEXT,
    //                     address TEXT,
    //                     address2 TEXT,
    //                     state TEXT,
    //                     city TEXT,
    //                     intens TEXT

    //                 );
    //             `)

    //     //2 inserir dados na tabela
    // const query = `
    //                 INSERT INTO places (
    //                 image,
    //                 name,
    //                 address,
    //                 address2,
    //                 state,
    //                 city,
    //                 intens
    //                 ) VALUES (?,?,?,?,?,?,?);
    //        `



    //     // const values = [
    //     //         "https://images.unsplash.com/photo-1582408921715-18e7806365c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //     //         "BJ Reciclagem",
    //     //         "Arcanjo Cassiel, Serra Nova",
    //     //         "numero 260",
    //     //         "Piaui",
    //     //         "Bom Jesus",
    //     //         "Residuos Eletronicos"
    //     //     ]
    // const values = [
    //     "https://images.unsplash.com/photo-1549986584-6d9e49fd6495?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //     "BJ ciclagem",
    //     "Arcanjo, Serra",
    //     "numero 270",
    //     "Piaui",
    //     "Bom Jesus",
    //     "Residuos Eletronicos"
    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("cadstrado com sucesso")
    //     console.log(this)
    // }
    // db.run(query, afterInsertData)



    //     //  3 consultar dados da tabela

    // db.all(`SELECT * FROM places  `, function(err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão os seus registros:")
    //     console.log(rows)
    // })

    //     // 4 deletar um dado  da tabela

    //     db.run(`DELETE FROM places`, //WHERE id  = ?` [142],

    //         function(err) {
    //             if (err) {
    //                 return console.log(err)
    //             }
    //             console.log("registro deletado com sucesso")
    //         })

    // })