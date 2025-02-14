
//Hoisting-- variable declaration will be moved to the top of variable scope

console.log(userName)
var userName; //variable declaration
userName="Ram"
console.log(userName)

//==================convert===============

var userName;
console.log(userName);//undefined
userName="Ram"
console.log(userName) ;//Ram