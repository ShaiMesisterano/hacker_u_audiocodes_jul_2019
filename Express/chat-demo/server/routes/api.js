const express = require("express");
const fs = require("fs");
const writeToCsv = require("../modules/write-to-csv");
const router = express.Router();
router.use(express.json());

const messages = [];

const searchMessages = keywords =>
  messages.filter(data => data.message.indexOf(keywords) > -1);

router.use((request, response, next) => {
console.log("request.url", request.url);

  const { author, message } = request.body;
  const now = new Date().toLocaleString();
  let action, record;
  if (request.method === "POST") {
    action = "ADD MESSAGE";
  } else if (request.method === "GET" && request.url.indexOf('?q=') > -1) {
    action = "SEARCH MESSAGE";
  }
  else {
      next();
      return;
  }
  record = `${now}, ${action}, ${author}, ${message}\n`;
  writeToCsv(record);
  next();
});

router.get("/messages", (request, response) => {
  const keywords = request.query.q;
  if (keywords) {
    const result = searchMessages(keywords);
    response.json({
      messages: result
    });
  } else {
    response.json({
      messages
    });
  }
});

router.post("/message", (request, response) => {
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
});

module.exports = router;
