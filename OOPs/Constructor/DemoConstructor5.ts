

class Student1
{
    studentName:string
    studentRollNo:string
    IsPassed:boolean
    constructor(studentName:string,studentRollNo:string,IsPassed:boolean)
    {
       this.studentName=studentName
       this.studentRollNo=studentRollNo
       this.IsPassed=IsPassed
    }
}

const stuobj1=new Student1("john","B123",true)
const stuobj2=new Student1("paven","B124",true)

console.log(stuobj1.studentName,stuobj1.studentRollNo,stuobj1.IsPassed)

console.log(stuobj2.studentName,stuobj2.studentRollNo,stuobj2.IsPassed)