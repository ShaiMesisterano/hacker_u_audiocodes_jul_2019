const http = require('http');
const port = 3000;

// const log = url => console.log(url);
// const greeting = url => console.log("Hello and welcome to " + url);

// const middlewares = [log, greeting];

const callback = (request, response) => {
    const { url, method } = request;
    // log request data
    // console.log("url", url, "method", method);

    // execute middlewares
    // middlewares.forEach( func => func(request.url) );

    // log querystring
    // const printQuerysring = query => console.log("query", url.split(query + "=")[1]);
    // printQuerysring("q");

    // log POST payload
    if (method === "POST") {
        let body = "";
        request.on('data', chunk => body += chunk.toString());
        request.on('end', () => {
            console.log("BODY: ", body);
        });
    }

    response.end("OK");
};

// long operation
// for (let i=0; i<1000000; i++){
//     console.log(`i: ${i}`);
// }

http.createServer(callback).listen(port, () => console.log(`Server is listening on port ${port}`));

// console.log("Code has ended");