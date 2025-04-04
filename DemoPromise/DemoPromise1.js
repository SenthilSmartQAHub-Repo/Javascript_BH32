

let promise=new Promise((resolve,reject)=>{

     let age=31;
     if(age==30)
     {
        resolve("success")
     }
     else{
        reject("failed")
     }

})
promise.then(result=>console.log(result)).catch(error=>console.log(error)).finally(r1=>console.log("Promise executed"))

//then()--> promise resolved
//catch()---> Promise rejected
//finally() -->promise resolved / Promise rejected




let promise1=new Promise((resolved)=>
   {
       setTimeout(()=>{resolved("Promise 1 resolved")},10000)  
   })
  
   //async function
   async function doCall()
   {
       console.log(await promise1)

   }
   doCall()

   //await -- wait promise will return suceess or failed