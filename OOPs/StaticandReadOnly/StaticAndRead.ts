

class Emp{


static company:string ="HCL" // static variable
 empId:number   //non-static variable or instance variable 
empName:string  //non-static variable or instance variable 

constructor(empId:number,empName:string)
{
    this.empId=empId
    this.empName=empName
}


}
console.log(Emp.company)

const empobj1=new Emp(123,"Arun")
const empobj2=new Emp(125,"Laxman")

console.log(empobj1.empId,empobj1.empName)
console.log(empobj2.empId,empobj2.empName)