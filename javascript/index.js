// console.log("hello world");
// ----------------------------------------------------------------------------------------
                              //     varaible or value
//  let _myName = "sumair khan"  true case
//  let 12_myName = "sumair khan" false case  
//  let my_Name = "sumair khan" true case    
//  let $my_Name = "sumair khan" true case    
//  console.log(_myName);

// --------------------------------------------------------------------------------------------
                              // Data Types
// total six data types
// undefined
// Boolean
// Number  koi bhi number show krwane k liye
// null
// String   koi bhi value show krwane k liye console may
// BigInt
// Symbol

// let myName = "Sumair Khan";
// console.log(myName)
// console.log(typeof(myName))  ye data type bta dega

// let age =  29;
// console.log(age);
// console.log(typeof(age));

// let age = true;
// console.log(age);

// --------------------------------
// data type practice
//   console.log(5 + "5");   concatenation ho gya
//   console.log(5 - "5");   bug
//   console.log("java " + "script");
//   console.log(" " + " ");
//   console.log("sumair" - "khan");  ans NaN means not a number
// true means 1 
// false means 0
// console.log(true + true); ans 2
// console.log(true + false); ans 1
// console.log(false + false); ans 0
// console.log(false + true); ans 1
// console.log(false - true);   ans -1
// --------------------------------------------------------------------------------------------------
                                 // Interview Question
                                 // Difference between null or undefined??
//-----koi kam nhi ati future m agr koi value add krni hoi toh null hata k value rakh do
//  let useLessValue = null  
// console.log(useLessValue);
// console.log(typeof(useLessValue))
// 2nd bug in javascript

//  --undefined
// let iAmStandBy;           
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));
// 3rd bug in javascript

// ----------------------------------------------------------------------------------------------------
                                          // Interview Question
// What is NaN
// Ans) NaN is a property of the global object.
//        In others words, it is a variable in global scope
//        the initial value of NaN is Not-a-Number

// let myPhoneNumber = 3132857876       koi bhi number ya data check krne k liye kam ata
// let myName = "908";
// let myNames = "sumair khan";
// console.log(isNaN(myPhoneNumber))
// console.log(isNaN(myName));
// if(myPhoneNumber){
//           console.log("please enter  valid phone number")
// }

// ------------------------------------------------------------------------------------------------
                    //   what is NaN?
// NaN is a property of global object.
// In other words, it is a varaible of global scope
// The initail value of NaN is "Not a Number"

// let myPhoneNumber = 987654321
// let myFullName = "summs"

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myFullName));
// if(isNaN(myFullName)){
//           console.log("please enter valid phone number")
// }

// -----------------------------------------------------------------------------------------------------
                    //    NaN practice
// NaN === NaN   ,ans= false
// Number.NaN ===NaN ,ans = false
// isNaN(NaN)  ,ans = true
// isNaN(Number.NaN) , ans = true
// Number.isNaN(NaN) , ans = true

// ------------------------------------------------------------------------------------------------------
                       //  EXPRESSION & OPERATORS
// example    5               (+)                  25
       // (operand)         operator            (operand)
// mixture of operand or operator is called expression

// 6 type of operators in javascript
// assignment operators
// arithmetic operators
// comparison operators
// logical operators
// string operators
// conditional (ternary) operators

// assignment operators koi bhi value assig krne k liye use hota hy
// arithmetic operators takes numerical values + - * /
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)

// console.log("your reminder" + 27%4);
// -------------------------------------------------------

// increment and decerement operators
// operators : x++ or ++x , x-- , --x
// postfix means k (x++) bad m increment hoga
// prefix means k (++x) phele increment hoga
// --------------------------------------------------------------
                       // comparison operators
// compare its operands and returns a logical value based on weather is true or false
// equal
// a = 5;
// b =2
// console.log(a == b);

// not equal
// a = 5;
// b =2
// console.log(a !== b);

// greater than
// a = 5;
// b =2
// console.log(a > b);

// greater than equal
// a = 5;
// b =2
// console.log(a >= b);

// less than
// a = 5;
// b =2
// console.log(a < b);

// less than equal
// a = 5;
// b =2
// console.log(a <= b);

// ----------------------------------------------
// logical operators
// logical opeators are typically used with boolean (logical) value

// logical AND && operators is k ander koi bhi ek value false hoi toh answer false ayega agr sari true hoi toh true anser ayega
// let a = 5
// let b = -10
// console.log(a > b && a < b) false 
// console.log(a > b && a > b) true
// --------------------------------------------------
// logical OR || operators is k ander koi ek bhi true ho gya toh answer true ayega 
// let a = 5
// let b = -10
// console.log(a > b || a < b || a == b)
// ------------------------------------------------------
// logical NOT ! operators is k ulte answer layega true ko alse or fase ko true kr dega
// let a = 5
// let b = -10
// console.log(!(a > b || a < b))
// --------------------------------------------------------------------------
                //string concatenation operators
// koi bhi do string ko jorne m kam ata hy
// console.log("hello" + "world") 
// console.log("hello" + " world") this is concatenation
// var myName = "sumair" 
// console.log(myName + " khan")
// ----------------------------------------------------------------------------------
                //chanllange time 4
// what will be the output of 3**3?
// what will be the output, when we add a number and a string?
// write a program to swap two numbers? 
// without using 3rd varaible

// sol 1
// exponentiation operators **
// console.log(3**3) its means 3*3*3=27
// console.log(9**2) its means 9*9

// sol 3
// let a = 5;
// let b = 10;

// output a=10 or b=5

// let c = b // c=10
// b = a // b=5
// a = c
// console.log(`the value of a is ${a}`)
// console.log(`the value of b is ${b}`)

// sol 4
// let a = 10;
// let b = 5;

// output a = 5 , b = 10

