const path = require('path');

let mapRoutes = (app) => {

    // for home page
    app.get('/',(request,response) => {
        response.sendFile(path.join(__dirname,'..' ,'views','index.html'));
    });

    // for About Us page
    app.get('/about',(request,response) => {
        response.sendFile(path.join(__dirname,'..' ,'views','about.html'));
    });

    // for profile page
    app.get('/profile',(request,response) => {
        response.sendFile(path.join(__dirname,'..' ,'views','profile.html'));
    });

    // for Services page
    app.get('/services',(request,response) => {
        response.sendFile(path.join(__dirname,'..' ,'views','services.html'));
    });

    // for Contact page
    app.get('/contact',(request,response) => {
        response.sendFile(path.join(__dirname,'..' ,'views','contact.html'));
    });

    // for 404 page
    app.use((request,response) => {
        response.sendFile(path.join(__dirname,'..' ,'views','404.html'));
    });
};

module.exports = {
    mapRoutes
};