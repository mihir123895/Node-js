// console.log("this is a npm data base");
const handler = require("./handler")

const http = require('http');

const server = http.createServer(handler);

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})