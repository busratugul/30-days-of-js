/* 
DATA TYPES
1-primitive data types

:numbers,strings,booleans,null,undefined

2-Non-primitive data types (object references)
:objects,functions,arrays


 */

let word = "JavaScript"
word[0]= "Y"
console.log(word); //J harifini Y yapmak istedik ama değişmedi çünkü primitive veri tipidir.Primitive veri tipleri değiştirilemez.

//Primitive veri tipleri değerlerine göre, non-privimitive veri tipleri referanslarına göre karşılaştırılır.


//Karşılaştıralım.
let numOne = 3
let numTwo = 3  //bunlar birbirine eşittir.
console.log( numOne == numTwo); //true
console.log (numOne = numTwo); //3

let js = "JavScript"
let py = "Python"
console.log(js == py); //false

let lightOn = true
let lightOff = false
console.log( lightOn == lightOff); //false

/* NON-PRIMITIVE = düzenlenebilir,değiştirilebilir.

array = veri değerlerinden oluşan bir listedir.
Aynı veri tipinden veya farklı veri tiplerinden oluşabilir.Dizideki ilk eleman 0. indekstir.
*/

let mix = [ 1, "Busra", false, [], undefined, null]

mix[0] // 1 
mix [3] // 4 undefined

console.log (mix);
mix[1] = "Onur"
console.log (mix);

let nums = [1, 2, 3, 4, 5 , 6, 7] //iki arrayde aynı gibi gözükse de aslında aynı değiller.
let numbers = [1, 2 , 3, 4, 5, 6, 7]
console.log(nums == numbers); //false

let user1 = {
    name : "Busra",
    surname : "Tugul"  //bu iki objede birbiri ile aynı değildir.
}

let user2 = {
    name : "Busra",
    surname :"Tugul"
}

console.log( user1 == user2 ); //false

//yani ilkel olmayan veri tipleri karşılaştırılamaz.Çünkü bunlar değerlerine göre değil referanslarına göre karşılaştırılır. İki obje aynı temel nesneyi referans alırsa birbirine eşit olur.

num1 = [1 ,2, 3]
let num2 = num1
console.log(num2 == num1); //true


/* NUMBERS
Aritmetik atama yapılan değerlerdir. */

const BOILINGPOINT = 100 //kaynama sıcaklığı
const BODYTEMP = 37 //vücut ısısı

//Math object : sayılarla çalışmak için birçok metod içerir.
const PI = 3.41
console.log(Math.PI);
console.log(Math.round(9.81)); // to round values to the nearest number,if above .5 up if less 0.5 down rounding
console.log(Math.floor(PI)); //3  rounding down (tabana yuvarlar)
console.log(Math.ceil(PI)); //4  rounding up /tavana yuvarlar)
console.log(Math.min(-5, 3 ,-10, 20));//-10 returns the minimum value
console.log(Math.max(-5, 3 ,-10, 20));//20 returns the maximum value
const randNum = Math.random();
console.log(randNum); //creates random numaber between 0 and 0.9999999

//let us create random number between 0 to 10

const num = Math.floor(Math.random() * 11);
console.log(num); // creates number between 0 and 10

//Absolute value
console.log(Math.abs(-10)); //10

//Square root - karekök
console.log(Math.sqrt(100)); //10

//Power - Üs = ** de üs demek 3 ** 2 = 9
console.log(Math.pow(3,2)); //9 1.value 2.pow

console.log(Math.E); //2.718

//Logarithm- logaritma
console.log(Math.log(2)); // 0.693147

//Trigonometry
Math.sin(0)
Math.cos(60)

//STRINGS

let space = " "

let name =" Busra" 
let surname = " Tugul "
let country = "Turkey"
let age = "25"

