// maior que 
use('libri-database');

db['libri-collection'].find({valor:{$gt:100}});

//menor que 
use('libri-database');

db['libri-collection'].find({valor:{$gt:100}});

// menor ou igual a
use('libri-database');

db['libri-collection'].find({valor:{$lte:100}});

//maior ou igual a
use('libri-database');

db['libri-collection'].find({valor:{$gte:100}});

//igual a
use('libri-database');

db['libri-collection'].find({valor:{$eq:100}});

//diferente de 
use('libri-database');

db['libri-collection'].find({valor:{$ne:100}});


//intervalo de valores
use('libri-database');

db['libri-collection'].find({valor:{$gte:100 , $lte:115}});

//ordena livros ascendente
use('libri-database');

db['libri-collection'].find({valor:{$gte:100 , $lte:150}}).sort({valor:1});

//ordena livros descdendente
use('libri-database');

db['libri-collection'].find({valor:{$gte:100 , $lte:150}}).sort({valor:-1});

//ordena livros ascendente
use('libri-database');

db['libri-collection'].find({valor:{$gte:100 , $lte:150}}, {_id: 0, codigo: false}).sort({valor:1});