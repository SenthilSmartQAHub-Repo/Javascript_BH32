export class BankAccount1
{
private AccountNumber:number=121234;

get getAccountNum():number
{
   return this.AccountNumber
}
set setAccountNum(accnum:number)
{
  this.AccountNumber=accnum
}
}

const objBankAccount1=new BankAccount1();
console.log(objBankAccount1.getAccountNum)
objBankAccount1.setAccountNum=123456
console.log(objBankAccount1.getAccountNum)







