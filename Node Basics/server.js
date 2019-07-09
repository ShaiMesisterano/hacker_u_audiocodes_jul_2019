const http = require('http');

http.createServer( (req, res) => {
    for (let i=0; i<=100000;i++){
        console.log(i);
    }
    
    console.log("from callback");
    res.end("Hello World");
}).listen(3000);

console.log("after");