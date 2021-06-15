// Operators


/*
    Assigment & Comparison
    - Assigment assigns value to a declasration
    - Commparison compare values
        -Addition +
        -Substractions - 
        -Division /
        - Exponent **
        - Modulus %
        - Mathe ojbectsto help with other operations
        - Equality and Strict Equality ==& ===
*/

let age = 25;

//Modulus - provides remainder of euclidean division

console.log(25 % 5);

// Math Object - allows access to more advance mathematical computation

console.log(Math.max(5, 2, 17, 22, 97))

// Equality vs Strict Equality Opeartors
/*
    Equality & Strict Equlity Operators
        -Return truthy or falsey value depending on a given condition
        - equality perform type coercion on one of the value it's being compared to. For ex: 5 == "5"
*/

console.log(5 == 5 ) // return true

console.log(5 === 5) // return true

console.log(5 == "5") // returns true because of types coercion

console.log(5 === "5")// return false because we're checking for value & value type

let x = 5;
let y = "5"

console.log(typeof x, typeof y) //same value different data type

//Extra Credit How to get data in JavaScript

let todayDate = new Date
let year = date.getFullYear()
let month = date.getMonth()
month += 1 // month = month + 1 OR month = 5 + 1
let day = date.getday()

console.log('Today is ${day} day of ${month} of ${year}')

// null vs 