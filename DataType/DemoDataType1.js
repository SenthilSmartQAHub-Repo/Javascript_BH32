
// Javascript Data Type-  Dynamic typed language

//1. Primitive Data Types
//2. Non-Primitive Data Types


//Primitive Data Types

//1. Number----> 8 bytes <= 2^53-1
//2. String  ---->Every character -> 2 bytes
//3. Boolean --> True/False --> 4 bytes
//4. Undefined ----> default value of variable --> 4 bytes
//5. Null ----> 4 bytes --> absence of value
//6. Symbol ----> 8 bytes --> unique value
//7. BigInt ----> 8 bytes > 2^53-1


let age=30;// Number
let price=10.5;// Number
let maxnumber1=9007199254740991; // <= 2^53-1
console.log(age,price,maxnumber1);

let BigIntNumber=9007199254740992n; // > 2^53-1
console.log(BigIntNumber)


let nameValue="John";//String
console.log(nameValue)

let isStudent=true;//Boolean
console.log(isStudent)

let a;//Undefined
console.log(a)

let b=null;//Null
console.log(b)
