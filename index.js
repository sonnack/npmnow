const http = require('http');

let app = http.createServer((req, res) => {
    console.log('Look I ran!')
    res.end(`Hello from Node.js on Now 2.0!`);
});

app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');