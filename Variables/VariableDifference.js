//1. using var
//2. using let
//3. using const


var accountNo=10;
let ammount=10000;
const Sno=123;
console.log(accountNo,ammount,Sno)

//================ 1 Difference===============================
// Re-Declaration-- only var
var studentRollNO=101;
console.log('student roll no is ',studentRollNO)//101
var studentRollNO=102;
console.log('student roll no is ',studentRollNO)//102

// Re-Declaration not allow-- let and const
// const studentMark=75;
// const studentMark=88;

// let studentMark=75;
// let studentMark=88;
//================ 2 Difference===============================
//Re-Initialization
var empSalary=10000;
    empSalary=20000;
    console.log('empsalary ',empSalary)
let empRollNo=501;
    empRollNo=502;
    console.log('empRollNo ',empRollNo)
//Re-Initialization not allowed 
const empAdminAccess="yes"
      empAdminAccess="NO"//TypeError: Assignment to constant variable.
      console.log('empAdminAccess ',empAdminAccess)

//================ 3 Difference===============================

// var - Hoisting
// let const - default Hoisting

//================ 4 Difference===============================

//var- is not scoped
//let and const - scoped