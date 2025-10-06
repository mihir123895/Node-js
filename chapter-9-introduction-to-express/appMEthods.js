const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(
    `Mounts middleware functions. Middleware functions are functions that have access to the request (req), response (res), and the next middleware function (next) in the app’s request-response cycle.`
  );
  next();
});

app.get("/", (req, res, next) => {
  res.send(`<h1>Handles GET requests to a specific route.</h1>`);
});

app.get('/about', (req, res) => {
    res.send('About page'); 
});

app.post('/login', (req, res) => {
    res.send(`Handles POST requests. Used when you want to accept data (e.g., from forms or APIs).`);
});

app.put('/user/:id', (req, res) => {
    res.send(`Used to update existing resources.`);
});

app.delete('/user/:id', (req, res) => {
    res.send(`Used to delete a resource.`);
});

app.all('/secret', (req, res) => {
    res.send('Accessed secret route via any method!, Matches all HTTP methods (GET, POST, PUT, DELETE, etc.) for a specific route.');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
