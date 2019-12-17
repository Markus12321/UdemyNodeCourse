const https = require('https')

const url = 'https://api.darksky.net/forecast/365e05c764f6bbc5e349e7c9cb40ec7f/40,-75?units=si'

const request = https.request(url, (response) => {

    let data = ''

    response.on('data', (chunk) =>{
        data += chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
})

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()
