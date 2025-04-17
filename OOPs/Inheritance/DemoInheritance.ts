// member==> variables + methods

//Inheritance
class Demo1
{
   //superclass
    a:number=10
}
class Demo2 extends Demo1
{
    //sub class 
  b:number=20

}

const objDemo2=new Demo2(); //object for subclass
console.log(objDemo2.a, objDemo2.b)

const objDemo1=new Demo1(); 
console.log(objDemo1.a)

// Animal - super class (sound())
// Dog -- subclass   (bark())
//object- dog --> sound and bark function