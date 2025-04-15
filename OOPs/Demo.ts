
// var, let const ---> inside method - localvariable
// Global variable-- > class level variable


class AccountNumber
{

myrollnumber:number=10 ; //Global variable
 
 sum(a:number,b:number)
 {
   
    return a+b
 }
}
const obj1=new AccountNumber()

console.log(obj1.myrollnumber)

console.log(obj1.sum(10,30))


// create class Calc
// variable a,b Global variable
// create add(a,b), sub(a,b) and return the value 
