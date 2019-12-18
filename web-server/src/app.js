const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()


//define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handebars engine and views location
app.set('view engine',  'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


//setup static deirectory to serve
app.use(express.static(publicDirectoryPath))



app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Andrew Mead'
    })

})


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me'
    ,   name: 'Andrew Mead'
    })
})

app.get('/help', (req, res) =>{
    res.render('help', {
        helpMessage: 'Need help',
        title: 'Help',
        name: 'Andrew Mead'
    })
})



app.get('/weather', (req, res) => {
    res.send([{
        Temprature: 27,
        Humidity: 0.25
    }])
})



//matching any page that starts with /help/
app.get('/help/*', (req, res) => {
    res.render('error', {
        title: 'watitdo',
        errorMessage: 'help page not found'
    })
})

//matches anything
app.get('*', (req, res) => {
    res.render('error', {
        errorMessage: 'page not found',
        title: 'SUp'
    })
})

app.listen(3000, () =>{
    console.log('Server is up on port 3000.')
})

