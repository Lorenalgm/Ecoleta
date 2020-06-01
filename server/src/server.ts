import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem');

    response.json([ 'lORENaaaaaaaaaA', 'teste']);
});

app.listen(3333);