//a callback function is a function we provide as an argument to another function, with the intention of calling that function at a later time

/*
setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names =['Andrew', 'Jen', 'Jess']
shortNames = names.filter((name)=>{
    return name.length <= 4
})

const geocode = (address, callback) =>{
    setTimeout(() =>{
        const data = {latitude: 0,
            longditutde: 0}
        
            callback(data)
    }, 2000)
                
    
}

geocode('Philly', (data) => {
    console.log(data)
})

*/

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (x, y, callback) => {
    setTimeout(() => {
        callback(x+y)

    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

