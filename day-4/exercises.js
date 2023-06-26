

//EXERCISES - DAY4
/* Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18. */
 let userAge = parseInt(prompt("Enter your age: "))

    if(userAge >= 18 ){
        console.log("You are old enough to drive.")
    }else{
        console.log("You are left with " + (18 - userAge) + " years to drive.")
    }
 /* Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input. */

    let yourAge = parseInt(prompt ( "Your Age : "))
   let myAge  = 25
   if ( yourAge > myAge){
       console.log("You are " + (yourAge - myAge) + " years older than me" )
   }else{
       console.log("I " + (myAge - yourAge) + " years older than your.")
   } 
/* If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways */
let a = 4
let b = 3
console.log(
    a > b ? "a is greater than b" : "a is less than b")

if (a > b) {
    console.log("a is greater than b")
} else {
    console.log("a is less than b")
}
/* Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
 */
   let even = prompt(" Enter a number ?")
  if((even%2)== 0){
     console.log( even + " is a even number.")
  }else{
     console.log( even + " is a odd number.")
  } 

/* Write a code which can give grades to students according to theirs scores: */
  let score = parseInt(prompt("Enter your score"))
 if(score >= 80){
    console.log("A")
 }else if(score >= 70){
    console.log("B")
 }else if(score >= 60){
    console.log("C")
 }else if(score >= 50){
    console.log("D")
 }else{
    console.log("F")
 } 

/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */
let month = prompt('what is the month').toLowerCase()
if (month == 'october' || month == 'november' || month == 'september') {
    console.log('You are in Autumn')
} else if (month == 'december' || month == 'january' || month == 'february') {
    console.log('You are in Winter')
} else if (month == 'march' || month == 'april' || month == 'may') {
    console.log('You are in Spring')
} else {
    console.log('You are in summer')
}

/* Check if a day is weekend day or a working day. Your script will take day as an input. */

let day = prompt('day')

if (day == 'saturday' || day == 'sunday') {
    console.log(`${day} is weekend`)
} else {
    console.log(`${day} is work day`)
}