// a = a + b // a = 15
// b = a - b  // b= 10
// a = a - b // a = 5
// console.log(`the value of a is ${a}`)
// console.log(`the value of b is ${b}`)

// ------------------------------------------------------------------------------------
                // Interveiw Question
// what is the difference == or ===?
// == ye srif value ko match kr k true ya false ans deta hy
// === ye value or data type dono check krta hy
// var num1 = 5;
// var num2 = "5";
// console.log(num1 == num2); ans is true

// var num1 = 5;
// var num2 = "5";
// console.log(num1 === num2); ans is false

// ----------------------------------------------------------------------------------
                       // Control statement and loops
// if or else
// switch statement
// while loop
// do-while loop
//for loop
//for inloop
//for of loop
//conditional (ternary) operators 

// ---------------------------------------------------------------------------------
// agr condition true hoi toh if chale jaega
// agr condition false hoi toh else chale jaega

// let tomorrow = "sunny";

// if(tomorrow == "rain"){
//        console.log("toh beta kal ka off kr lena")
// }else{
//        console.log("sharafat se chle jana school")
// }

// ---------------------------------------------------------------------------------
                        //challange time
// write a program thats works out whether if a given year is a leap year or not?
//a normal year has 365 days, leap years have 366, with an extra day in feb

// let year = 2020
//debugger
//  if(year / 4 == 0){
//        if(year / 100 == 0){
//               if(year / 400 ==0){
//                      console.log(`the year ${year} is a leap year`)      
//               }else{

//                      console.log(`the year ${year} is not a leap year`)
//               }
//        }else{
//               console.log(`the year ${year} is a leap year`)
//        }
//  }else{
//        console.log(`the year ${year} is not a leap year`)
//  }
// -----------------------------------------------------------------------------
// what is the truly or falsy value in javascript
// we have total 5 falsy value in javascript 0,"",undefined,null,NaN is falsy value
// 0,"",undefined,null,NaN agr in m se koi ek bhi codition m put karoge toh else chale ga
// if(socre = 10){
//        console.log("we loss the game")
// }else{
//        console.log("we won the game")
// }

// ----------------------------------------------------------------------------------
// conditional ternary operator
// the conditional ternary operators is the only javascript operators
// that takes three operads

// let age = 18;
// if(age >= 18){
//        console.log("eligible to vote")
// }else{
//        console.log("not eligible to vote")
// }

// let age = 17;
// console.log((age >= 18)? "eligible" :  "not eligible")  short hand
// -------------------------------------------------------------------------------
//                        while loop
// while loop phle condition check krta hy phr agay jata hy
// let num = 0;
// // block scope means k agr condition true nhi hoi toh wo {} m jaega hi nhi
// while(num <= 10){
// console.log(num);
// num++
// }
// --------------------------------------------------------------------------------
                          // do while loop
// do while loop m condition bad m check krta hy
// let num = 0;
// do{
//        console.log(num);
//        num++
// }while(num <= 10)
// ----------------------------------------------------------------------------------
                          // for loop
// for(initializer; condition; iteration){
//        code to be execued
// }
// for loop bhi phle condition check krta hy phr work krta hy
// for(let num = 0; num<=5000; num++ ){
//        console.log(num)
// }
// -------------------------------------------------------------------------------
//                          challange time
// javascript program to print table for given number (8,9,12,15) using for loop?
// for(let x=1; x <=10; x++){
//        let tableOf = 8;
//        console.log(`${tableOf} * ${x} = ${tableOf * x} `);
// }
// for(let x=1; x <=10; x++){
//        let tableOf = 9;
//        console.log(`${tableOf} * ${x} = ${tableOf * x} `);
// }
// for(let x=1; x <=10; x++){
//        let tableOf = 12;
//        console.log(`${tableOf} * ${x} = ${tableOf * x} `);
// }
// for(let x=1; x <=10; x++){
//        let tableOf = 15;
//        console.log(`${tableOf} * ${x} = ${tableOf * x} `);
// }

// ------------------------------------------------------------------------------------
                          // functions in javascript
// function is a block of code
// function ko use krne se phle function ko define krna parta hy
// syntax of function
// function functionName()
//{
  //statement
//}

// let a = 10;
// let b = 10;
// let sum = a + b
// console.log(sum)  agr ishi tarha ka sum function se niklna hy toh wo aese niklega
// function sum(){
//        let a = 10, b = 10
//        let total = a + b
//        console.log(total)
// }
// sum()
// sum()
// --------------------------------------------------------------------------------
//       function parameter and function arguments   difference between
// function ko jb define karege or us k ander parameter pass krte hain like this function sum(a,b)
// or agr jb function call kr rahe ho us k ander argument pas krte hain  sum(20,30)

// function sum(a,b){
//        let total = a+b
//        console.log(total)
// }
// sum(20,30)
// sum(100,200) this is argument
// function ko reuse kr sakhte hain, code ko bs ek bar define krna hoga, or reuse kr sakhte hain hain bar bar
// -------------------------------------------------------------------------------
//                               function expressions
// argument m ek variable  pas krna hy
// function sum(a,b){
//               let total = a+b
//               console.log(total)
//        }
// let funExp = sum(20,30) this is function expression

// ------------------------------------------------------------------------------------
//     return keyword
// returns means jo bhi function m pas hoga wo browser pe show hoga
// function sum(a,b){
//        return total = a+b              
// }
// let funExp = sum(20,90)
// console.log(`the sum is ${funExp}`)
// ---------------------------------------------------------------------------------
                     // anonymous function
// esa function jis ka koi naam hi na ho
// let funExp = function(a,b){
//        return total = a+b
// }
// let sum = funExp(10,20);
// console.log(`the sum of a and b is ${sum}`)







































































































































































































 















     









































