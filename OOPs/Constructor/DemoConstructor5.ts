
class Student1
{
    studentName:string
    studentRollNo:string
    IsPassed:boolean
    constructor(a:string,b:string,c:boolean)
    {
       this.studentName=a
       this.studentRollNo=b
       this.IsPassed=c
    }
}

const stuobj1=new Student1("john","B123",true)
console.log(stuobj1.studentName,stuobj1.studentRollNo,stuobj1.IsPassed)