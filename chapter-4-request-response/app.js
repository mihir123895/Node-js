const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method)
    
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Document</title></head>');
    res.write('<body><h1>Hello i am mihir </h1></body>');
    res.write('</html>');
    res.end();
});

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`server is running on  http://localhost:${PORT}`);
});