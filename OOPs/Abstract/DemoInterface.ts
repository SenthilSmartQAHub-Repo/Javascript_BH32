//Abstract class

interface Employee1
{
    //abstract method
     getHike1():void
     getHike2():void
}
class Employee2 implements Employee1
{
    getHike1():void
    {
        console.log("getHike1")
    }
    getHike2():void
    {
        console.log("getHike2")
    }

}
const obj=new Employee2()
obj.getHike1()
obj.getHike2()
