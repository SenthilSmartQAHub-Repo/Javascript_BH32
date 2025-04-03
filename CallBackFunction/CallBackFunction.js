
function add()
{
  console.log("add function")
}
function sub()
{
  console.log("sub function")
}
//Higher-order function
function greet(callback1,callback2)
{
    console.log("greet function")
    callback1()
    callback2()
}
greet(add,sub)
