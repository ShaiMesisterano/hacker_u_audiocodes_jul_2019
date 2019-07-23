const express = require('express');
const bodyParser = require('body-parser');
const parties = require('./data/parties');
const port = 8000;
const app = express();

// app.use(bodyParser.json());

// const middleware = (request, response, next) => {
//     // console.log("headers", request.headers);
//     if (request.headers['content-type'] === 'application/json') {
//         request.body = "123";
//     }
//     response.send({message: "OK"});
//     // next();
// };

// const middleware2 = (request, response, next) => {
//     console.log("Hello from middleware2");
//     next();
// }

// app.use( middleware );
// app.use( middleware2 );

app.use(express.json());

app.post('/party', (request, response) => {
    console.log(request.body);
    const newPartyId = Math.floor(Math.random() * 10000);
    const newPartyName = request.body.name;
    parties.push({
        id: newPartyId,
        name: newPartyName
    });
    response.json({
        message: "New party was added"
    })
});

app.get('/parties', (request, response) => {
    // const { sortby } = request.query;
    // console.log("sortby: ", sortby);
    response.json(parties);
});

const getIndexById = (arr, id) => arr.findIndex( item => item.id === id);

app.put('/party', (request, response) => {
    const partyId = +request.query.id;
    const partyIndex = getIndexById(parties, partyId);
    parties[partyIndex].name = request.body.name;
    response.json({
        message: "Party was updated"
    })
});

app.delete('/party', (request, response) => {
    const partyId = +request.query.id;
    const partyIndex = getIndexById(parties, partyId);
    parties.splice(partyIndex, 1);
    response.json({
        message: "Party was removed"
    })
});

app.listen(port, () => console.log(`Server is running on port ${port}`));