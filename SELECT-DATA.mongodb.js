// Define o nome do banco de dados
// const database = 'libri-database'

// acessa o banco de dados libri-database
// use(database);

// db['libri-collection'].find();

//separaçao aqui o

//seleciona dados baseados em criterio de busca

// const database = 'libri-database'

// use(database);

// db['libri-collection'].find({"categoria": "Ficção cientifica"});

//Seleciona 

// const database = 'libri-database'

// use(database);

// db['libri-collection'].find({"categoria": "Ficção cientifica"}, {_id: 0, codigo: false, imagem: false});


const database = 'libri-database'

use(database);

db['libri-collection'].find({}, {"categoria": "Ficção cientifica"}, {_id: 0, codigo: false, imagem: false});

