
//===========Deep copy====Primitive===========================================

var age=25

var newage=age; //Deep copy--(sperate copy)

age++; //26


console.log(age)
console.log(newage)


//=============shallow copy===========Non-primitive========================

var person1={
      age:20
}

var person2=person1; //shallow copy(single copy)

console.log(person1)
console.log(person2)


person1.age=30;


console.log(person1)
console.log(person2)



var arr1=[1,7,4]

var arr2=arr1;

console.log(arr1)
console.log(arr2)
arr1.sort((a,b)=>a-b);
console.log(arr1)
console.log(arr2)

//=============Convert shallow copy to Deep copy=================


// Non-primiti
var person1={
    age:20
}

var person2={...person1}; //Deep copy

person1.age=40;


console.log(person1)
console.log(person2)


var arr1=[1,7,4]

var arr2=[...arr1]; //deep copy

console.log(arr1)

console.log(arr2)