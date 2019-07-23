const express = require('express');
const router = express.Router();
router.use(express.json());

const messages = [];

router.get('/messages', (request, response) => {
    response.json({
        messages
    });
});

router.post('/message', (request, response) => {
    const id = Math.floor(Math.random() * 10000);
    const { author, message } = request.body;
    // const author = request.body.author;
    // const message = request.body.message;
    messages.push({
        id,
        author,
        message
    });
    response.json({
        message: "Message was added"
    });
})

module.exports = router;