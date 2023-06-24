

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