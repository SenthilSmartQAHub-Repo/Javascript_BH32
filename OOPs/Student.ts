

class Student
{

 stumark1:number=100; // Global variable
 stumark2:number=70; // Global variable

 addmark()
 {
    let total=this.stumark1+this.stumark2
   console.log(total)
 }

}

const stuobj=new Student()

stuobj.addmark()