let stuName="john"

//  j o h n 
//  0 1 2 3
// -4-3 -2 -1

let ch1=stuName.at(-3)  //index value and negative value
console.log(ch1)

let ch2=stuName.charAt(2)  //only index value
console.log(ch2)

let str1="aBcz"
     //   0123
//Convert character to AsCII value
let code=str1.charCodeAt(1) //unicode of the character   (A-Z - 65 to 90) (a-z 97 to 122) (0-9 48 to 57)
console.log(code)//66

let decode=String.fromCharCode(code) //B

console.log(decode)


console.log("Task")

 let str2="laxman"  //output=mbynbo

const char1=str2.charCodeAt(1)

console.log(String.fromCharCode(char1+1))


let str3="Playwright"
let str4="Automation"

let concatestring=str3.concat(str4)

console.log(concatestring)

console.log(str3+str4)

let str5="ManualTestingopening"

console.log(str5.endsWith("Testing"))
console.log(str5.startsWith("Manual"))
console.log(str5.includes("open"));//open
console.log(str5.length)


console.log(str5.repeat(5))

console.log(str5.replace("ing",""))

console.log(str5.replaceAll("ing",""))

console.log(str5.slice(6,13))

//ManualTestingopening
//           987654321
console.log(str5.slice(-14,-7)) //index value and negative value
console.log(str5.substring(6,13)) //only index value

console.log(str5.toUpperCase())
console.log(str5.toLowerCase())

let str6=" anil "

console.log(str6)
console.log(str6.length)
console.log(str6.trim().length) //Removes the leading and trailing white space
console.log(str6.trimStart())
console.log(str6.trimEnd())