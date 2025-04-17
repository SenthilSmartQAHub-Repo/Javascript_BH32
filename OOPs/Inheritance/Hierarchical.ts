

class Test1
{
//super
 x=10;

}
class Test2 extends Test1
{
    //sub
    y=20;
}
class Test3 extends  Test1
{
    //sub
    z=30
}

const objt1=new Test2()
console.log(objt1.x,objt1.y)

const objt2=new Test3()
console.log(objt2.x,objt2.z)
