

var fruits=["Apple","Banana","cherry"]
        
//total 3 =  0        1       2


// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])


console.log("traditional for loop")
for(let i=0;i<fruits.length;i++) //0,1,2
{
    console.log(fruits[i])
}


console.log("for in loop")

for(let i in fruits)
{
    console.log(fruits[i])
}



console.log("for of loop")

for(let i of fruits)
{
        console.log(i)
 }


 console.log("forEach loop")

 fruits.forEach((value,index)=>{console.log(value,index)});

 