let fullName = name + space + surname 
 
 console.log(name + " " + surname);
 //Bu şekilde birleştirmek hem hataya açık hem de eski.Ama yine de bilmekte fayda var.

 let personInfoOne = fullName + " I am " + age + " . I live in " + country 
 console.log(personInfoOne); //önerilen kullanım

 //stringler çok uzun yazılar da olabilir.Bu gibi durumlarda ters slash \ ile diğer satIra geçeriz. 

 const paragraph = "The serene morning sun cast its gentle rays across the vibrant meadow,\
  painting the landscape in hues of gold and green.\
   The air was filled with the melodious symphony of chirping birds and the subtle fragrance of blooming wildflowers. As I strolled along the winding path, a sense of tranquility washed over me, enveloping my senses in a peaceful embrace. The world seemed to pause for a moment, allowing me to appreciate the simple beauty that surrounded me. In that fleeting instance, I felt a profound connection to nature, a reminder of the profound wonders that exist just beyond our doorstep."
   console.log(paragraph);


   /* COMMON ESCAPE - Bazı kaçış karakterleri
   \n = new line -yeni satır
   \t = tab, means 8 spaces - 8 boşluk verir
   \\ = back slash
    \' = single quote (')
    \" = double quote (")
    yani eğer çift tırnak açtığımız stringin içine tek tırnak koyasan sıkıntı yok ama tek tırnakla açılanın içine tek tırnak koymak için veya çift tırnakla açıtığımız şeyin içine çift tırnak koyabilmek için \ kaçış karakterine ihtiyacımız var.

 */
console.log("bus\ra");
console.log("bus\\ra");

/*  TEMPLATE LITERALS (TEMPLATE STRINGS)
    `String literal text`
    `String literal text ${expression}`
    değişken $ ile tanımlanır.
 */ 

  let cat1 = "lili"
  let cat2 = "lulu"
  let myCats = `${cat1},${cat2}`
  console.log(myCats)

  let a = 5
  let b = 4
  

  //back tick arasında istediğin gibi altsatıra gecebilirsin.

  let myCats1 = `${cat1}

  
    i 
                love 
    cats
  
    a + b = ${a + b}

    ${a} + ${b} = ${a + b}

  ${cat2}`
  console.log(myCats1)

/*  STRING primitivedir bir kere oluşturulduğunda     değiştirilmiyor.  
  
        STRING METHODS

        .length() = uzunluk

        .uppercase() = büyük harf

        .lowercase() = küçük harf

        .substr() = stringi bölmek ilk dahil son dahil

        .substring() = stringi bölmek ilk dahil son degil

        .split()= belirtilen şey ile springi array yaparız.

        .trim()= sondaki ve baştaki boşlukları kaldırmak için kullanılır.

        .includes() = stringin içinde bu var mı yok mu diye aramaktır.Büyük küçük harf duyarlı

        .replace() = metni değiştirmek , ama bir kere değiştirir. hepsini tekrar tekrar değiştirmek için .replaceAll kullanırız.

        .charAt() bir indeksteki değeri direkt alabiliyoruz.

        .charCodeAt() :ASCII değerini döndürür.

        .indexOf() :stringin içinde yine bir değer arıyor ancak bu sefer bize geçtiği ilk yerin indeksini döndürüyor eğer yoksa -1 dönüyor.

        .lastIndexOf(): aranan elamanı son gördüğü indeksi getirir.

        .concat()

        .starsWith(): yine bir ifade arıyor ama o ifade ile başlıyorsa true başlamıyorsa false dönüyor.

        .endsWith() : startswithin aynı sadece bitiyor mu diye bakıyor

        .search(): yine bir metin alıyor ve ilk eşleşenin indexini döndürür.indexOf gibi string arar ya da regular expression pattern arayabiliyor.

        .repeat() : stringi tekrarlatır

        .match(): parametre olarak ya metin ya da regular expression pattern alır. Eğer eşleşme olursa array, eşleşme olmazsa null döndürür.



        regular  expression pattern / ile başlar / bile biter mesela /love/ veya /love/gi gibidir burada g globol anlamında tüm dillerde ara demektir. i ise case insensitive yani büyük küçük harf duyarı olmadan ara demektir./\d+/  sayı aramaktır tek tek döner, /\d+/g ise bütün sayı döner. 
        */


        


//direkt uzunluk sayısını alacaksak direkt etiketi yazarız ancak karakteri alacaksak önce string ya da arrayin adını sonra [] içinde değişkeni yazarız.


