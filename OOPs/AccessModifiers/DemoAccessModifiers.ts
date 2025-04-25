
// Private, protected and public 

class Student11{

    protected isPassed:boolean=true
    private studentRollNumber:number=123
    #studentmark:number=100
    display():void{
        console.log(this.studentRollNumber)
        console.log(this.#studentmark)
    }
}
class Student22 extends Student11
{
    Access():void{
        console.log(this.isPassed)      
    }
}
const studentobj1=new Student11();



console.log((studentobj1 as any).studentRollNumber)