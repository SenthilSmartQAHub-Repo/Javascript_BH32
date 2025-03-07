

//function without parameter
function add1()
{
   console.log("add method")
}

add1()


//function with parameter
function add(a,b)
{
   return a+b;
}

let value=add(10,20)

console.log(value)


//===================Default Parameter=========================================================

//function with parameter
function add(a,b=200)
{
   console.log(a,b)
}

add(10,20)

add(10)





