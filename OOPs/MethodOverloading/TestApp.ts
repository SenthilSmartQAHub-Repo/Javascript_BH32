
// developing multiple methods with same method name with different parameter

class TestApp
{
    add(a:number,b:number):number
    add(a:string,b:string):string
    add(a:boolean):boolean
    
    add(a:any,b?:any):any
    {
        return a+b
    }
}
const Testappobj=new TestApp()
console.log(Testappobj.add(10,20))
console.log(Testappobj.add("welcome","to playwright class"))
console.log(Testappobj.add(true))

// method(any method) and no retunr value -  no parameter
//                      2 paramter

//                      3 paramter