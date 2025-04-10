
// any – Disables type checking, allowing any value.
// unknown – Like any, but requires type checking before use.
// void – Used for functions that return nothing.
// null – Represents an explicitly empty value.
// undefined – Represents an uninitialized value.
// never Type – Represents a function that never returns (e.g., throws an error).

let value1:any="welcome";
let value2:unknown="welcome";

console.log(value1.toUpperCase())

//Type Assertion (as keyword or <> )
console.log((value2 as string).toUpperCase())
console.log((<string>value2).toUpperCase())

//TypeChecking
if(typeof value2=="string")
{
    console.log(value2.toUpperCase())
}


function sum():void
{
  console.log("sum method")
}
sum()

let value3:null=null;
let value4:undefined;

// function add():never
// { 
//     throw console.error("this is method not in use");
// }

// add()
