//Delete one
use('libri-database');

db['libri-collection'].deleteOne(
    {codigo: '1'},
);

//delete many
use('libri-database');

db['libri-collection'].deleteMany(
    {categoria: "Ficção cientifica"},
);
// os que nao sao iguais
use('libri-database');

db['libri-collection'].deleteMany(
    {categoria:{$ne:"Ficção cientifica"}},
);