/* FUNCTIONS
Fonksiyonlar geriye değer döndürür.Eğer bir şey döndürmezse undefined döndürür. Return ile neyi döndürmek istersek belirtiriz.
Kaç parametre girileceğini bildmediğimiz durumlarda arrow function kullanmıyorsak eğer argument objesinden yararlanabiliriz.

isimsiz fonksiyonlar: bir değere atarız const ile.Anonymous function denir.expression functionlar da aynı buna benzemektedir.

self invoking functions: kendi kendini çağıran fonksiyonlar.

*/

let msg = "merhaba dünya" 

function sayHello() {
    let msg = "hello world"
    console.log(msg)
}

sayHello()

function printFullName() {
    let firstName = "Busra";
    let lastName = "Tugul";
    let space = " ";
    let fullName= firstName + space + lastName;
    console.log(fullName)
}
console.log(printFullName()) //undefined return ile değeri döndürmediğimiz için.
printFullName() //Busra Tugul

let hello = sayHello()
console.log(hello); //undefined değer döndürdü. return etmedik çünkü.

function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo;
    return total
}
console.log(addTwoNumbers())

function multiply( num1, num2) {
   return num1 * num2 
}
let total = multiply(5, 2);
console.log("Toplam ", total) //10

function sumArrayValues(arr) {
    let sum = 0;
    for ( let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumArrayValues(numbers)) //45

function sumAllNums() {
    let sum = 0
    for ( let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum
}
console.log(sumAllNums(15,20,30,40,45,50)) //200
console.log(sumAllNums(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)) //120
console.log(sumAllNums(2,4,6,8)) //20

//Anonymous func

const sayHi = function(name) {
    return `Hello ${name}`
}
console.log(sayHi("Busra"));

//Self Invoking Func

(function(n) {
    console.log(n * n)
})(2) //4

let squaredNum = (function(n) {
    return n * n
})(10)
console.log(squaredNum) //100


//ARROW FUNCTIONS
/* 
const hello2 = () => {
}
tek bir parametre alıyorsa parantezi kullanmaya gerek yok. 
const hello2 = parametre => {
    return `hello ${parametre}` diye döndürebilirsin.
}
tek bir satıra sığıyorsa köşeli parantezleri de kaldırırız.Otomatik olarak return işlemni bu kullanım yapıyor.

rest oparatörü normal functionlardaki argument yerine kullanılır.Alacağımızı aldıktan sonra kalanları bize bir dizi halinde vermeye yarar.
*/

const hi = name => `hello ${name}`
console.log(hi(`Onur`))
 
const names = ( name, surname ) => `hello ${name} ${surname}`
console.log(names(`Büşra`, `Tugul`))


 const toplama = (num1,...numbers) => { //rest
    console.log(num1) //1
    console.log(numbers) //2den 8e kadar kalanları alır
 }

toplama(1, 2, 3, 4, 5, 6, 7, 8)
console.log(typeof toplama) //function


const changeToUpperCase = ar => {
    const newArr = [];
    for ( const element of ar ){
        newArr.push(element.toUpperCase())
    }
    return newArr
}

countries = [`Finland`, `Sweden`, `Norway`, `England`, `Denmark`, `Iceland`]
console.log(changeToUpperCase(countries))
//(6) ['FINLAND', 'SWEDEN', 'NORWAY', 'ENGLAND', 'DENMARK', 'ICELAND']

//Varsayılan değer atama
function multiply( num1 , num2 = 2 ) {
    return num1 * num2 
}
console.log(multiply(10))//varsayılan num2 2 oldugu ıcın 20
console.log(multiply(15,5))//num2ye artık değer atadık varsayılanı kullanmayacak ve sonuc 75