// Update com mongo db

//update one
use('libri-database');

db['libri-collection'].updateOne(
    {titulo: 'As Cavernas de Aço'},
    {$set: {valor: 250}}
);

// update many

use('libri-database');

db['libri-collection'].updateMany(
    {autor: 'Isaac Asimov'},
    {$set: {valor: 250}}
);