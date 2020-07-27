const express = require('express');
const { project } = require('./data/data.json');

const app = express();

app.use('/static', express.static('public'))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    const indexData = { project }
    res.render('index', indexData)
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/project/:id', (req, res) => {
    const id = project.id
    const name = project.name
    const description = project.description
    const tech = project.technologies
    const live = project.live_link
    const github = project.github_link
    const photos = project.image_urls

    const projectData = { name, description, tech, live, github, photos }

    res.render('project', projectData);
})

app.listen(3000);