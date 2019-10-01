//
const fs = require('fs');
const path = require('path');

let persons = [{"id":1,"first_name":"Susy","last_name":"Ansell","email":"sansell0@blinklist.com","gender":"Female","ip_address":"72.62.212.133"},
    {"id":2,"first_name":"Agnola","last_name":"Sealeaf","email":"asealeaf1@un.org","gender":"Female","ip_address":"171.10.190.66"},
    {"id":3,"first_name":"Duky","last_name":"Ingley","email":"dingley2@omniture.com","gender":"Male","ip_address":"144.14.101.196"},
    {"id":4,"first_name":"Henderson","last_name":"Ivanchin","email":"hivanchin3@opera.com","gender":"Male","ip_address":"130.136.77.62"},
    {"id":5,"first_name":"Buddy","last_name":"Burfitt","email":"bburfitt4@timesonline.co.uk","gender":"Male","ip_address":"240.119.144.131"},
    {"id":6,"first_name":"Hobie","last_name":"Sutterby","email":"hsutterby5@tiny.cc","gender":"Male","ip_address":"186.112.9.166"},
    {"id":7,"first_name":"Benjy","last_name":"Lessmare","email":"blessmare6@answers.com","gender":"Male","ip_address":"51.237.31.26"},
    {"id":8,"first_name":"Hunfredo","last_name":"Stanyforth","email":"hstanyforth7@slashdot.org","gender":"Male","ip_address":"136.23.32.74"},
    {"id":9,"first_name":"Daffy","last_name":"Linturn","email":"dlinturn8@4shared.com","gender":"Female","ip_address":"197.57.26.84"},
    {"id":10,"first_name":"Ginni","last_name":"Bazoche","email":"gbazoche9@redcross.org","gender":"Female","ip_address":"93.229.50.89"},
    {"id":11,"first_name":"Quincy","last_name":"Jesse","email":"qjessea@ehow.com","gender":"Male","ip_address":"220.222.246.74"},
    {"id":12,"first_name":"Smitty","last_name":"Diehn","email":"sdiehnb@yellowbook.com","gender":"Male","ip_address":"23.72.140.119"},
    {"id":13,"first_name":"Pamela","last_name":"Larkings","email":"plarkingsc@fema.gov","gender":"Female","ip_address":"8.157.53.242"},
    {"id":14,"first_name":"Kylie","last_name":"Graeser","email":"kgraeserd@illinois.edu","gender":"Male","ip_address":"83.92.240.76"},
    {"id":15,"first_name":"Waldo","last_name":"Blase","email":"wblasee@edublogs.org","gender":"Male","ip_address":"140.19.210.208"},
    {"id":16,"first_name":"Michal","last_name":"Giraudou","email":"mgiraudouf@devhub.com","gender":"Male","ip_address":"227.47.238.24"},
    {"id":17,"first_name":"Gena","last_name":"Zanneli","email":"gzannelig@xrea.com","gender":"Female","ip_address":"113.193.17.54"},
    {"id":18,"first_name":"Audre","last_name":"Lamprecht","email":"alamprechth@goodreads.com","gender":"Female","ip_address":"58.55.59.107"},
    {"id":19,"first_name":"Genevra","last_name":"Tschirasche","email":"gtschiraschei@slashdot.org","gender":"Female","ip_address":"130.213.35.151"},
    {"id":20,"first_name":"Cornelius","last_name":"Mattingson","email":"cmattingsonj@cbsnews.com","gender":"Male","ip_address":"139.223.230.172"},
    {"id":21,"first_name":"Aland","last_name":"Seally","email":"aseallyk@storify.com","gender":"Male","ip_address":"87.148.158.68"},
    {"id":22,"first_name":"Kimberlyn","last_name":"Blunsom","email":"kblunsoml@scribd.com","gender":"Female","ip_address":"15.99.231.241"},
    {"id":23,"first_name":"Sascha","last_name":"Feuell","email":"sfeuellm@uol.com.br","gender":"Male","ip_address":"99.200.129.188"},
    {"id":24,"first_name":"Lory","last_name":"Silverwood","email":"lsilverwoodn@purevolume.com","gender":"Female","ip_address":"241.134.140.247"},
    {"id":25,"first_name":"Jase","last_name":"Jouandet","email":"jjouandeto@yellowbook.com","gender":"Male","ip_address":"15.240.49.38"},
    {"id":26,"first_name":"Atlante","last_name":"Culley","email":"aculleyp@amazon.de","gender":"Female","ip_address":"100.182.206.124"},
    {"id":27,"first_name":"Artair","last_name":"Donaghy","email":"adonaghyq@tinyurl.com","gender":"Male","ip_address":"202.168.105.238"},
    {"id":28,"first_name":"Tammie","last_name":"Chanson","email":"tchansonr@123-reg.co.uk","gender":"Male","ip_address":"93.230.93.153"},
    {"id":29,"first_name":"Marcellus","last_name":"Streets","email":"mstreetss@youtube.com","gender":"Male","ip_address":"90.135.49.51"},
    {"id":30,"first_name":"Babette","last_name":"Hairesnape","email":"bhairesnapet@chicagotribune.com","gender":"Female","ip_address":"204.172.33.255"},
    {"id":31,"first_name":"Anatole","last_name":"Bratton","email":"abrattonu@google.com","gender":"Male","ip_address":"93.228.91.38"},
    {"id":32,"first_name":"Enrika","last_name":"Forestall","email":"eforestallv@wisc.edu","gender":"Female","ip_address":"31.107.47.38"},
    {"id":33,"first_name":"Arlinda","last_name":"Shropsheir","email":"ashropsheirw@so-net.ne.jp","gender":"Female","ip_address":"194.1.67.122"},
    {"id":34,"first_name":"Cherice","last_name":"Rickerby","email":"crickerbyx@salon.com","gender":"Female","ip_address":"131.37.141.28"},
    {"id":35,"first_name":"Sterling","last_name":"Symms","email":"ssymmsy@senate.gov","gender":"Male","ip_address":"177.90.129.190"},
    {"id":36,"first_name":"Creighton","last_name":"d' Eye","email":"cdeyez@reddit.com","gender":"Male","ip_address":"110.255.148.252"},
    {"id":37,"first_name":"Adele","last_name":"Penwell","email":"apenwell10@xing.com","gender":"Female","ip_address":"149.193.220.121"},
    {"id":38,"first_name":"Dominic","last_name":"Sheryne","email":"dsheryne11@homestead.com","gender":"Male","ip_address":"18.16.179.246"},
    {"id":39,"first_name":"Imogene","last_name":"Cosgriff","email":"icosgriff12@ustream.tv","gender":"Female","ip_address":"95.59.86.171"},
    {"id":40,"first_name":"Cass","last_name":"Gaitley","email":"cgaitley13@oakley.com","gender":"Female","ip_address":"130.149.42.96"},
    {"id":41,"first_name":"Jose","last_name":"Wadelin","email":"jwadelin14@elegantthemes.com","gender":"Male","ip_address":"34.175.100.46"},
    {"id":42,"first_name":"Ami","last_name":"Winsborrow","email":"awinsborrow15@chronoengine.com","gender":"Female","ip_address":"217.173.194.146"},
    {"id":43,"first_name":"Helsa","last_name":"Kryszkiecicz","email":"hkryszkiecicz16@last.fm","gender":"Female","ip_address":"251.192.240.55"},
    {"id":44,"first_name":"Eolande","last_name":"Paulet","email":"epaulet17@homestead.com","gender":"Female","ip_address":"166.34.92.17"},
    {"id":45,"first_name":"Ludvig","last_name":"Raisbeck","email":"lraisbeck18@cbsnews.com","gender":"Male","ip_address":"109.120.67.193"},
    {"id":46,"first_name":"Viviana","last_name":"McMichan","email":"vmcmichan19@reverbnation.com","gender":"Female","ip_address":"173.162.185.50"},
    {"id":47,"first_name":"Killy","last_name":"Rennie","email":"krennie1a@admin.ch","gender":"Male","ip_address":"229.154.107.91"},
    {"id":48,"first_name":"Oberon","last_name":"Zanetti","email":"ozanetti1b@sourceforge.net","gender":"Male","ip_address":"185.226.238.161"},
    {"id":49,"first_name":"Hayes","last_name":"Lobbe","email":"hlobbe1c@wiley.com","gender":"Male","ip_address":"131.76.206.111"},
    {"id":50,"first_name":"Augie","last_name":"Bryden","email":"abryden1d@wired.com","gender":"Male","ip_address":"32.200.231.58"}];

// Store in json file
fs.writeFile(path.join(__dirname,'data','persons.json'),JSON.stringify(persons), 'utf8',(err) => {
    if(err){
        throw err;
    }
    console.log('data is saved');
});

// Read the json file
fs.readFile(path.join(__dirname,'data','persons.json'),'utf8',(err,data) => {
    if(err){
        throw err;
    }
    console.log(JSON.parse(data));
});