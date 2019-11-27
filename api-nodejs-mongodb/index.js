const express = require('express');

const server = express();
const users =  ['camila', 'Camila', 'camila'];
const books = ['livro1', 'livro2', 'livro3'];
const pais = ['pais1', 'pais2', 'pais3'];
const country = ['cidade1', 'cidade2', 'cidade3'];


/*
server.get('/users', (req, res,  next) => {
res.json('hello word');
});


server.get('/users/', (req, res, next) => {
    return res.json(users);
});


*/
/*server.get('/users/:index', (req, res, next) => {
    const id = req.params.index;
    return res.json(users[id]);
}); */

/*acessando lista de livro
server.get('/books/', (req, res, next) => {
    const id = req.params.index
    return res.json(books);

});  */

/* acessando o id do livro
server.get('/books/:index', (req, res, next) => {
  const id = req.params.index
    return res.json(books[id]);

}); */

// crie uma rota que utilize 2 parmas e que retorne o usuario e o livro
server.get('/users/:indexUser/books/:indexBook', (req, res, next) => {
    const { indexUser, indexBook } = req.params;
    const resultUser = users[indexUser];
    const resultBook = books[indexBook];
    const finalResult = resultBook + resultUser;
    return res.json(finalResult);


});

//crie 
server.get('/pais/:index', (req, res, next) => {
    const id = req.params.index;
    return res.json(pais[id]);
});

//crie uma rota get que utilize query strings que ao acessar '/country' trafa 1 pais

server.get('/country/:indexCountry/pais/:indexPais', (req, res, next) => {
    const { indexCountry, indexPais } = req.params;
    const resultCountry = country[indexCountry];
    const resultPais = pais[indexPais];
    const finalResult = resultCountry + resultPais;
    return res.json(finalResult);


});

function checkUsersInArray(req, res, next) {
    const user = users[req.params.indexUser];
    if(!user) {
        return res.status(400).json({error: `index doesn t exists`});
    }
req.user = user;
return next();

}


server.get('/users/:index', checkUsersInArray, (req, res, next)  => {
    const id = req.params.index;
    return res.json(users[id]);
});

server.listen(3000);