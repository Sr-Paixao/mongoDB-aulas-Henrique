// // Define o nome do banco de dados
// const database = 'libri-database'

// acessa o banco de dados libri-database
// use(database);

// db['libri-collection'].find();

// //separaçao aqui o

// //seleciona dados baseados em criterio de busca

// const database = 'libri-database'

// use(database);

// db['libri-collection'].find({"categoria": "Fantasia Heroica"});

// //Seleciona 

// const database = 'libri-database'

// use(database);

// db['libri-collection'].find({"categoria": "Ficção Científica"}, {_id: 0, codigo: false, imagem: false});


// const database = 'libri-database'

// use(database);

// db['libri-collection'].find({}, {"categoria": "Ficção cientifica"}, {_id: 0, codigo: false, imagem: false});

//seleciona dados baseados em criterio de busca por uma parte de string de um campo

// const database = 'libri-database'

// use(database);

// db['libri-collection'].find({}, {"categoria": "Ficção cientifica"}, {_id: 0, codigo: false, imagem: false});


// const database = 'libri-database'

// use(database);

// db['libri-collection'].find({"autor":/asimov/i},{_id: 0, codigo: false, imagem: false});