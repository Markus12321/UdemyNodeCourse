const fs = require('fs')
/*const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)

fs.writeFileSync('1-json.json', bookJSON)

const data = fs.readFileSync('1-json.json')

const a = JSON.parse(data.toString())

console.log(a.title)
*/


const data = fs.readFileSync('1-json.json').toString()

const objectAboutMe = JSON.parse(data)

objectAboutMe.name = 'markus'
objectAboutMe.age = 25

const jsonStringOfObject = JSON.stringify(objectAboutMe)

fs.writeFileSync('1-json.json', jsonStringOfObject)

