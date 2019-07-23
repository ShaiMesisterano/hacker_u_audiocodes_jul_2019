const { JSDOM } = require('jsdom');

const html = '<html><head></head><body><h1>Hello there...</h1></body></html>';

const dom = new JSDOM(html);

const data = dom.window.document.querySelector('h1').textContent;

console.log(data);