
// 1. for loop
// 2. while loop
// 3. do-while loop

/*

 for(inititalization;condition;update-increment/decrement)
 {
   code to execute
 
 }


 */

 // print the wecome 5 times

 let n=5;

 for(let i=1;i<=n;i++)
 {
    console.log("welcome",i)
  
 }

//====================break==========

 for(let i=1;i<=n;i++)
 {
    console.log("welcome",i)
    break;
 }
//===========print the 5 to 1========================

for(let i=5;i>=1;i--)
{
   console.log(i)
}
//========================================================

// while loop:
/* ==========

while(condition)
{

   //java stm

}
*/
let i=1;
while(i<=5)
{
   console.log(`i value is ${i}`)
   i++;
}


//  3. do while.........................


/*

do {

//statement

}while(condition);

*/

let k=1;
do{

   console.log(`k value is ${k}`)

  k++;
}
while(k<=5)