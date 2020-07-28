const express = require('express');
const { projects } = require('./data/data.json');

const app = express();

app.use('/static', express.static('public'))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', { projects })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/project/:id', (req, res) => {
    const projectId = req.params.id;
    const project = projects.find(({ id }) => id === +projectId);
    const newLocal = JSON.parse(project.image_urls);
    const photos = newLocal
    const photo1 = photos[0]
    const photo2 = photos[1]
    const photo3 = photos[2]
    if (project) {
        res.render('project', { project, photo1, photo2, photo3 })
    } else {
        res.sendStatus(404);
    }


})

app.listen(3000);