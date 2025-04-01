
//1. Loose Equality == only value are equal or not (type corercion)
//2. Strict Eqality === type and value are equal or not  (not type corercion)

console.log('10'==10)  // true

console.log('10'===10) //false

console.log(true==1) //true type corerd to number 1

console.log(true===1);//false  no type corercion

console.log(null==undefined);//true

console.log(null===undefined); //false

console.log(undefined===undefined); //true


let str1="hello";//string type
let str2=new String("hello") //object type

console.log(str1===str2) // false


let str3=new String("hello")
let str4=new String("hello")

console.log(str3.valueOf()===str4.valueOf());//false


let arr1=[1,2,3]

let arr2=[1,2,3]

console.log(arr1.toString()===arr2.toString())


var obj1=[1,2,3]
var obj2=obj1; // shallow

console.log(obj1==obj2);;//true


var obj1=[1,2,3]
var obj2=[...obj1]; // deep

console.log(obj1==obj2);;//false