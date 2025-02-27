


// 1. if statement
// 2. if... else statement
// 3. if else if statement
// 4. Nested if statement

//==================== if statement==============================

//syntax

/*

if(condition)
{
    //code  ---> if block
}


*/
let num=1;

if(num>=5)
{
    console.log(`The number is greater than ${num}`)
}


//=======================if... else statement==================================================

/*

 if(condition)
 {
    //if block
 }
else
{
   //else block
}

*/


let age=18;

if(age>=18)
{
     console.log("Eligible for voting")
}
else{
    console.log("Not Eligible for voting")
}

//============ if else if statement========================


/*

if(condition)
{
       
  //if block

}
else if(condition)
{
  
//else if block

}
else if(condition)
{
  //else if block
}
else
{
  //else block
}



*/


let mynum=200;

if(mynum<=10)
{
    console.log(`Less than ${mynum}`)
}
else if(mynum==50)
{
    console.log(`Equal ${mynum}`)
}
else if(mynum==100)
{
    console.log(`Equal to ${mynum}`)
}
else
{
    console.log("all the condition got failed")
}

//========================= Nested if statement==========

/*

if(Condition)
{


     if(condition)
     {

     }

}

*/

let votingage=18;
let votingCard=true;
if(votingage>=18)
{

    console.log("Eligible for voting but need voting card")

   if(votingCard)
   {
     console.log("Allowed")
   }
   else{
    console.log("Not Allowed")
   }
   

}



