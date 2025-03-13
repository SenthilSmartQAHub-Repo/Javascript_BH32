
console.log(" adding and Removing.......................")

let car=["BMW","Audi","lyka,n"]

console.log(car.pop()) //Lykan --> removed

console.log(car)  //[ 'BMW', 'Audi' ]

console.log(car.push("mini")) //3

console.log(car) 


var arr1=[10,30,20,40]

console.log(arr1.shift()) // 10

console.log(arr1) //[ 30, 20, 40 ]


var automation=["playwright","selenium","QTP"]

console.log(automation.unshift("API"))

console.log(automation)



console.log("Soring and Reversing..............................................")


var automation1=["playwright","selenium","qtp","postMan"]


automation1.sort()

console.log(automation1)


automation1.reverse()


console.log(automation1)


var numValue=[120,100,3,40,2,10,20,30]

numValue.sort((a,b)=>a-b)

console.log(numValue)


console.log(" combining and  slicing array............................")


var array1=[10,30,20]
var array2=[30,20,50]

console.log(array1.concat(array2))

var array3=[ 10, 30, 20, 30, 20, 50 ]
          // 0   1   2   3  4    5
          // -6 -5  -4  -3 -2   -1

console.log(array3.slice(1,4+1))

console.log(array3.slice(-5,-2))

   
 array3.splice(2,3,...[5,4,3,6])  //Remove and add values in array
 console.log(array3)
  //startingindex, howmany value to be deleted, insert the values in array


console.log("Searching.................................................")



var automation=["playwright","selenium","qtp","postMan"]


console.log(automation.includes("selenium")) //true or false


let a=automation.find(value => value==="selenium")  //respective array value else undefined

console.log(a)

let i=automation.findIndex(value=>value==="selenium")  // array index of value else -1

console.log(i)


console.log("Spread Operator(...)========================================= ")

  let myarray=[20,10,5,6]

  let copyarray=[...myarray];

  copyarray[4]=30;

  console.log("My actual array ",myarray)

  console.log("My copy array " , copyarray)

  console.log("map() function, filter() function, reduce() function======================")

  var arrayvalue=[1,2,6,3,7,4,7,1,1] 

  const evenumber=arrayvalue.filter(value=>value%2===1)

  console.log(evenumber)


  var arrayvalue1=[1,2,6,3,7,4]  

  const doubled=arrayvalue1.map(value=>value+2)

  console.log(doubled)

  //sum of individual array 



  var arrayvalue2=[1,2,6,3,7,4]  

const totalvalue=arrayvalue2.reduce((totalvalue,value)=>totalvalue+value,0)

console.log(totalvalue)


//====================Come method=====================================================


var mynumbers=[10,25,30,20,5,3] // ? 30

   const output=mynumbers.some(value=>value>5)

   console.log(output)


   
var mynumbers=[10,25,30,20,5,6] // ? 30

const output1=mynumbers.every(value=>value>5)

console.log(output1)


var num=[2,5,3,6,7,3,1,3,1]
   // 2,6 =>3,7
    const value=num.filter(value=>value%2===0).map(value=>value+1).every(value=>value>5)

    console.log(value)


// var stumark=[60,40,60]
             //allmark add 5
             //get the total
             //divide by 100

  var stumark=[60,40,60]

   var total= stumark.map(value=>value+5).reduce((total,value)=>total+value,0)

   console.log(total/100)


   var mark=[10,8,20,30,1,20,8]

   console.log(mark.indexOf(20,3))
console

console.log(mark.lastIndexOf(8))
