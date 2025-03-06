//String is a group of character

let message="Welcome";

//    W   e    l     c   o    m    e
//    0   1    2     3   4    5    6
//   -7   -6   -5   -4  -3   -2   -1

let ch=message.at(-2) // Postive index value and nagative value

console.log(ch);//m

const ch1=message.charAt(2);  // only postive index value

console.log(ch1);//l

let automationtool1="Playwright";
let automationtool2="selenium";

console.log(automationtool1.concat(automationtool2))
console.log(automationtool1+automationtool2)

let price="$12.00"
console.log(price.endsWith(".00"))
console.log(price.startsWith("$"))
console.log(price.includes("12"))

let myName='arun'
console.log(myName.charCodeAt(0))  //ASCII values--> A-Z(65 to 90) a-z(97 to 122)  0-9(48 to 57)

let nextchar=myName.charCodeAt(0)+1;//98

console.log(String.fromCharCode(nextchar))


//let myname="ABC" output: CDE

let empID="ISOS12S3"
//I S O S 1 2 S 3 
//0 1 2 3 4 5 6 7
console.log(empID.indexOf('S'));//first occurrence 1

console.log(empID.lastIndexOf('S'));// last occurrence 6

console.log(empID.indexOf('S',2));//first occurrence 1

let message1="This is javascript javascript javascript"

console.log(message1.length) //18


console.log(message1.repeat(10))


console.log(message1.replace('javascript','playwright'))

console.log(message1.replaceAll('javascript','playwright'))

let message2="This is javascript"

//This was javascript

console.log(message2.replace(" is"," was"))

let myprice='$10'

console.log(myprice.replace('$',''))

let value="Typescript"


// T    y   p    e    s   c    r   i   p     t
// 0    1   2     3   4   5    6   7    8    9
//-10  -9   -8   -7   -6  -5  -4  -3   -2   -1   
console.log(value.slice(0,4))
console.log(value.slice(4))
console.log(value.slice(-10,-6))
console.log(value.slice(-6))

console.log(value.substring(0,4))


console.log(value.toUpperCase())
console.log(value.toLowerCase())

//Primitve data type
let str1="Hello";
let str2=String("Hello!")
console.log(typeof str1);//string
console.log(typeof str2);//string

//Non-primitive data type--Object
let str3=new String("Helloo");
console.log(typeof str3)



