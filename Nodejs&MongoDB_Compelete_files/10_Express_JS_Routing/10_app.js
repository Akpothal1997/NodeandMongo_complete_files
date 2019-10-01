const express = require('express');
const app = express();
const router = require('./router/appRounting');

const hostname = '127.0.0.1';
const port = 3000;

// middleware for static files
app.use('/public', express.static('public'));

// Application Routing
router.mapRoutes(app);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
