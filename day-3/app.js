

//booelans = true false

let isLightOn = true
let trueValue = 4 > 3

/* 
Truthly values
 pozitif ve negatif tüm sayılar sıfır hariç 
 "" boş string hariç tüm stringler
 booleansın truesi

 Falsy values
 0, On, null, undefined, NaN, booleansın falsesi,empty string

 undefined = eğer bi değişken atayıp bir değer tanımlamazsak undefined olur.
 */
 let nam 
 console.log(nam) //undefined

 /* ASSIGNMENT OPERATORS- ATAMA OPERATORLERİ
  
 =  atama operatörüdür.
 +=  x+=y x=x+y xin içine x ve ynin toplamını al
 -=  x-=y x=x-y 
 *=  x*=y x=x*y
 /=  x/=y x=x/y
 %=  x%=y x=x%y
 **= x**=y x=x**y

 a ya yeni değer atanıyor.
 */

 let a = 4
 let b = 2
 let c = 6
 let d = 3
 let e = "3"

console.log(a+=b)
console.log(a)

console.log(a-=b)
console.log(a*=b)
console.log(a)
console.log(a**=b)
console.log(c**=d)

/* 
ARITHMETIC OPERATORS

 */
console.log(2 + 3); // Addition
console.log(3 - 2); //subtraction
console.log(2 * 3); //Multiplication
console.log(3 / 2); //Division
console.log(3 % 2);//Modulus - finding remainder
console.log(3 ** 2); //Exponentiation 3 ** 2 == 3 * 3

/* COMPARISON OPERATORS - KARŞILAŞTIRMA OPERAÖRLERİ 

 == değerin eşitliğini kontrol eder
 === hem değer hem de veri türünün aynı olup olmamasına bakar 
 . !=  eşit değil mi eşit olan true döner eşit olmayan false döner.
 <
 >
 >=
 <=
 
 */

console.log(d == e) //t
console.log(d === e) //f
console.log (d != e) //f
console.log (d != a) //t

/* LOGICAL OPERATORS - MANTIKSAL OPERATORLER
 - && (ampersand) and - ve tüm koşullar doğru olmalı
 - || (pipe)   or - veya koşullardan sadece biri doğruysa true döner false olması için hepsi f olmalı
 - !(negation) değilse  olan bir değeri tersine çevirmek   */

 const check1 = 4 > 3 && 10 > 5 // t and t = true
 const check2 = 4 > 3 && 10 < 5 // t and f = false

 const check3 = 4 > 3 || 10 < 5 // t or f = true

 const check4 = 4 > 3 //true
 const check5 = !(4 > 3)  //false

/* INCREMENT OPERATOR - ARTTIRMA OPERATÖRÜ
Değişkende depolanan değeri arttırma operatörüdür. 

1- Pre-increment (önceden arttırma) */
 let count1 = 0
 console.log(++count1) //1 hemen değer 1 oldu
 console.log(count1) //1 

 // 2- Post-increment (sonradan arttırma)
let count2 = 0
console.log(count2++) //0 //1 sonraki kullanıma deger artacak burada işlem yaparken değer hala 0
console.log(count2) //1

/* DECREMENT OPERATOR -AZALTMA OPERATORU 
Aynı şeyler geçerli sadece -- kullanıyoruz.
*/

/* TERNARY OPERATORS - KOŞUL OPERATORU 
Koşul yazar.Tek satırlık koşullar gibi.
 -  ? olumlu koşulu : olumsuz koşulu yazarız
*/

let isRaining = true
isRaining
? console.log("You need a rain coat") //this
: console.log("No need for a rain coat")
isRaining = false

isRaining
? console.log("You need a rain coat")
: console.log("No need for a rain coat") //this

let number = 5
number > 0
? console.log(`${number} is a positive number`) //this
: console.log(`${number} is a negative number`)
number = -5

number > 0
? console.log(`${number} is a positive number`)
: console.log(`${number} is a negative number`) //this

/* OPERATOR PREDENCE 
Matematikteki işlem önceliği gibidir.*/

/* WINDOW METHODS
ALERT(): çok kullanmayız.
PROMPT():ilk değer zorunlu diğerleri opsiyonel. 2. parametre varsayılan bir değer(defaultvalue) verir.
confirm(): onay kutusu. tamam denirse işlem sonucu true döner iptal derse false döner 
*/


let sayi = prompt ("Bir sayı giriniz." , "6")
console.log(sayi)

let result = sayi * 2
console.log(result)
 
const agree = confirm("Are you sure like to delete?")
console.log(agree) 

let isDelete = confirm(" Silmek istediğinize emin misiniz?")
alert(
    isDelete
    ? "Silme İşlemi Başarılı" :"Silme İşlemi İptal Edildi"
);

/* DATE OBJECT 
bize bilgi verdiği için metodlar get ile başlar.
getFullYear() yyyy
getMonth()  0-11 month +1 yapmak gerekir
getDate()  1-31 
getDay()  0-6 
getHours()  0-23
getMinutes() 0-59
getSeconds() 0-59
getMilliSeconds()  0.999
getTime() seconds since jan 1, 1970 bu tarihten başlayan milisaniye
.now kullanılan zaman arasını mili saniye
0.GUN pazardır.
0.AY OCAKTIR

*/

const now = new Date() //bu bir objeyi başlatmadır. jsnin verdiği new ile yeni bir objeyi tanımlayacağız.bu da bazı metodları date gibi bir değişkene aktarmamızı sağlıyor.
console.log(now) //Sun Jun 25 2023 16:25:49 GMT+0300 (GMT+03:00)
console.log(now.getFullYear()) //2023
console.log(now.getHours()) //16
console.log(now.getDay()) //0 PAZAR
console.log(now.getMonth()) //5 HAZİRAN

const date = new Date()
let year =  date.getFullYear(),
            month = date.getMonth(),
            day = date.getDate(),
            hour = date.getHours(),
            minute = date.getMinutes(),
            second = date.getSeconds(),
            dayName= date.getDay()
    
let months =[
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
]

let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    
]



let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayName]}, ${hour}:${minute}:${second}`
console.log(humanReadableDate) 
//25 Haziran 2023, Pazar, 19:42:9


            








