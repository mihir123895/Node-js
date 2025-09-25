const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");

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
          /><br /><br />
    
          <button type="submit">Login</button>
        </form>
      </body>
    </html>
    `);
    res.end();


  } else if (req.method == "POST" &&req.url.toLowerCase() === "/submit-details") {

    const body = [];
    req.on('data', chunk => {
        console.log(chunk);
        body.push(chunk);
    });

    req.on('end',()=>{
        console.log('body -->', body);
        console.log('concat body -->', body.toString());
        const fullBody = Buffer.concat(body).toString();
        console.log(fullBody);
        const params = new URLSearchParams(fullBody);
        console.log("params -->" ,params); //  params --> URLSearchParams { 'username' => 'mihirr___10', 'password' => '123' }
        // const bodyObject = {};
        // for(const [key,val] of params.entries()){
        //     bodyObject[key] = val;
        // }

        const bodyObject = Object.fromEntries(params);
        console.log(bodyObject);
        fs.writeFileSync("user-details.text", JSON.stringify(bodyObject));
     });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();


  } else if (req.url === "/contact-us") {
    res.setHeader("Content-type", "text/html");
    res.write(`
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Login Form</title>
      </head>
      <body>
        
<h2>Contact Us</h2>
<form action="/contact-data" method="POST">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" required><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="4" cols="30" required></textarea><br><br>

    <button type="submit">Send Message</button>
</form>
      </body>
    </html>
    `);
    res.end();
  } else if (req.method == "POST" && req.url.toLowerCase() === "/contact-data") {

    const body = [];
    req.on('data',(chunk)=> {
        console.log(chunk);
        body.push(chunk);
    });

    req.on('end',()=>{
        const parseBody = Buffer.concat(body).toString();

        const params = new URLSearchParams(parseBody);
        const fullBody = Object.fromEntries(params);

        fs.writeFileSync('contact.txt', JSON.stringify(fullBody));
    });

    res.statusCode = 302;
    res.setHeader('Location', '/contact-us');
    res.end();

  } else if (req.url === "/event") {
    res.setHeader("Content-type", "text/html");
    res.write(`
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Login Form</title>
      </head>
      <body>
        

<h2>Event Registration</h2>
<form action="/event-data" method="POST">
    <label for="fullname">Full Name:</label><br>
    <input type="text" id="fullname" name="fullname" required><br><br>

    <label for="email">Email Address:</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <label for="event">Choose Event:</label><br>
    <select id="event" name="event">
        <option value="workshop">Workshop</option>
        <option value="seminar">Seminar</option>
        <option value="webinar">Webinar</option>
    </select><br><br>

    <button type="submit">Register</button>
</form>
      </body>
    </html>
    `);
    res.end();


  } else if (req.method == "POST" && req.url.toLowerCase() === "/event-data") {

    const body = [];
    req.on('data',(chunk)=>{
        body.push(chunk);
    });

    req.on('end',()=>{
        const fullBody = Buffer.concat(body).toString();

        const params = new URLSearchParams(fullBody);

        const parsedBody = Object.fromEntries(params);

        fs.writeFileSync('event.txt', JSON.stringify(parsedBody));
    });

    res.statusCode = 302;
    res.setHeader('Location', '/event');
    res.end();


  } else if (req.url === "/feedback") {
     res.setHeader("Content-type", "text/html");
    res.write(`
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Login Form</title>
      </head>
      <body>
        

<h2>Give Us Feedback</h2>
<form action="/feedback-data" method="POST">
    <label for="username">Your Name:</label><br>
    <input type="text" id="username" name="username"><br><br>

    <label>Rate your experience:</label><br>
    <input type="radio" id="good" name="rating" value="good">
    <label for="good">Good</label><br>
    <input type="radio" id="average" name="rating" value="average">
    <label for="average">Average</label><br>
    <input type="radio" id="bad" name="rating" value="bad">
    <label for="bad">Bad</label><br><br>

    <label for="comments">Additional Comments:</label><br>
    <textarea id="comments" name="comments" rows="3" cols="30"></textarea><br><br>

    <button type="submit">Submit Feedback</button>
</form>

      </body>
    </html>
    `);
    res.end();

  } else if (req.method == 'POST' && req.url.toLowerCase() === '/feedback-data'){

    const body = [];
    req.on('data',(chunk)=>{
        body.push(chunk);
    });

    req.on('end',()=>{
        const fullBody = Buffer.concat(body).toString();

        const params = new URLSearchParams(fullBody);

        const parsedBody = Object.fromEntries(params);

        fs.writeFileSync('feedback.txt', JSON.stringify(parsedBody));
    });

    res.statusCode = 302;
    res.setHeader('Location', '/feedback');
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
  console.log(`Server is running on port http://localhost:${PORT}`);
});
