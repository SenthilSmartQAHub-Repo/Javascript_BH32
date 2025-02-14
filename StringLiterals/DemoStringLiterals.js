
//String Literals--->Group character or Squence of characters enclosed in quotes.

//1. Single Quotes ('')
//2. Double Quotes ("")
//3.Template Literals(` Backticks) - Introduced from ES6
     //1) Multiple lines of string
    // 2) String Interpolation-->   ${variable}

let subject1='javascript'

console.log(subject1)

let subject2="Typescript"

console.log(subject2)

let message1=`I am learning javascript`

console.log(message1)

let message2=`I am
             learning 
      javascript`

console.log(message2)

console.log(`I am learning ${subject1}`)
console.log(`I am learning ${message2}`)

let message3="She said, \"Hello\""; //  \"--->"  \ indicates Ecapesquence

console.log(message3)//

let message4='She said, \'Hello\''; 

console.log(message4)

let message5="She said, 'Hello'";
console.log(message5)

let message6='She said, "Hello"';
console.log(message6)