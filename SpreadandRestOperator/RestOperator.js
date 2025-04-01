

// Rest operator(...)--> gather mulitple value into single array


//Rest operator in a function parameter
function add(...b)
{
  console.log(b.reduce((total,value)=>total+value,0))
}

add(10,30,40,20,50)


// Rest operator in destructing

const arr6=[10,20,40]

const [x,...y]=arr6;

console.log(x)

console.log(y)





