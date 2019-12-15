const yargs = require('yargs')
const notes = require('./notes.js')

//customize yargs version

// create add command


yargs.command( {
    command: 'add',
    describe: 'Add a new note',
    builder : {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})


yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder :{
        title: {
            describe: 'Title of note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// add, remove, read

yargs.command({
    command: 'list',
    describe: 'listing all notes',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder :{
        title: {
            describe: 'Title of note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()

//console.log(yargs.argv) 

