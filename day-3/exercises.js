
//💻 Day 3: Exercises
//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types. 


let user = {
    firstName : "Busra",
    lastName : "Tugul",
    country : "Turkey",
    city : "Istanbul",
    age : 25,
    isMarried : true,
    year : 2023,
}

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

//Check if type of '10' is equal to 10
//Check if parseInt('9.8') is equal to 1

let a = "10"
let b = 10
console.log(a == b) //true
console.log( a === b) //false
console.log( a == (parseInt(9.8))) //false
console.log(parseInt(9.8)) //9


/* Truthy values:
1. true - This is the literal boolean value true.
2. "5 > 3" - This is a comparison statement that evaluates to true.
3. non-empty string "hi"

Falsy values:
1. false - This is the literal boolean value false.
2. 0 - This is the number zero, which is considered falsy.
3. "" - This is an empty string, which is also considered falsy */


//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log().
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false


//To find the length of "python" and "jargon" and make a falsy comparison statement, you can use the `length` property of strings and compare them using a falsy operator such as `<`
console.log("python".length < "jargon.length"); //f


//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log().
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true
console.log(!('dragon'.includes('on') && 'python'.includes('on')));

//Use the Date object to do the following activities
let now = new Date()
//What is the year today ?
console.log(now.getFullYear()) //2023
//What is the month today as a number?
console.log(now.getMonth()+1) //6
//What is thr date today?
console.log(now.getDate()) //25
//What is the day today as a number?
console.log(now.getDay())  // 0 Pazar
//What is the hours now?
console.log(now.getHours()) //20
//What is the minutes now?
console.log(now.getMinutes()) //5
//What is the minutes now?
console.log(now.getSeconds()) //49
//Find out the numbers of seconds elapsed from January 1,1970 to now?
let seconds = Math.floor(now.getTime() / 1000)
console.log("Seconds elapsed since January 1,1970 : " + seconds) //Seconds elapsed since January 1,1970 : 1687720952

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle .(area = 0.5 x b x h).
let base = prompt( "Enter the base of triangle:");
let height = prompt("Enter the height of the triangle");

let area1 = 0.5 * base * height;
console.log("The area of the triangle is: " + area1);

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and calculate the perimeter of triangle (perimeter = a + b + c).
let sideA = prompt("Enter side a of the triangle:");
let sideB = prompt("Enter side b of the triangle:");
let sideC = prompt("Enter side c of the triangle:");
let perimeter1 = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
console.log("The perimeter of the triangle is: " + perimeter1);

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length1 = prompt("Enter the length of the rectangle:");
let width1 = prompt("Enter the width of the rectangle:");
let area2 = parseFloat(length1) * parseFloat(width1);
let perimeter2=2*(parseFloat(length1) + parseFloat(width1));
console.log("Area of the rectangle: " + area2);
console.log("The perimeter of the rectangle: " + perimeter2);

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt("Enter the radius of the circle:");
let pi = 3.14;
let area = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log("The area of the circle is: " + area);
console.log("The circumference of the circle is: " + circumference);

//Calculate the slope, x-intercept and y-intercept of y = 2x -2.
let eğim = 2; // Eğim, x'in katsayısıdır
let xKesişimi = 2 / eğim; // x-kesişimi, y'yi 0 olarak alıp x için çözerek bulunur (0 = 2x - 2)
let yKesişimi = -2; // y-kesişimi, sabit terimdir
console.log("Eğim: " + eğim);
console.log("x-Kesişimi: " + xKesişimi);
console.log("y-Kesişimi: " + yKesişimi);

//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let slope = (y2 - y1) / (x2 - x1);
console.log("Slope: " + slope);

//Compare the slope of above two questions.
let slope1 = 2;
// Slope of second equation calculated from two points
let slope2 = (y2 - y1) / (x2 - x1);
// Comparing the slopes
if (slope1 === slope2) {
  console.log("The slopes are equal.");
} else if (slope1 > slope2) {
  console.log("The slope of the first equation is greater.");
} else {
  console.log("The slope of the second equation is greater.");
}

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
for (let x = -10; x <= 10; x++) {
    let y = x ** 2 + 6 * x + 9;
    if (y === 0) {
      console.log("The value of x at which y is 0 is: " + x);
      break;
    }
  }

//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt("Enter the number of hours worked: ")
let ratePerHour = prompt("Enter the rate per hour: ")
hours = parseFloat(hours)
ratePerHour = parseFloat(ratePerHour)
// Convert the input values to numbers
let pay = hours * ratePerHour
// Calculate the pay
console.log("The person's pay is: " + pay)

//If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = prompt("Enter your name: ")
let rule = (name.length)> 7
?console.log("Your name is long.")
:console.log("Your name is short.")

//Compare your first name length and your family name length and you should get this output.
let firstName = "Busra";
let lastName = "Tugul";

if (firstName.length > lastName.length) {
  console.log("The length of your first name is greater than the length of your last name.");
} else if (firstName.length < lastName.length) {
  console.log("The length of your last name is greater than the length of your first name.");
} else {
  console.log("The length of your first name is equal to the length of your last name.");
}
//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years
let today = new Date()
let user1 = prompt("Enter your birth year")
let age = (today.getFullYear() - (user1))
let rule2 = age >= 18
?console.log("You are " + (age) + " You are old enough to drive ")
:console.log("You are " + (age) + " You will be allowed to drive " + (18 - age) +" years.") 



//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
 let ages = myAge > yourAge
?console.log ( "I am " +(myAge - yourAge) +" years older than you")
:console.log ("You" +(yourAge - myAge) +"years older than me")

//Write a script that prompt the user to enter number of years.Calculate the number of seconds a person can live. Assume some one lives just hundred years.
let years = prompt("Enter the number of years: ")// Prompt the user to enter the number of years
let secondInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 24;
let daysInYear = 365;
let yearsInLifeTime = 100;
let secondsInLifeTime = years * daysInYear * hoursInDay * minutesInHour * secondInMinute;
console.log("A person can live approximately " + secondsInLifetime + " seconds in " + years + " years, assuming they live just 100 years.");

/* Create a human readable time format using the Date time object
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm */

let currentDate = new Date();

let format1 = currentDate.toISOString().slice(0, 16).replace('T', ' ');
let format2 = currentDate.toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
let format3 = currentDate.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }).replace(',', '');

console.log("Format 1: " + format1);
console.log("Format 2: " + format2);
console.log("Format 3: " + format3);

/* Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05 
In this code, we use the padStart() method to ensure that the month, day, hour, and minute values are always two digits. 
The padStart() method fills the beginning of a string with a specified character. */
const currentDate2 = new Date();
const year = currentDate2.getFullYear();
const month = String(currentDate2.getMonth() + 1).padStart(2, '0');
const day = String(currentDate2.getDate()).padStart(2, '0');
const hour = String(currentDate2.getHours()).padStart(2, '0');
const minute = String(currentDate2.getMinutes()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day} ${hour}:${minute}`;
console.log(formattedDate);


