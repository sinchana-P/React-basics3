/* NOTE :

What is state?
React has another special built-in object called state, which allows "components to create and manage their own data". 
So unlike props, components cannot pass data with state, but they can create and manage it internally.

*/


// function addTwoNumbers(a, b) {
//     a = 42  // Don't do this!
//     return a + b
// }

// addTwoNumbers(1, 2)

/*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = new Date()
const hours = date.getHours()
*/

function greeting(name) {
    const date = new Date()
    const hours = date.getHours()
    console.log(hours)

    let timeOfDay
    if (hours >= 4 && hours <= 11)
        timeOfDay = "morning"
    else if (hours >= 12 && hours <= 17)
        timeOfDay = "afternoon"
    else if (hours >= 17 && hours <= 20)
        timeOfDay = "evening"
    else 
        timeOfDay = "night"   
        
    return `Good ${timeOfDay}, ${name}`    

}

console.log(greeting("Bob"))


/*  NOTE  :    
    In React,
        values that are created by the functions or components are handled with STATE.
*/