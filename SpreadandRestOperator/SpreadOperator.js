

// Spread Operator(...): expand an iterable value into individual value


//Using Spread Operator in array
const arr1=[1,2,3]
const arr2=[4,5,6]
    
const arr3=[...arr1,...arr2]

console.log(arr3)

//Using Spread Operator in Object

const obj1={
       myname: 'john',
       age:30
}

const obj2={
    job:"testing",
    location:"chennai"
}

const obj3={...obj1,...obj2}

console.log(obj3)


// converting string into array

let myname="paven" //string 

console.log([...myname]) //array