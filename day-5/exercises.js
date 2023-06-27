

//1-Declare an empty array;
const empty = []

//2-Declare an array with more than 5 number of elements
let numbers = [1, 2, 3, 4, 5]

//3-Find the length of your array
console.log(numbers.length) //5

//4-Get the first item, the middle item and the last item of the array
let firstItem = numbers[0]
let middleItem = numbers[(numbers.length-1)/2]
let lastItem = numbers[numbers.length-1]
console.log(firstItem, middleItem, lastItem) //1 3 5

//5-Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.
let mixedDataTypes = ["Busra", 25, false, ["Turkey", "Istanbul"],null, undefined]
console.log(mixedDataTypes.length) //6

//6-Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
  ];

//7-Print the array using console.log()
console.log(itCompanies)

//8-Print the number of companies in the array
console.log(itCompanies.length) //7

//9-Print the first company, middle and last company
console.log(
    `First Company: ${itCompanies[0]}
    Middle Company: ${itCompanies[(itCompanies.length-1)/2]}
    Last Company: ${itCompanies[itCompanies.length-1]}`
)
/* 
First Company: Facebook
    Middle Company: Apple
    Last Company: Amazon
 */
//10-Print out each company
 itCompanies.forEach(e => console.log(e))

//11-Change each company name to uppercase one by one and print them out
itCompanies.map((e)=>{
    e = e.toUpperCase();
    console.log(e);
})

//12-Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let all = `${itCompanies.slice(0,-1).join(",")} and ${itCompanies.slice(-1)} are big IT companies.`
console.log(all)
//Facebook,Google,Microsoft,Apple,IBM,Oracle and Amazon are big IT companies.

//13-Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let cmpny = itCompanies.indexOf("Samsung");
cmpny === -1 
? console.log("Company not found in this array")
: console.log(itCompanies[index])
//company not found in this array

//14-Filter out companies which have more than one 'o' without the filter method
let letter = [];
itCompanies.forEach((e)=> {
    e.includes("oo") ? letter.push(e) : e;
});
    console.log(letter) //facebook, google

//15-Sort the array using sort() method
console.log(itCompanies.sort());//(7) ['Amazon', 'Apple', 'Facebook', 'Google', 'IBM', 'Microsoft', 'Oracle']

//16-Reverse the array using reverse() method
console.log(itCompanies.reverse()); //(7) ['Oracle', 'Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon']

//17-Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))//(3) ['Oracle', 'Microsoft', 'IBM']

//18-Slice out the last 3 companies from the array
 last = itCompanies.length-3;
 console.log(itCompanies.slice(last,itCompanies.length))//(3) ['Facebook', 'Apple', 'Amazon']

 //19-Slice out the middle IT company or companies from the array
 console.log(itCompanies) //(7) ['Oracle', 'Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon']
 let middleComp = (itCompanies.length-1)/2 ;
 console.log(itCompanies.slice(middleComp,middleComp + 1))

 //20-Remove the first IT company from the array
 itCompanies.shift();
 console.log(itCompanies)//(6) ['Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon']

 //21-Remove the middle IT company or companies from the array
 itCompanies.splice(middleComp, 1);
 console.log(itCompanies)//['Microsoft', 'IBM', 'Google', 'Apple', 'Amazon']

 //22-Remove the last IT company from the array
 itCompanies.pop();
 console.log(itCompanies) //(4) ['Microsoft', 'IBM', 'Google', 'Apple']

 //23-Remove all IT companies
 itCompanies.splice(0, itCompanies.length)
 console.log(itCompanies) //[]

 //LEVEL2
 //2-First remove all the punctuations and change the string to array and count the number of words in the array
let text =
    "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python " ;
let regex = /[.,]/g;
text = text.replace(regex,"");
let textArray = text.split(" ");
console.log(textArray.length) //14
console.log(textArray) //(14) ['I', 'love', 'teaching', 'and', 'empowering', 'people', 'I', 'teach', 'HTML', 'CSS', 'JS', 'React', 'Python', '']

//3-In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.indexOf("Meat") === -1
? shoppingCart.unshift("Meat")
: shoppingCart;
console.log(shoppingCart);
//(5) ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey']


shoppingCart.indexOf("Sugar") === -1
? shoppingCart.unshift("Sugar")
: shoppingCart;
console.log(shoppingCart);

allergictoHoney = true;
let indexOfHoney = shoppingCart.indexOf("Honey");
if(allergictoHoney){
    shoppingCart.splice(indexOfHoney,1);
    console.log(shoppingCart);
}else{
    console.log(shoppingCart)
}
//(5) ['Sugar', 'Meat', 'Milk', 'Coffee', 'Tea']

indexOfTea = shoppingCart.indexOf("Tea");
shoppingCart[shoppingCart.splice(indexOfTea, 1, "Green Tea")]
console.log(shoppingCart)
//(5) ['Sugar', 'Meat', 'Milk', 'Coffee', 'Green Tea']

/*Alternative
indexOfTea = shoppingCart.indexOf("Tea");
shoppingCart[indexOfTea] = "Green Tea";
console.log(shoppingCart);
*/

//4-In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];
  countries.indexOf("Ethiopia") === -1
  ? countries.push("Ethiopia")
  : console.log(countries[countries.indexOf("Ethiopia")].toUpperCase());
  //ETHIOPIA

  //5-In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];

  if(webTechs.indexOf("Sass") === -1){
    webTechs.push("Sass");
    console.log(webTechs)
  }else{
    console.log("Sass is a CSS prepocess")
  } //(8) ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB', 'Sass']

  //6-Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//LEVEL3
//1-The following is an array of 10 students ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort()
console.log(
    `The min value is: ${ages[0]} and the max value is ${ages[ages.length-1]}`
); 
//The min value is: 19 and the max value is 26

len = ages.length;
let median;
if(len % 2 === 0) {
    median = (ages[len / 2] + ages [len / 2 -1]) / 2;
}else {
    median = ages [parseInt(len / 2) + 1]
}
console.log( "Median is: ", median);
//Median is:  24

let sum = 0,
average ;
ages.forEach((e)=>{
    sum += e ;
})
average = sum / len;
console.log("AVERAGE :", average); //AVERAGE : 22.8


let min = ages[0]
let max = ages[ages.length-1]
Math.abs(min-average) > Math.abs(max-average)
?console.log("Min-average bigger than max-average")
:console.log("Max-average bigger than min-average");
//Min-average bigger than max-average

//2-Slice the first ten countries from the countries array
const firstTen = countries.slice(0, 10);
console.log(firstTen);
//(10) ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan']

//3-Find the middle country(ies) in the countries array
len = countries.length;
if(len % 2 === 0){
    console.log(countries[len / 2]+ countries[len / 2 - 1]);
}else {
    console.log(countries[parseInt( len / 2)]);
}
//Finland

//4-Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
len = countries.length;
middleIndex = parseInt((len - 1) / 2);
let firstHalf, secondHalf;
if(len % 2 == 0){
    firstHalf = countries.slice(0, middleIndex + 1);
    secondHalf = countries.slice(middleIndex + 1 , len);
    console.log(`First Half:${firstHalf} \nSecond Half:${secondHalf}`);
}else{
    firstHalf = countries.slice(0,middleIndex + 1);
    secondHalf = countries.slice(middleIndex + 1, len);
    console.log(`First Half:${firstHalf} \nSecond Half:${secondHalf}`);
}
//First Half:Albania,Bolivia,Canada,Denmark,Ethiopia,Finland 
//Second Half:Germany,Hungary,Ireland,Japan,Kenya
