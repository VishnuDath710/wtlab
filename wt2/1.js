const http = require("http");
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter port number: ", (port) => {
    const server = http.createServer((req, res) => {
        
        res.end(`Server running at http://localhost:${port}`);
    });

    server.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
});
