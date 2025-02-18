
//1. Arithemetic operators(+,-,*,/,%,++,_ _)
//2. Assignment operators (=, +=, -=,*=, /=,%=)
//3. Comparison operators(==,===,!=,>,<,>=,<=)
//4. Logical operators(&&, || , !)
//5. String operator(+)
//6. Ternar operator(?:)

//1. Arithemetic operators(+,-,*,/,%,++,_ _)

let sum=5+3;
console.log(sum)

let difference=10-2;
console.log(difference)

let product=2*2;
console.log(product)

let a=10/3;
console.log(a)

let reminder=10%3;
console.log(reminder)

//++ increment operator ---used to increment value by 1
//-- Decrement operator ---used to decrement value by 1

let count =10;

count++;//11

console.log(count) //11

count--;//10

console.log(count)

//2. Assignment operators (=, +=, -=,*=, /=,%=)

  let x=10;
  let y=2;
let z=x+y;
console.log(z)

x+=y // x=x+y

console.log(`x value is ${x}`)

x-=y // x=x-y
x*=y // x=x*y
x/=y // x=x/y
x%=y //x%=y

//3. Comparison operators(==,===,!=,>,<,>=,<=)
  //== Loose Equality operator
  //=== Strict Equality operator

console.log(5=='5')// only values are Equal
console.log(5==='5') // type and values are Equal
console.log(4!=3);//true
console.log(5>2);//true
console.log(5>=5);//true
console.log(5<7);//true
console.log(5<=5);//true


//4. Logical operators(&&, || , !)

//  && --> Logical AND
/*

  T     T   =>  T
  T     F   =>  F
  F     T   =>  F
  F     F   =>  F

*/
// || --> Logical OR
/*

  T     T   =>  T
  T     F   =>  T
  F     T   =>  T
  F     F   =>  F

*/

//  ! Logical NOT

//    T  ----> F
//    F  -----> T

console.log(5==5&&2>=2)
console.log(5==='5'&&2>=2)

console.log(5==5||2>=2)
console.log(5==='5'||2>=2)

console.log(!true) //false
console.log(!false)//true


//5. String operator(+)

let str1="I am ";
let str2="learning playwright"

console.log(str1+str2)
console.log("javascript"+123)


//==================Ternary Operator======================================



//  (condition)? truestement : falsestatement


let age=20;

// if(age>=18)
// {
//   console.log("Allowed for voting")
// }
// else{
//   console.log("Not Allowed for Voting")
// }


console.log((age>=18)? "Allowed for voting" : "Not Allowed for Voting")