
class Student12{

    readonly studentMark1=100;
     static readonly rollno=123;



}
const obj16=new Student12()

console.log(obj16.studentMark1)


console.log(Student12.rollno)

// Note - var let const can't be used in Global variable

//readonly  ---> used in Global variable(static or non-static)
//const ---> used in local variable