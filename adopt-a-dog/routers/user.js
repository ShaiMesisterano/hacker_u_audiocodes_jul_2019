const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send(request.session.username);
})

module.exports = router;