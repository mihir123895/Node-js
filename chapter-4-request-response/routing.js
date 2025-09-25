const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method)

    if(req.url === '/'){
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Document</title></head>');
    res.write('<body><h1>I am the home Page</h1></body>');
    res.write('</html>');
    return res.end();

    } else if(req.url === '/product'){
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Document</title></head>');
    res.write('<body><h1>i Am a Product Page</h1></body>');
    res.write('</html>');
    return res.end();
    }

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