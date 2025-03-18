

// Object -----> Collection of properties, each property is key- value pair 

//Object can be created in 2 ways

//1. By uinsg OBject literal
//2. By using new Object

//==================================== By uinsg OBject literal====================================================
// syntax:
// ======

// type ObjectName = {

//     key:value,
//     key:value,
//     key:value
// }

var person={

    myName:'john',
    age:21,
    isEmployed:true
}

console.log(person)
console.log(person.myName)
console.log(person.age)
console.log(person.isEmployed)


//============================== By using new Object================================================================================


var car=new Object(); // new Object created but no properties

car.brand="Toyota"
car.model='corolla'
car.year=2020

console.log(car.brand)

console.log(car.model)

console.log(car.year)

//=================Accessing the object properties==========================================================
 

//1. Dot Notatation
//2. Bracket Notatation


let detail={
  //properties
    myName:'Paul',
    age:23
}

//using Dot Notatation
console.log(detail.myName)

//Bracket Notatation
console.log(detail["age"])

//==========only used Bracket Notatation======================================================================================
        
//  1. starts with Number
//  2. spaces
//  3. hypens

const person1={
    "firstn-myname":'john',
     "address 1":"chennai",
      1:"apple"
}

console.log(person1["address 1"])
console.log(person1["firstn-myname"])
console.log(person1[1])
console.log(person1["1"])


//===============Iterating the value==============================

var person={

    myName:'john',
    age:21,
    isEmployed:true
}

// for in

for(let key in person)
{
    console.log(key, person[key])
}

//using foreach loop
    //1. Object.keys(objectname)
    //2. Object.values(objectname)
    //3. Object.entries(objectname)


console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

Object.keys(person).forEach(i=>console.log(i))
Object.values(person).forEach(v=>console.log(v))
Object.entries(person).forEach(([i,v])=>console.log(i,v))


//=============add, update, delete properties=============================

console.log("====add, update, delete properties==========")

var person={

    myName:'john',
    age:21,
    isEmployed:true
}

console.log(person)

person.gender="male"  //adding property

console.log(person)


person.age=30  //modifing property

console.log(person)


delete  person.isEmployed  //delete property



console.log(person)

//========Object Destructing==================================



var person={
    myName:'john',
    age:21,
    isEmployed:true
}

const {myName,age,isEmployed}=person

console.log(myName)
console.log(age)
console.log(isEmployed)