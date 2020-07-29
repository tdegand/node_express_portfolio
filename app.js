const express = require('express');
const app = express();

//import routes
const routes = require('./routes.js');
const { error } = require('console');

//serves all static files
app.use('/static', express.static('public'))

//sets view engine to render pug templates
app.set('view engine', 'pug')

//uses the routes file to route the user to the proper page
app.use(routes)

/* Error Handler */
app.use((err, req, res, next) => {
    res.locals.error = err
    res.status = err.status
    res.render('error', { err })
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0");