// const request = require('request');
const rp = require('request-promise');
const endpoint = 'http://www.dirshu.co.il/%D7%96%D7%9E%D7%A0%D7%99-%D7%94%D7%A9%D7%91%D7%AA/';

rp(endpoint).then( body => console.log(body));

// const { promisify } = require('util');

// const requestPromise = promisify(request);

// requestPromise(endpoint).then( (response) => console.log(response.body) );

// request(endpoint, (error, response, body) => {
//     if (error) return console.error(error);

//     console.log(body);
// });