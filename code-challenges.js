// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [{name: "ford prefect", occupation: "hitchhiker"}, {name: "zaphod beeblebrox", occupation: "president of the galaxy."}, {name: "arthur dent", occupation: "radio employee"}]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is the president of the galaxy." "Arthus Dent is a radio employee."

//Fixed "president of the galaxy" to include a period rather than a common 

//My message to this final assessment: "So long, and thanks for all the fish"

//Creation of function that will take in an array of objects and join them together as a sentence. 
const describeHooptyFroods = (array) => {
    // prepare thyself for a super long return. 
    return  array.reduce( (paragraph, currentPerson) => `${paragraph} "${[ currentPerson['name'].split(' ').map( (name) => { return name[0].toUpperCase() + name.slice(1) }).join(' '), currentPerson['occupation'] ].join( currentPerson['occupation'].split(' ')[0] === 'president' ? ' is the ' : ' is a ')}."`,'')
}

//Calling our function in a console.log. 
console.log(describeHooptyFroods(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


//Creation of a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.
const mixedFloat = (array) => {
     return array.filter( value => typeof( value ) === "number" ).map( value => value % 3)
}

//Calling our function twice with some console.log's 
console.log(mixedFloat(testingArray1))
console.log(mixedFloat(testingArray2))

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

//Creation of function that takes in two arrays as arguments returns one array with no duplicate values.
const noDupes = ( array1, array2 ) => {
    return [ ... new Set( array1.concat(array2) ) ]
}

//Calling our function in a console.log with both arrays in its argument. 
console.log(noDupes( testingArray3, testingArray4 ))