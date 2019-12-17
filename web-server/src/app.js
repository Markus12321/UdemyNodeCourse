const path = require('path')

const express = require('express')



const app = express()

//app.com is our domain
//app.com/help
//app.com/about
//these are different route

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))



app.get('/weather', (req, res) => {
    res.send([{
        Temprature: 27,
        Humidity: 0.25
    }])
})


app.listen(3000, () =>{
    console.log('Server is up on port 3000.')
})

