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
//dynamically pulls in the proper page when prject is selected
router.get('/project/:id', (req, res) => {
    const projectId = req.params.id;
    const project = projects.find(({ id }) => id === +projectId);
    if (project) {
        res.render('project', { project })
    } else if (projectId) {
        res.render('project', { project })
    } else {
        res.sendStatus(404);
    }
});
//export the router for use elsewhere
module.exports = router