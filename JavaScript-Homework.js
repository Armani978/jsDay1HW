//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]

let dogNames = ["Max","HAS","PuRple","dog"]
let dogString = "Hello Max, my name is Dog, and I have purple eyes!"

function findWords(){
        if(dogString.includes(dogNames)){
            console.log("Matched dog_name")
        } else {
            console.log("No Matches")
        }


        // input is a list
    // output is "matched dog name if name is in the string, if no matches are present "no matches"
}




//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// console.log(replaceEvens())
// Expected output
// arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// input is an array
// output is an is an array with strings of "even index" on each even index 
//splice even indices and replace them with a string

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
let newarr = arr.splice(0,1,'even index'
)
let e = arr.splice(2,1,'even index'
)
let f= arr.splice(4,5, 'even index')

console.log(newarr)
console.log(arr)