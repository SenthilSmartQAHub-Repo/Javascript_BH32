// Map---> Collection Key-vavlue pair

const mymap=new Map([

    ["myName","Alice"],
    ["age",30],
    [true,"yes"]
])

console.log(mymap.keys())
console.log(mymap.values())
console.log(mymap)
console.log(mymap.clear())
console.log(mymap)
//==================================
const mymap1=new Map();
mymap1.set("age",30)
mymap1.set(10,20)

console.log(mymap1)

console.log(mymap1.get(10))


console.log(mymap1.has("age"))

mymap1.delete("age")

console.log(mymap1.size)

//Storing metadata
const mylogindetail=new Map();

mylogindetail.set("LoginInfo",{"username":"admin","password":"Mannger"})

console.log(mylogindetail.get("LoginInfo").username)