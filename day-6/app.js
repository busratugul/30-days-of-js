
/* FOR LOOP 
for(initialization,condition,increment/decrement){
    code goes here
}   */

for(let i = 0; i<=5; i++){
    console.log(i)
}

for(let i = 0; i>=5; i--){
    console.log(i)
}

for(let i=0; i<=100; i++){
    console.log(i)
}

for(let i=0; i<=5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}/* 0 * 0 = 0
     1 * 1 = 1
     2 * 2 = 4
     3 * 3 = 9
     4 * 4 = 16
     5 * 5 = 25  */

const names = ["Büşra", "Onur", "Lili", "Lulu"]
for (let i = 0; i<names.length; i++){
    console.log(names[i])
}


//Adding all elements in the array
const numbers = [5, 15, 30, 35, 40, 45]
let sum = 0
for(let i = 0; i<numbers.length; i++){
    sum += numbers[i]
}
console.log(sum) //170

//Creating a new array based on the existing array
const number = [1, 2, 3, 4, 5]
const newArr = []
for(let i=0; i<number.length; i++){
    newArr.push(number[i]** 2)
}
console.log(newArr) //[1, 4, 9, 16, 25]

let countries =["turkey", "cyprus", "azerbaijan"]
let newCountries = []
for (let i = 0; i<countries.length; i++){
    newCountries.push(countries[i].toLocaleUpperCase("TR"))
}
console.log(newCountries) //['TURKEY', 'CYPRUS', 'AZERBAİJAN']


//WHILE LOOP
//Koşul doğru ise çalıştırır.
let a = 0
while(a <= 5) {
    console.log(a)
    a++
}

let n = 7
while(n < names.length){
    console.log("İsim :" , names[n])
    n ++
}do{
    console.log("isim", names[n])
    n++
}while(n < names.length) //isim undefined yanii koşul doğru olmadığı için while hiç çalışmadı ancak do while 1 kere çalıştı ve koşul f olduğu için durdu.


//DO WHILE LOOP
//Koşula bakmadan bir kere kodu çalıştırır.Koşul true ise bir kere daha çalıştırır.

//for of loop diziler için for of döngüsünü kullanırız.Dizideki her bir elemanın indeksi ile ilgilenmiyorsak çok kullanışlıdır.

for(let name of names){
    console.log("ad: " ,name )
} //yani bize indeksini vermeden direkt listeyi basıyor.

for ( let num of numbers){
    console.log(num * num)
} //25,225,900,1225,1600,2025 arraydekilerin karesini aldık

let topl = 0
for(const num of number){
    topl += num
} console.log(topl) //15

let webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB"
]
for( let tech of webTechs){
    console.log(tech[0]) //H,C,J,R,R,N,M
}


const newA =[]
for( let web of webTechs){
   newA.push(web.toUpperCase())
}
  console.log(newA) //['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'REDUX', 'NODE', 'MONGODB']

  //break
 for (let name of names){
    if(name === "Lili"){
    console.log(`${name} bulundu.`) //lili bulundu.
    break
 }
    console.log(name)
 } //Büşra, Onur

 //CONTINUE atlamak es geçmek için kullanılır.


for (let name of names){
    if(name === "Lulu"){
        console.log(`${name} es geçildi`)
        continue
    }
    console.log(name)
} //luluyu es geçti diğer isimleri yazdırdı.
