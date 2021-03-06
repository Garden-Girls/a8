
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

// all pages HERE! no slash - naming

var index = require('./routes/index');
var myPlantsPage = require('./routes/myPlantsPage');
var calendar = require('./routes/calendar');
var bert = require('./routes/bert');
var dayEntry = require('./routes/dayEntry');
var stripes = require('./routes/stripes');
var froggy = require('./routes/froggy');
var emily =  require('./routes/emily');
var search = require('./routes/search');
var addPage = require('./routes/addPage');
var filtered = require('./routes/filtered');
var editPlantPage= require('./routes/editPlantPage');
var orchidInfopage = require('./routes/orchidInfopage');
var lavenderInfopage = require('./routes/lavenderInfopage');
var rosemaryInfopage = require('./routes/rosemaryInfopage');
var filteredHerb = require('./routes/filteredHerb');
var filteredFern = require('./routes/filteredFern');
var loginPage = require('./routes/loginPage');
var addPhoto = require('./routes/addPhoto');
var basilInfoPage = require('./routes/basilInfoPage');

//adding forms
//var add = require('./routes/add');
var addingPlant = require('./routes/addingPlant');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/',loginPage.view);
app.get('/index', index.view);

app.get('/myPlantsPage', myPlantsPage.view);
app.get('/calendar', calendar.view);
app.get('/bert', bert.view);
app.get('/dayEntry', dayEntry.view);
app.get('/froggy', froggy.view);
app.get('/stripes',stripes.view);
app.get('/emily',emily.view);
app.get('/search', search.view);
app.get('/addPage', addPage.view);
app.get('/filtered',filtered.view);
app.get('/editPlantPage',editPlantPage.view); //no species
app.get('/orchidInfopage',orchidInfopage.view);
app.get('/lavenderInfopage',lavenderInfopage.view);
app.get('/rosemaryInfopage',rosemaryInfopage.view);
app.get('/filteredHerb',filteredHerb.view);
app.get('/filteredFern',filteredFern.view);
app.get('/loginPage', loginPage.view);
app.get('/addPhoto', addPhoto.view);
app.get('/basilInfoPage',basilInfoPage.view);

// Example route
// app.get('/users', user.list);

//testing diff entries
app.get('/dayEntry/:plantName/:monthNum/:dayNum/:yearNum', dayEntry.view);
app.get('/addPhoto/:plantName/:monthNum/:dayNum/:yearNum', addPhoto.view);
app.get('/plant/:plantName', froggy.view);
app.get('/editPlantPage/:species', editPlantPage.view);

//adding to JSON
//app.get('/add', add.addEntry);
app.get('/plant/:plantName/add', froggy.addEntry);
app.get('/plant/:plantName/update', froggy.update);
//app.get('/addingPlant', addingPlant.addPlant);
app.get('/editPlantPage/:species/add', editPlantPage.addPlant);
app.get('/dayEntry/:plantName/:monthNum/:dayNum/:yearNum/add', dayEntry.addEntry);
//end testing

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
