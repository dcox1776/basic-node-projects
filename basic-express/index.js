const express = require('express');

const app = express();
const port = process.env.PORT || '9001';

app.use(function(req, res, next) {
    console.log("Request IP: " + req.url);
    console.log("Request date: " + new Date());
    next();
})

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get("/hello/:who", function(req, res) {
    res.end("Hello, " + req.params.who + ".");
})

app.use(function(req, res) {
    res.status(404);
    res.send("File not found!");
})

console.log(port);
app.listen(port, () => console.log(`Listening on port ${port}`));
