
class Grandparent
{
    a:number=5
}
class parent1 extends Grandparent
{
   b:number=10
}
class child1 extends parent1
{
    c:number=15;
}

const objchild=new child1();

console.log(objchild.a,objchild.b,objchild.c)