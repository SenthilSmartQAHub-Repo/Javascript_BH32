

// function add(a:number,b:number=10)
// {
//     return a+b;
// }

// console.log(add(10))




//optional parameter(?)

function add(a:number,b?:number|null,c:number=5)
{
   console.log(a,b,c)
}

add(10,null,343)