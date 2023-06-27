
/* 
Farklı veri türlerini depolayabilir.Aynı değişkeni tanımlayabiliriz.const daha çok tercih edilir.
array içinde array tutulabilir.içimde olduğu arrayin elemanı olur.


*/

let empty = Array() //EMPTY ARRAY
let empty2 = [] //tercih edilen boş tanım budur.

let names = ["Büşra"]
console.log(names.length)

//arrayde objelerde tutulabilir.objelerde de array tutulabilir.
const user = [
    "Busra",
     true,
     300,
     {country:"Turkey",city:"Istanbul"},
     {skills:["HTML","CSS","JS"]}
]

//Bir stringi js.split("") ile bölersek harfleri ile bölerek array yapıyordu.Bunları .split() metodunu arraylerde de kullanabiliriz.
//arraydeli elemanlara erişmek için:

console.log(user[1]) //true
console.log(user.length-1) //4 dizinin uzunluğu


//arrayler nonprimitivedir. yani sonradan değiştirilebilirler.

const numbers = [1, 2, 3, 4]
numbers[0]= 5
console.log(numbers) //[5, 2, 3, 4]

/* ARRAY METHODS

.Array = boş bir array oluşturabiliriz. let empty2 = []den farkı bunu tanımlarken sanki 5 elemandan oluşan boş bir liste gibi tanımlayabiliriz.

.fill arrayi ne ile doldurmak istersek

.length arrayin uzunluğunu verir.

.concat iki arrayi birleştirmek istediğimizde kullanırız.

.indexOf array içinde varsa indexini döner, yoksa -1

.slice belirli bir aralıkta birden fazla değeri kesmek

.splice 3 parametre alır. Başlangıç, silineceklerin sayısı, yeni eklenenler.Listeden elemanları çıkartmak gibi düşün.

.join joinde verdiğimiz bir ayırıcı ile birleştirerek string yapar.Varsayılan olarak comma(virgülle) birleştirir.

.toString arrayi stringe çeviririz.

.includes arrayde var mı yok mu arar. varsa true yoksa false.case duyarlı.

.lastIndexOf en son nerede geçtiğini belirtir.

.isArray typeOf ile arrayler object olarak gözükür.Ancak bunun ile bize arrayse true değilse false döner.

.push sona eleman eklemeye yarar.

.pop son degeri kaldırır. Ancak onu depolar yani yeni yeni bir değişkene atayabiliriz.

.shift baştan eleman çıkartmak istediğimizde kullanırız. pop gibi. çıkan değişkeni döndürebiliriz.

.unshift  başa eleman eklemeye yarar.

.reverse listeyi tersine çevirmek için kullanılır.stringi çevirmez onu da önce array yapmak lazımdır.

.sort alfabetik sıralama yapar artana doğru sıralar.


*/

let empty1 = Array(5).fill("Busra")
// console.log(empty1) //(5) [empty × 5]

console.log(empty1) //(5) ['Busra', 'Busra', 'Busra', 'Busra', 'Busra']

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let array3 = [7, 8, 9]
let result = array3.concat(array2, array1)
console.log(result)
//(9) [7, 8, 9, 4, 5, 6, 1, 2, 3]

//veya kendimiz array atayabiliriz.

let result1 = array2.concat(array3, array1, [0, -1])
console.log(result1)
//(11) [4, 5, 6, 7, 8, 9, 1, 2, 3, 0, -1]

//ya da let result1 = array2.concat(array3, array1, 0, 1, 2) diye de yazabiliriz.

console.log(result1.indexOf(9)) //5
console.log(result1.indexOf(-2)) //-1

const fruits = ["banana", "orange", "mango", "lemon"]
let index = fruits.indexOf("banana")

if (index != -1){
    console.log("This fruit does exit in the array.")
}else{
    console.log("This fruit does not exist in the array")
}

//This fruit does exit in the array.
let na = "Büşra"
console.log(Array.isArray(fruits)) //true- evet arraydir.
console.log(Array.isArray(na)) //false- array değildir.
let newNa = na.split("")
console.log(Array.isArray(newNa)) //true. çünkü split ile bunu harflerinden bölerek array yaptık.

console.log(fruits.toString()) //banana,orange,mango,lemon
console.log(typeof(fruits)) //hala obje yani array çünkü yani değişkene atamadık.

console.log(fruits.join("/"))
// banana/orange/mango/lemon 

console.log(fruits.join())
// banana,orange,mango,lemon - DEFAULT

console.log(fruits.join(""))
// bananaorangemangolemon 

console.log(fruits.slice()) //tamamını alır.
console.log(fruits.slice(0)) //tamamını alır.
console.log(fruits.slice(0, fruits.length)) //tamamını alır
console.log(numbers.slice(1,4)) //[2,3,4] // ending positionu içermez.

console.log(fruits.splice()) //hepsini siler []
console.log(fruits.splice(0,1))  //sadece 1i item çıktı

const numbe = [1, 2, 3, 4, 5, 6, 7,]
const numbeNew= (numbe.splice(3, 3 ,8 ,9 ,0 ))
console.log(numbeNew)

numbeNew.push(10)
console.log(numbeNew) //(4) [4, 5, 6, 10]

console.log(fruits) //(3) ['orange', 'mango', 'lemon']
let fruit = fruits.pop()
console.log(fruits) //(2) ['orange', 'mango']
console.log(fruit) //lemon

const aa = [1, 6, 3, 4, 2, 5];
console.log(aa.unshift(3)); //7 eleman sayısını verir.
console.log(aa) //7) [3, 1, 2, 3, 4, 5, 6]

console.log(aa.reverse()) //(7) [6, 5, 4, 3, 2, 1, 3]
let myName = "busra"
console.log(myName.split("").reverse().join("")) //arsub


fruits.sort()
console.log(fruits) //(2) ['mango', 'orange']

aa.sort()
console.log(aa) //(7) [1, 2, 3, 3, 4, 5, 6]
aa.reverse()
console.log(aa) //[6, 5, 4, 3, 3, 2, 1]


const array5 = [1, 2, 3, [4, 5, 6], 7]
console.log(array5[3]) //(3) [4, 5, 6]
console.log(array5[3][0]) //4



