

//function declaration  without parameter
 function add1()
 {
   console.log("add method")

 }

 add1()


 //function declaration  with parameter
 function add2(a,b) // parameters
 {
  console.log(`a value is ${a} and b value is ${b}`)
 }

 add2(5) //aruguments   

 //output---a value is 5 and b value is undefined



 
 //function declaration  with parameter and return statement
 function add3(a,b) // parameters
 {
   return a+b;
 }

 const total=add3(5,6) //aruguments   
 console.log(total)


 console.log(add3(5,6))



  //function declaration  with default parameter.
  function add4(a,b=5) // parameters (b=5---> Default parameter)
  {
    console.log(`a value is ${a} and b value is ${b}`)
  }

  add4(34)
 

//Hoisting --> Function declaration will be moved to top of scope

greet()

function greet()
{
  console.log("Hello")
}

//background code
/*
function greet()
{
  console.log("Hello")
}

greet()
*/