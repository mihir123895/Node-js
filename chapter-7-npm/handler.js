// handler.js

const handler = (req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/plain');
    res.end('Request received!');
};

// Export it properly
module.exports = handler;
