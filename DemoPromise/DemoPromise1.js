

let promise=new Promise((resolve,reject)=>{

     let age=30;
     if(age==30)
     {
        resolve("success")
     }
     else{
        reject("failed")
     }

})
promise.then(result=>console.log(result)).catch(error=>console.log(error))

