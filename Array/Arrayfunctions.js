
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
