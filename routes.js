const express = require('express');
const router = express.Router();

//import JSON data
const { projects } = require('./data/data.json');

//index page route
router.get('/', (req, res) => {
    res.render('index', { projects })
})

//about page route
router.get('/about', (req, res) => {
    res.render('about')
})

//projects page routes
//dynamically pulls in the proper page when project is selected
router.get('/project/:id', (req, res, next) => {
    const projectId = req.params.id;
    const project = projects.find(({ id }) => id === projectId);
    if (project) {
        res.render('project', { project })
    } else {
        //handles any errors outside of this route
        const error = new Error("This page cannot be found")
        error.status = 404
        next(error)
    }
});

//handles any other errors that may occur in routing
router.get('*', (req, res, next) => {
    const error = new Error("This page cannot be found")
    error.status = 404
    next(error)
})


//export the router for use elsewhere
module.exports = router