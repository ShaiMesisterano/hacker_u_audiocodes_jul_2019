const express = require('express');
const app = express();
const port = 8000;

app.get('/', (request, response) => {
    const { q } = request.query;
    response.send("Hello there!!!" + " Query is: " + q);
});

app.post('/:userId', (request, response) => {
    const { userId } = request.params;
    response.send("Hello from POST. User ID is: " + userId);
});

app.listen(port, () => console.log('connected to port ' + port));