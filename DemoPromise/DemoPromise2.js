let promise1=new Promise((resolved)=>
{
    setTimeout(()=>{resolved("Promise 1 resolved")},1000)  
})
let promise2=new Promise((resolved)=>
    {
        setTimeout(()=>{resolved("Promise2 resolved")},2000)  
    })
let promise3=new Promise((resolved,reject)=>{
    setTimeout(()=>{resolved("Promise3 resolved")},5000)  
        // var age=31
            
        // if(age==30)
        //     setTimeout(()=>{resolved("Promise3 resolved")},5000)  
        // else
        // reject("failed")
      })
//promise1.then((r=>console.log(r)))
Promise.all([promise1,promise2,promise3]).then(r=>console.log(r)).catch(r=>console.log(r))
//Promise.any([promise1,promise2,promise3]).then(r=>console.log(r)).catch(r=>console.log(r))
//Promise.allSettled([promise1,promise2,promise3]).then(r=>console.log(r)).catch(r=>console.log(r))

Promise.race([promise1,promise2,promise3]).then(r=>console.log(r)).catch(r=>console.log(r))