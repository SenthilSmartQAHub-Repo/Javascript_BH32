
//Set-- unique values of any types

//Creating a set
const myset1=new Set([10,3,5,2,2,1,5,2,1])

console.log(myset1)

//==================================

const myset2=new Set()

myset2.add(5)
myset2.add(6)
myset2.add(7)
myset2.add(5)
console.log(myset2)
myset2.delete(5)
console.log(myset2)
console.log(myset2.has(6))

console.log(myset2.size)

myset2.clear();

console.log(myset2)


const myset3=new Set([10,3,5,2,2,1,5,2,1])

console.log(myset3.size)

//for of
for(const value of myset3)
{
    console.log(value)
}


myset3.forEach(v=>console.log(v))                                                                   


//common use cases

const number1=[1,2,2,4,3,2]  // remove the duplicate value from array -->output=1,2,4,3

const uniquevalues=new Set(number1)  // remove the duplicate values

const array1=[...uniquevalues] // converting set to array

console.log(array1)


//Set Operations;


//Union
const setA=new Set([1,2,4])
const setB=new Set([4,6,7])
const union=new Set([...setA,...setB])
console.log(union)

//Intersection
 
const arr=[...setA].filter(value=>setB.has(value))
const intersection = new Set(arr)
console.log(intersection)

//Difference
const arr1=[...setA].filter(value=>!setB.has(value))
const arr2=[...setB].filter(value=>!setA.has(value))
const Difference = new Set([...arr1,...arr2])
console.log(Difference)


const obj = {};
obj[myname1] = "Alice";
obj[age1] = 25;