const fs = require('fs')
const chalk = require('chalk')

//SER DU DETTE
const readNote = (title) => {
    const notes = loadNotes()

    const noteToRead = notes.find( (note) => note.title === title)

    console.log('Title: ' + noteToRead.title)
    console.log(noteToRead.body)
}
const listNotes = () => {
    console.log(chalk.green('Your notes'))

    notes = loadNotes()

    notes.forEach((note) => console.log(note.title))
}
const removeNote = (title) => {
    const notes = loadNotes()

    const notesAfterRemoval = notes.filter((note) => note.title !== title)

    if(notesAfterRemoval.length < notes.length){
        console.log(chalk.green('Note removed!'))
    }else{
        console.log(chalk.red('No note found'))
    }

    saveNotes(notesAfterRemoval)
}

const addNotes = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title )

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        }) 
        saveNotes(notes)
        console.log('New note added!')
    }else{
        console.log('Note title taken!')
    }

   
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}



const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
    
}


module.exports = {
    getNotes: this.getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}