class BankAccount
{
private AccountNumber:number=121234;

getAccountNum():number
{
   return this.AccountNumber
}
setAccountNum(accnum:number)
{
  this.AccountNumber=accnum
}
}

const objBankAccount=new BankAccount();
console.log(objBankAccount.getAccountNum())
objBankAccount.setAccountNum(123456)
console.log(objBankAccount.getAccountNum())