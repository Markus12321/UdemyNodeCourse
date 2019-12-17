const forecast = require('./forecast.js')
const geocode = require('./geocode')





if(!process.argv[2])
    return;

NameOfPlace = process.argv[2]

geocode.geocode(NameOfPlace, (error, {longditude, latitude, location}) => {
    if(error){
        console.log('Error', error)
        return
    }

    forecast.forecast(longditude, latitude, (error, forecastData) => {
        if(error){
            console.log(error)
            return
        }
        console.log(location)
        console.log(forecastData)


      
    })
})
