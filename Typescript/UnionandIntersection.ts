


// Union type(|)
let id:number | string=123


function add(a:number | String | boolean)
{
    console.log(a)
}
add("welcome")
add(1000)
add(true)

//Intersection type(&)


type personinfo={age:number,address:string}
type empinfo={salary:number}

// let person12: personinfo={
//     age:20,
//     address:"chennai"
// }
// let Emp: empinfo={
//    salary:10000
// }

let combine: personinfo & empinfo={

  age:20,
  address:"chennai",
  salary:2000000

}


type Product {
    productName: string;
    price: number;
    }
    
    // Step 2: Create a new object and cast it to Product
    let product = new Object() as Product;