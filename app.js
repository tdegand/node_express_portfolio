const express = require('express');
const app = express();

//import routes
const routes = require('./routes.js');

//serves all static files
app.use('/static', express.static('public'))

//sets view engine to render pug templates
app.set('view engine', 'pug')

//uses the routes file to route the user to the proper page
app.use(routes)


app.listen(3000);