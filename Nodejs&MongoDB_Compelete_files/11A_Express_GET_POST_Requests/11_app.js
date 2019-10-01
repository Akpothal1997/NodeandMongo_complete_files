const express = require('express');
const app = express();

const router = require('./router/appRouting');

const hostname = '127.0.0.1';
const port = 3000;

// middleware for static
app.use('/public',express.static('public'));

// Application Routing Logic
router.mapRoutes(app);

app.listen(port,hostname,() => {
    console.log(`Server is Started at http://${hostname}:${port}`);
});