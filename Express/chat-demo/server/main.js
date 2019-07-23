const express = require('express');
const apiRouter = require('./routes/api');
const app = express();
// const app = require('express')();
const port = 5000;

app.use(express.static('../client'));
app.use('/api', apiRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));