let lang = "JavaScript"
let arrlang = ["J", "A", "V", "A", "S", "C"]

console.log(lang[5]); //c
console.log(arrlang[5]); //C

 let lastIndex = arrlang.length -1 //5
 console.log(lastIndex);
 console.log(arrlang[lastIndex]); //C

 let lastIndex2 = lang.length -1 
 console.log(lastIndex2); //9
 console.log(lang[lastIndex2]); //t

console.log(lang.length); //10

console.log(lang.toUpperCase());

console.log(lang.substr(0,4));//Java
//ilk dahil, son dahil.

console.log(lang.substring(0,4)); //Java
//ilk dahil, son dahil değil .



let info = ( "30 Days of JavaScript")

console.log(info.split(" ")); //spring artık bir array oldu ["30","Days","of","JavaScript"]

console.log(info.split()) //direkt arraye çevirdi.yani ["30 Days of JavaScript"] oldu.

console.log(info.split('')) //tek tek harflere bölüp array yaptı. ['3', '0', ' ', 'D', 'a', 'y', 's', ' ', 'o', 'f', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']


let info2 = ( "this, 30 Days of JavaScript")
console.log(info2.split(','))//virgülden bölerek array yaptı. ['this', ' 30 Days of JavaScript']

let info3 = ( "   this, 30 Days of JavaScript   ")
console.log(info3.trim());

console.log(info3.includes("this")) //true
console.log(info3.includes("i")) //true
console.log(info3.includes("python")) //false

console.log(info3.trim().replace("JavaScript", "Python")) // this, 30 Days of Python oldu
 
let str = "Merhaba Busra, naber Busra"
console.log(str.replace("Busra", "Onur"))//Merhaba Onur, naber Busra

console.log(str.replaceAll("Busra", "Onur")) //Merhaba Onur, naber Onur

console.log(str.charAt(0)); //M

let ascii = str.length-1
console.log(str.charCodeAt(ascii)) //97


console.log(str.indexOf("r")) //2
console.log(str.indexOf("i")) // -1

let text = "Love is the best to in this world  \n "
console.log(text.startsWith("l")) //false
console.log(text.startsWith("L")) //true //boşluğa duyarlı boşluk olsa false dönerdi

console.log(text.search("Love")) //0
/* console.log(search(/javascript/gi)) */



//REGULAR EXPRESSION PATTERN
let rule = "I love JavaScript. If you do not love JavaScript what else can you love.Love is the best to in this world"
console.log(rule.match("love"))
//['love', index: 2, input: 'I love JavaScript. If you do not love JavaScript what else can you love', groups: undefined] böyle bir ifade döndü ve 1 tane love buldu

console.log(rule.match(/love/g))//(3) ['love', 'love', 'love'] 3 tane love buldu

console.log(rule.match(/love/gi))//(4) ['love', 'love', 'love', 'Love'] 4 tane love buldu

let  rule2 = "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge "
let regEx = /\d+/ 
// \d ben sayıları seçicem demektir.
// + en az bir veya daha fazla sayılar
//eğer sonunda g olursa her yerde arar.

console.log(rule2.match(regEx)) //tektek sayı döner
console.log(rule2.match(/\d+/g)) //bütün sayı döner


console.log(text.repeat(10))


/* CHECKING DATA TYPES - VERİ TİPLERİNİN DEĞİŞTİRİLMESİ

String to Int
tırnaklar içindeki sayılar da stringtir.
parseInt()
Number()
Plus sign(+) ile integera çevirebiliriz.
 */

let number = "10" //string
let numberInt = parseInt(number)
console.log(typeof(numberInt)) //number

let numberInt1 =Number(number) //number
console.log(typeof(numberInt1))

let numberInt2 = +number //number
console.log(typeof(numberInt2))


/*  

STRING TO FLOAT
parseFloat()
Number()
plus sign

*/

/* 

FLOAT TO INT
parseInt

*/

let sayi = 9.81      //9
console.log(parseInt(sayi))






  


  
  
