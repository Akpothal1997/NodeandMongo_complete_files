const express = require('express');
const router = express.Router();
const fs =  require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

/* GET About US page. */
router.get('/about', function(req, res, next) {
    res.render('about.ejs');
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
    res.render('services.ejs');
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
    let selectedProfile = {
        id:'',
        first_name:"",
        last_name:"",
        email:"",
        gender:"",
        ip_address:""};
    res.render('profile.ejs', {selectedProfile : selectedProfile});
});

/* GET profile page with request parameters */
router.get('/profile/:id', function(req, res, next) {
    let profileId = Number.parseInt(req.params.id);
    // Read data from json file
    fs.readFile(path.join(__dirname,'..','data','profiles.json'),'utf8',(err,data) => {
        if(err){
            throw err
        }
        let profiles = JSON.parse(data);
        let selectedProfile = profiles.find(function(profile) {
            return profile.id === profileId;
        });
        if(selectedProfile !== undefined){
            res.render('profile.ejs', {selectedProfile : selectedProfile});
        }
        else{
            let selectedProfile = {
                id:'NOT Found',
                first_name:"",
                last_name:"",
                email:"",
                gender:"",
                ip_address:""};
            res.render('profile.ejs', {selectedProfile : selectedProfile});
        }

    });

});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact.ejs');
});





module.exports = router;
