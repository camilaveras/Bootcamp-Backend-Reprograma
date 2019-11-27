const express = require ('express');

const server = express();

server.get('/', (req, res, next) => {
res.send('fdfdf');


});

server.get('/about', function(req, res){
res.send('camila');


});


server.get('/users/:username', (req, res, next) => {
    res.send(req.params);
})

server.get('/users/:username/books/:bookId', (req, res, next) => {
    res.send(req.params);
})

server.listen(3000);

