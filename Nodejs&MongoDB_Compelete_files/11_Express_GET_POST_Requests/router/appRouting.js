const path = require('path');
const fs = require('fs');

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

    // for profile page with Query Parameters
    app.get('/profile/:id',(request,response) => {
        let profileId = Number.parseInt(request.params.id);
        // Read data from json file
        fs.readFile(path.join(__dirname,'..','data','profiles.json'),'utf8',(err,data) => {
            if(err){
                throw err
            }
            let profiles = JSON.parse(data);
            let selectedProfile = profiles.find(function(profile) {
                return profile.id === profileId;
            });
            console.log(selectedProfile);
        });
        response.sendFile(path.join(__dirname,'..' ,'views','profile.html'));
    });

    // for Services page
    app.get('/services',(request,response) => {
        response.sendFile(path.join(__dirname,'..' ,'views','services.html'));
    });

    // for Contact page with Query Parameters
    app.get('/contact',(request,response) => {
        let query = request.query;
        console.log(query);
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