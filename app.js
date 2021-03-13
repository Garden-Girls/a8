
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
var dayEntry = require('./routes/dayEntry');

var froggy = require('./routes/froggy');
var froggyAbout = require('./routes/froggyAbout');

var editPlantPage= require('./routes/editPlantPage');
var loginPage = require('./routes/loginPage');
var addPhoto = require('./routes/addPhoto');

//replace later
var newSearch = require('./routes/newSearch');

var basilInfoPage = require('./routes/basilInfoPage');
//end replace



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
app.get('/calendar/:nickname', calendar.view);

app.get('/dayEntry', dayEntry.view);

app.get('/editPlantPage',editPlantPage.view); //no species
app.get('/loginPage', loginPage.view);
app.get('/addPhoto', addPhoto.view);

//replace later
app.get('/search', newSearch.view);
app.get('/search/for/', newSearch.searched);

app.get('/info/:species',basilInfoPage.view);
//end replace

// Example route
// app.get('/users', user.list);

//testing diff entries
app.get('/dayEntry/:plantName/:monthNum/:dayNum/:yearNum', dayEntry.view);
app.get('/addPhoto/:plantName/:monthNum/:dayNum/:yearNum', addPhoto.view);
app.get('/editPlantPage/:species', editPlantPage.view);

//adding to JSON
app.get('/plant/:plantName', froggy.view);
app.get('/plant/:plantName/add', froggy.addEntry);

app.get('/plant/:plantName/update', froggyAbout.update);
app.get('/plant/:plantName/about', froggyAbout.view);

app.get('/editPlantPage/:species/add', editPlantPage.addPlant);
//app.get('/editPlantPage/:species/add', editPlantPage.redirect);

app.get('/dayEntry/:plantName/:monthNum/:dayNum/:yearNum/add', dayEntry.addEntry);
//end testing

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

