const express = require('express');
const { project } = require('./data/data.json');

const app = express();

app.use('/static', express.static('public'))

app.set('view engine', 'pug')

app.get('/', (req, res) => {

    project.forEach(project => {
        const photos = JSON.parse(project.image_urls)
        const photo1 = photos[0];
    })

    res.render('index', { photo1 })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/project/:id', (req, res) => {

    project.forEach(project => {
        const name = project.project_name
        const description = project.description
        const tech = project.technologies
        const live = project.live_link
        const github = project.github_link

        const photos = JSON.parse(project.image_urls)
        const photo2 = photos[1]
        const photo3 = photos[2]

        res.render('project', { name, description, tech, live, github, photo2, photo3 });
    });

})

app.listen(3000);