

let challenge = "30 Days Of JavaScript" 

console.log(challenge.length) //20
console.log(challenge.toUpperCase())
console.log(challenge.toLocaleLowerCase())
console.log(challenge.substring(0,7))
console.log(challenge.includes("script")) //false
console.log(challenge.split(" "))//['30', 'Days', 'Of', 'JavaScript'] array oldu

let int = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(int.split(",")) //['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']virgüllerden parçalayarak array yaptık.

console.log(challenge.replace("JavaScript","Python"))
console.log(challenge.charAt(15)) //S
console.log(challenge.charCodeAt(15)) //83
console.log(challenge.indexOf("f")) //8
console.log(challenge.lastIndexOf("f"))//8

let txt = " You cannot end a sentence with because because because is a conjuction "
console.log(txt.indexOf("because")) //32
console.log(txt.lastIndexOf("because")) //48

console.log(txt.search("because")) //32
console.log(challenge.trim())//boşlukları sildik

console.log(challenge.startsWith("30")) //true
console.log(challenge.endsWith("t")) //true

console.log(challenge.match(/a/gi)) //(3) ['a', 'a', 'a']

console.log(challenge.repeat(2))

let numbe = "10"
let numb = 10
console.log(numbe === numb) //false
let numbe2 = +numbe
console.log(numbe2 === numb) //true

console.log(parseFloat("9.8") === (10)) //false
let ten = parseFloat("9.8")
console.log(Math.round(ten) === (10)) //true

let code = "python , jargon"
console.log(code.includes("on")) //true

let textt = "I hope this course is not full of jargon"
console.log(textt.includes("jargon")) //true

let randsayi = Math.floor(Math.random() * 100)
console.log(randsayi)
 
console.log(Math.floor(Math.random() * 255 ))

console.log("\t 1 1 1 1 \n\t 2 1 2 4 8 \n\t 4 1 4 16 64\n\t 5 1 5 25 125")

let metin = "Love is the best in this world. Some found their love and some are still looking for their love"
console.log(metin.match(/love/gi)) //3

//Generate a random number between 50 and 100 inclusively
console.log(Math.floor(Math.random() * 50) + 50);

//Generate a random number between 0 and 255 inclusively
console.log(Math.floor(Math.random() * 256));

//Access the 'JavaScript' string characters using a random number. 
console.log("JavaScript".charAt(Math.floor(Math.random() * 10)));

//Use substr to "slice" out the phrase "because because because" from the following sentence:

let s =
  "You cannot end a sentence with because because because is a conjunction";
console.log(s.slice(31, 54));

//Clean the following text and find the most frequent word (hint, use replace and regular expressions
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let regEx = /[^\w\s.]/gi;
console.log(sentence.replace(regEx, ""));

