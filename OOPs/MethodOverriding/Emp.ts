
// Method overriding-  devloping same method name and same parameter in super and sub class 
// Method overriding -  subclass method gets executed and super class method gets overridden
// super keyword used to call super class members(variables and methods)
class Emp1
{
    getSalary():number
    {
        return 10000;
    }
    
}
class TestingEng extends Emp1
{

    getSalary():number
    {
       console.log(super.getSalary())
        return 20000;
    }

}
const objtesting=new TestingEng();
console.log(objtesting.getSalary())

// const objemp1=new Emp1();
// console.log(objemp1.getSalary())


// Animal   and Dog 
// superclass and subclass -  walk():void
// create object for sub class and call the  walk() - subclass output