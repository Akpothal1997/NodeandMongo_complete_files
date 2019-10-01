const path = require('path');

let mapRoutes = (app) => {

    // home page
    app.get('/',(request,response) => {
        response.sendFile(path.join(__dirname , '..', 'views' , 'index.html'));
    });

    // news page
    app.get('/news',(request,response) => {
        response.sendFile(path.join(__dirname , '..','views' , 'news.html'));
    });

    // gallery page
    app.get('/gallery',(request,response) => {
        response.sendFile(path.join(__dirname , '..','views' , 'gallery.html'));
    });

    // about us page
    app.get('/about',(request,response) => {
        response.sendFile(path.join(__dirname ,'..', 'views' , 'about.html'));
    });

    // contact page
    app.get('/contact',(request,response) => {
        response.sendFile(path.join(__dirname ,'..', 'views' , 'contact.html'));
    });

    // 404 page
    app.use((request,response) => {
        response.sendFile(path.join(__dirname ,'..', 'views' , '404.html'));
    });
};

module.exports = {
    mapRoutes
};