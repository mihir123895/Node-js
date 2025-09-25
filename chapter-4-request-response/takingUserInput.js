const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === "/") {
   res.setHeader('Content-type' , "text/html");

    res.write(`
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Login Form</title>
  </head>
  <body>
    <h2>Login Form</h2>

    <form action="/submit-details" method="POST">
      <label for="username">Username:</label><br />
      <input type="text" id="username" name="username" required /><br /><br />

      <label for="password">Password:</label><br />
      <input
        type="password"
        id="password"
        name="password"
        required
      /><br /><br />

      <button type="submit">Login</button>
    </form>
  </body>
</html>
`);
res.end();
 } 
  else if (req.method == "POST" && req.url.toLowerCase() === "/submit-details"){

    fs.writeFileSync('user-details.text', 'Mihir Patel');
    res.statusCode = 302;
    res.setHeader('Location' , '/');
    res.end();
    } 
    else if (req.url === "/product") {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Document</title></head>");
  res.write("<body><h1>Hello i am Product page </h1></body>");
  res.write("</html>");
  res.end();
  } else {
    
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Document</title></head>");
  res.write("<body><h1>Hello i am mihir </h1></body>");
  res.write("</html>");
  res.end();

  }

});

const PORT = 3000;
server.listen(PORT, () => {
 console.log(`server running on http://localhost:${PORT}`);
});
