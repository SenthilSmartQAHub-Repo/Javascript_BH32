//Abstract class

abstract class Employee
{
    //abstract method
    abstract getHike1():void
    abstract getHike2():void

    getSalary():void{
        console.log("Emp salary is 10k")
    }
}
class Display extends Employee{

    getHike1():void{
        console.log("getHike1")
    }   
    getHike2():void{
        console.log("getHike2")
    }
 
}
//const emobj=new Employee()
const disobj=new Display()
disobj.getHike1()
disobj.getHike2()
disobj.getSalary()