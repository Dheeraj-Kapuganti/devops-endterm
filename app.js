const http = require('http');

http.createServer((req,res) => {
    res.end("Hello from backend");
})

http.listen(3000 , () => {
    console.log("App working on port 3000");
})
