//let and const ,   destructuring ,   temple literals ,  object properties
//defualts arugument ,   arrow function ,  rest operators , spread operators

// let se koi bhi update ho jati hy or 
// const se ek hi varaible rehta h
// ---------------------------------------------
                  //defualts arugument
//defualts argument se agr ek hi argument pas karo toh bhi chalta hy
// function mult(a,b = 10){
//           return a*b
// }
// console.log(mult(5));
// ----------------------------------------------------------
//                temple literals
// for(let x = 1; x<=10; x++){
//           let typeOf = 12
//           console.log(`${typeOf} * ${x} = ${typeOf * x} `)
// }
// ----------------------------------------------------------------------
//                              arrow function
// const sum = () =>{
//         return  `the sum of ${(a=5)+(b=5)}`
// }
// console.log(sum())
// ----------------------------
// const sum = () =>
//             `the sum of ${(a=5)+(b=5)}`
// console.log(sum())
// ----------------------------------------------------------------------
//                          arrays 
//ek single varaible m multiple data store krna ho toh arrays use krte hain
//or is array k ander sari data type dal sakhte ho
 // lower index, lower boundary                 upper index, lower boundary
// let array = ["sumair", "ammad",  "ubaid", ]
// console.log(array[2])
// -------------------------------------------------------------------------
//               traversal array
//traversal means array m se koi bhi element niklna ya navigate krwana
// let array = ["sumair", "ammad",  "ubaid","sums", "maddy",  "ubii", ]
// console.log(array[5])
// console.log(array.length) agr arrays k element malon krne ho toh ye use karenge
// ----------------------------------------------------------------------
// we use for loop to navigate
// agr arrys m se saray elements ek sath show krwane ho toh for loop
// let array = ["sumair", "ammad",  "ubaid","sums", "maddy",  "ubii", ]
// for(let i=0; i<array.length; i++){
//           console.log(array[i]);
// }
// ------------------------------------------------------------------------
// for in loop jo hy wo index number provide krta hy

// let array = ["sumair", "ammad",  "ubaid","sums", "maddy",  "ubii", ]
// for(let element in array){
//           console.log(element);
// }
// ----------------------------------------------------------------
// for of loop se array k elements btata hy
// let array = ["sumair", "ammad",  "ubaid","sums", "maddy",  "ubii", ]
// for(let element of array){
//           console.log(element);
// }
// --------------------------------------------------------------------
// forEach se element index or array ye teeno ek sath gate kr sakhte hain
//forEach m break use nhi kr sakhte hain
// let array = ["sumair", "ammad",  "ubaid","sums", "maddy",  "ubii", ]
//           traditional function
// array.forEach(function(element,index,array){
//           console.log(element, index , array);
// })
//           arrow function
// let array = ["sumair", "ammad",  "ubaid","sums", "maddy",  "ubii", ]
// array.forEach((element,index,array) =>{
//           console.log(element, index , array);
// })
// -------------------------------------------------------------------------
//                      searching and filter in a array
//array.prototype.indexOf() 
//Returns the first (least) index of an element within the array equal
//to an element, or -1 if none is found.It search the element from the 0th
// index Number
//search ka method koi bhi cheez ko search krne k liye use hota hy jese koi bhi website pr apne kuch search kiya toh wo search  k method se ayega
//filter ka method koi bhi cheez filter krne k liye use hota hy agr kuch bhi filter krna ho website ho jaega
//--------------------------------------------------------------------------------------------
//                           INDEXOF METHODS
//forward kam krta hy
// let myFavt = ["AMMAD","UBAID","SHARUKH","SALMAM","VIRAT","SHARUKH"]
// // console.log(myFavt.indexOf("SHARUKH",3));  //5
// console.log(myFavt.indexOf("SALMAM",4));  //-1 is m salman se agy dekkha ga agr ek or salman hota toh index no show krdega warna -1
//--------------------------------------------------------------------------------------------
//                 LASTINDEXOF METHOD
//lastIndexOf ye backward kam krta hy
// let myFavt = ["MARY","ALICIA","NANCY","TOKYO","MARIA"]
// console.log(myFavt.lastIndexOf("TOKYO"));
//------------------------------------------------------------------------------------------
//                         INCULEDS METHOD
//INCLUDES KA MTLB YE HY AGR PORAY ARRAY M WO ELEMENT NHI HOWA TA TOH FALSE AGR HOWA TOH TRUE VALUE AYEGI
// let myFavt = ["BARLIN","TOKYO","PROFESSOR","MARLIN","TOKYO"]
// console.log(myFavt.includes("TOKYO",2)); //TRUE IS K ANDER BHI FORWARD SEARCH KAREGA
// console.log(myFavt.includes("BARLIn")); //FALSE
//-----------------------------------------------------------------------------------------
//                           FIND METHOD
// const prices = [100,200,250,300,330,400]
// let findEle = prices.find((element,index,array)=>{
//     return element < 300
// })
// console.log(findEle);  //srif 100 return karega

// const prices = [100,200,250,300,330,400]
// console.log(prices.find((element)=> element < 200)); //100 ayega
// console.log(prices.find((element)=> element < 20)); //undefine ayega
//-------------------------------------------------------------------------------------------
//             FINDINDEX JUST INDEX NO BTATA HY
// const prices = [100,200,250,300,330,400]
// console.log(prices.findIndex((element)=> element < 400)); //INDEX NUMBER DETA HY 
//findIndex or find agr condition verify na ho toh -1 return krta hy
//----------------------------------------------------------------------------------------
// //      filter ek new array create kr k deta hy or jo bhi apko value chaiye hoti hy wo,lakr deta hy
// let prices = [100,200,250,300,350,400]
// let newPrices = prices.filter((element,index)=>{
//       return element < 300
// })
// console.log(newPrices);
//----------------------------------------------------------------------------------------
// sort method se array k ander jitni bhi element honge un sb ko accending order m convert kr dega like alphabat time sb se phle A phr B phr C ese hi so on

// let months = ["jan","feb","march","april","may"]
// console.log(months.sort());

// //sort methid nmber k aner kam nhi krta

// let number = [100,200,1,9,4]
// console.log(number.sort());
// ------------------------------------------------------------------------------------
//           perform  (CRUD) create read update delete
// push se arrays k end m ek new element add ho jata hy
// const animals = ["cats","loin","corcodail"]
// animals.push("dogs")
// console.log(animals);
// ------------------------------------------------------------------------------------
//unshift se arrays k start m ek new element add ho jata hy
// const animals = ["cats", "loin", "corcodail"]
// animals.unshift("dogs")
// console.log(animals);
// ------------------------------------------------------------------------
//pop se array ka koi bhi element remove kr deta hy or jo end m element hoga
//usko return kr dega means consle m show karega
// const fruits = ["banana", "grapes", "mango", "orange" ]
// fruits.pop()
// console.log(fruits);
// console.log(fruits.pop());
// --------------------------------------------------------------------------
//shift se array ka first element remove ho jaega usko return kr dega means consle m show karega
// const fruits = ["banana", "grapes", "mango", "orange" ]
// fruits.shift()
// console.log(fruits);
// ------------------------------------------------------------------------------
//splice se array ka koi bhi beach ka element remove or add ho jata hy
// const months = ["jan", "feb","mar","apr"]                ADD DATA
// const newMonths = months.splice(months.length,0,"dec")
// console.log(months);

// const months = ["jan", "feb","mar","apr"]        //DELETE DATA        
      //index,kitene delete krne, jo update krna wo string m
// const newMonths = months.splice(0,1,1, "JAN","FEB")
// console.log(months);
// -----------------------------------------------------------------------
//indexOf ka ye hy k pora array m jitne elements hain un sb k index get karega
//agr indexOf ko data nhi mila toh wo -1 return krta hy isliye -1 likha hy 
// const months = ["jan", "feb", "mar", "apr", "may"]
// const indexOfMonth = months.indexOf("may")
// if(!indexOfMonth -1){
//     const updateMonth = months.splice(indexOfMonth,1,"MAY")
//     console.log(months);
// }else{
//       console.log("not found")
// }
// ------------------------------------------------------------------------------
//beach m se agr kuch delete krna hy toh 
// const months = ["jan", "feb", "mar", "apr", "may"]
// const indexOfMonth = months.indexOf("mar")
// if(!indexOfMonth -1){
//     const updateMonth = months.splice(indexOfMonth,2)
//     console.log(months);
// }else{
//       console.log("not found")
// }
// ----------------------------------------------------------------------------
//                      map and reduce method
//array.prototype.map()
//map api call krne k kam ata hy map ek new array bana k deta hy
//let newArray = arr.map(callback(currentValue[,index[,array]]){
// return element for newArray, after executing something 
// }[, thisArg]);
// map jb chalta hy toh true ya false ans deta hy

// const arr = ["1","2","3","4","5"]
// // num > 3
// let newArr = arr.map((curEle,index,array)=>{
//       return curEle > 3;
// })
// console.log(arr);
// console.log(newArr)
// const arr = ["1","2","3","4","5"]
// let newArr = arr.map((curEle,index,array)=>{
//       return `the value is ${curEle} Index No ${index} belongs to ${array}`
// })
// console.log(newArr)            they show me complete new array

// const arr1 = ["1","2","3","4","5"]
// let newArr1 = arr1.forEach((curEle,index,array)=>{
//       return `the value is ${curEle} Index No ${index} belongs to ${array}`
// })
// console.log(newArr1)                they show me undefine
// ------------------------------------------------------------------------
//                  challenge time
//q1: find the squre root of each element in an array?
//q2: multiply each element by 2 and return only those element which are greater than 10?
//sol 1:
// let arr = ["9", "25", "36", "49", "64"]
// let sqr = arr.map((curEle)=> Math.sqrt(curEle)
// )
// console.log(sqr)


// let arr = ["9", "25"]
// let sqr = arr.map((curElm)=> Math.sqrt(curElm)) 
// console.log(sqr);
// -----------------------------------------------------------------------
// chaining effect ya style means k ek method k sath dosra method use kr sakhte hain

// let arr = [2, 3, 4, 5, 6, 7, 8, 9]
// let arr2 = arr.map((curEle)=>{
//       return curEle * 2
// }).filter((curEle)=>{
//     return  curEle > 10
// })
// console.log(arr2);
// ---------------------------------------------------------------------------
//            reduce method 
//array ko convert krta hy 3d ya 2d single dimensional array m or agr koi bhi single value chahiye ho toh reduce use karenge example % sum average
//the reduce method executes a reducer function (that you provide) on each element of array, resulting a single output value.
// they takes 4 arguments 
//accumulator as an argument means ek sath jama krna
//current value
//current index
//source array
// let arr = [5,6,7]
// let newArr = arr.reduce((accumulator,curEle)=>{
//       return accumulator += cur
// },7)
// 
//   console.log(newArr)

// let arr =  [5,5,6]
// let newArr = arr.reduce((accumulator,curElm)=>{
//      return accumulator *= curElm
// } )
// console.log(newArr);
// -------------------------------------------------------------------------------
//                   fatten an array
//coverting 2d or 3d array ix`n one dimensional
// const arr = [
//       ["zone-1","zone-2"],
//       ["zone-3", "zone-4"],
//       ["zone-4", "zone-6"],
//       ["zone-7", ["zone-7", "zone-8"]]
// ]

// let fatarr = arr.reduce((accum,curval)=>{
//       return accum.concat(curval)

// })
// console.log(fatarr);
// ---------------------------------------------------------------------------
//                       string in javascript
//escape character
//finding a string in a string
//searching for a string in a string
//extracting string parts
//replacing string content
//extracting string character
//other useful methods
//javascript m jo quotes likhte hain isko "" kehte hain agr wo khali bhi kyun na ho phr bhi string hota hy
//string data store krne k kam ata hy
//" " ya ' ' quotes kuch bhi use kr sakhte hain
//string ek daata type hy or ye primitive hy

// ----------------------------------------------------------------------------
// how to find lenght of a string
//string.prototype.lenght
//reflect the lenght of the string

// let myName = 'sumair khan'
// console.log(myName.length);
// -----------------------------------------------------------------------------
//                     escape character
//iska kam ye hy k apko string k ander inverted commas use krne ho toh / ka use karenge
// iska mtlb bach bach k niklna
// let sentences = "hello  how are 'you' doing today?"
// console.log(sentences);
// let sentences = 'hello  how are "you" doing today?'
// console.log(sentences);
// ------------------------------------------------------------------------------
      //    finding a string in a string
//string.prototype.indexOf(searchValue[,fromIndex])
//string k ander se string niklna
//koi bhi words find kr sakhte hain k wo kitne no per rakha howa including space
// let myBioData = 'I am from Karachi';
// console.log(myBioData.indexOf("from", 5));
// --------------------------------------------------------------------------
//   find a search of any string
//search() method ka use kr k koi bhi value find kr sakhte hain
//word kon se no per rakha howa hy lakr de deta hy
// const myBioData = 'i am software engineer'
// let myNew = myBioData.search("software")
// console.log(myNew);
// ----------------------------------------------------------------------------
//  Extracting s string
//only 3 methods
//slice(start, end)
//substring(start, end)
//substr(start, lenght)
//             slice 
//slice means k ap k mango k 4 hisay karo is m se jo ek hissa hoga wo slice hoga
// ye do parameter letahy start position or end position
// let str = "apple, banana, kiwi, mango"
// let newSlice = str.slice(0, 4)
// let newSlice = str.slice(7, -2)

// console.log(newSlice);

//the slice method select the element starting at the given start argument,and ends at, but does not include, the given end argument
// NOTE!
//the original array will not be changed
// -------------------------------------------------------------------------
 //               challange time
 //dsiplay a 280 character of a string like the one used in twitter?
//  let myTwitte = "Lorem, iipsum dolor sit amet consectetur adipisicing eli Officiaipsum dolor sit amet consectetur adipisicing eli Officiaipsum dolor sit amet consectetur adipisicing eli Officiaipsum dolor sit amet consectetur adipisicing eli Officiapsum dolor sit amet consectetur adipisicing eli Officia, perspiciatis temporibus ea voluptatem obcaecati sunt alias quas molestiae unde eveniet non ratione laboriosam maiores maxime consequatur! Corrupti autem aspernatur mollitia."
// let myActualTwitte = myTwitte.slice(0,280)
//  console.log(myActualTwitte.length);
//  console.log(myActualTwitte);
//  ----------------------------------------------------------------------------
//             substring method
//same slice ki tarha kam krta hy bs negative value nhi leta

// let str = "apple , banana, gava" 
// let res = str.substring(0, 4)
// let res1 = str.substring(9, -4)
// console.log(res1);
// ---------------------------------------------------------------------------
//               substr method
//same slice ki taraha hi kam krta hy
//the difference is that the second parameter specifies the lenght of the extracted part 
// let str = "apple , banana, gava" 
// let res = str.substr(-4)
// // let res1 = str.substring(9, -4)
// console.log(res);
// -----------------------------------------------------------------------------
//             challange time
//replaceing string content
// syntax : string.prototype.replace(searchFor, replaceWith)
//koi bhi ek purani cheez ko kisi bhi new cheez m replace kr dena
//purnani cheez ko same rakhta hy or new data change kr deta hy
//jis ko bhi replace kr rahe honge agr wo do bar howa string m toh sb se phla wala change ho jaega
//1st argument m wohi cheez deni hy jo apko change kwana hoga same likhna jese sumair krwaya hy
// let data = "hello my self sumair khan im from karachi sumair"
// let replaceData = data.replace("sumair","SUMAIR")
// console.log(replaceData);
// ------------------------------------------------------------------------------
//                Extracting String Character
//how to extract string character
// charAt(position) kon sa character kis index no per rakha hy wo btata hy
//charCodeAt(position) means k kisi poition koi bhi chara ho uski position kia hy 
//is k ander jo bhi likho wo hame intiger hi dega (0 and 65535)
//property accsee[ ] 
// let str = "HELLO WROLD"
// console.log(str[2])

// let str = "HELLO WROLD"
// console.log(str.charAt(2))
// ----------------------------------------------------------------------------
//       charCodeAt()
//last char ka unicode nikl k do
// let str = "sumair khan";
// let newstr = str.length -1;
// console.log(str.charCodeAt(newstr))
// -------------------------------------------------------------------------------
// let myName = "Sumair Khan";
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());
// ----------------------------------------------------------------------------
//                  concat method
// do words ya array ko milane k liye concat use hota hy
// let fName = "sumair"
// let lName = "khan"
// console.log(fName.concat(" ", lName));
// ----------------------------------------------------------------------------
//          trim() method
//trim() se koi bhi cheez ki whitespace ktm kr deta hy agr side se extra space hybtoh ktm kr deta hy
// let myName = "         sumair        khan            "
// console.log(myName.trim());
// -----------------------------------------------------------------------------
//converting a string in array
// split method se string array m convert ho jata hy
// let txt = "a, b, | c,d,e"; //string
// console.log(txt.split(" , ")); //split on commas
// console.log(txt.split("  ")); //split on spaces
// console.log(txt.split(" | ")); //split on pipe
// --------------------------------------------------------------------------
//date and time in javascript
//javascript data objects represent a single moment in a time in a plateform-independent format date object contains a number that represent miliseconds since 01 jan 1970
//date object create krne k 4 tareeky hain
//new Date()
//max 7 argument de sakhte hain
//new Date(year, month, day, hours, minutes, second, millisecond)
//we cannot avoid month sectin
//new Date (miliseconds)
//new date(date string)

//new date object create krne k liye new date( ) constructor.
// let curDate = new Date();
// console.log(new Date().toLocaleDateString()); //current date ajaegi
// console.log(new Date().toLocaleTimeString());//current time ajaega

//date.now isse ye pta lgta hy k 1 jan 1970 se ab tk kitna milli sec guzar chuka hy
// console.log(Date.now()); ans 1714611801509 itne milisec guzar chuky hain
// -------------------------------------------------------------------------
// new Date(year , month, ...)
//javascript contains months 0 to 11
//0 is jan 11 is dec
// let d = new Date(2024, 4 ,2 , 6, 12, 30 )
// console.log(d.toLocaleString()); ans 5/2/2024, 6:12:30 AM
// ----------------------------------------------------------------------------
//isse apka current date and time ajaega
// let d = new Date(1714611801509)
// console.log(d.toLocaleString());
// --------------------------------------------------------------------------
//                date methods
// how to get individual date
// const curDate = new Date();
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()) // 0 - 11  jan - dec
// console.log(curDate.getDate())
// console.log(curDate.getDay())
// console.log(curDate.getHours())
// console.log(curDate.getMinutes)
// console.log(curDate.getSeconds)

// how to set individual date
// means k sb kuch khud se set krna
//  const curDate = new Date();
//  console.log(curDate.setFullYear(2024, 5, 4));
//  console.log(curDate.setFullYear(2024))
//  let setMonth = curDate.setMonth(5)
//  console.log(setMonth)
// -------------------------------------------------------------------
//  how to get individual time
// const curTime = new Date();

// console.log(curTime.getTime());
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSecond());
// console.log(curTime.getMillisecond());
// -----------------------------------------------------------------------
//                      Math Object in javascript
// koi bhi mathematical tasks ya number ka tasks perform krna ho toh Math object ka use krte hain
//math ka object ja bhi banega toh M capital hoga
//math.pi ye ek property hy
// console.log(Math.PI);
//-------------------------------------------------------------------------------------
//                           math.round()
//iska kam ye hota hy koi bhi value 4 se niche ayi toh round off kr deta hy
// let ramdon = 3.499;
// console.log(Math.round(ramdon));                // output  3

// let ramdon = 3.599;
// console.log(Math.round(ramdon));  // 4
//-------------------------------------------------------------------------------------
//                        square root
//is se koi bhi value ka square root nikl jata hy
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(49));
// console.log(Math.sqrt(64));
//---------------------------------------------------------------------
//                        math.abs()
//isko kehte hain absolute value koi bhi value agr negative arahi hogi usko positive m convert kr dega
// console.log(Math.abs(-19876)); 
// console.log(Math.abs(-1234)); 
// console.log(Math.abs(-76)); 
// console.log(Math.abs(-988)); 
// console.log(Math.abs(2-6)); //   4
// --------------------------------------------------------------------------
//             math.ceil()
//ceil means k chaat. ceil means k 99.1 agr doudt k bad kuch bhi likh dia toh wo round off kr dega
// console.log(Math.ceil(23.1));
// console.log(Math.ceil(99.001121)); //100
// ----------------------------------------------------------------------
//              math.floor()
//floor ka ye kam hy agr koi bhi value point k bd agy kuch bhi ajae toh wo same rakhega
// console.log(Math.floor(25.5));  //25
// console.log(Math.floor(25.6));  //25
// console.log(Math.floor(25.9));  //25
// -------------------------------------------------------------------
//           math.min()
//min means k agr apko poray console se min value chahiye ho toh dega hy nikl k
// console.log(Math.min(299, 398, 1,  9877,  -1));      // -1
// ----------------------------------------------------------------------
      //     math.max()
// max means k agr apko poray console se max value chahiye ho toh dega hy nikl k
// console.log(Math.max(299, 398, 1,  9877,  -1));     // 9877      
// ---------------------------------------------------------------------
//           math.random() 
//random means k agr apne num gussing game banai hy toh koi bhi random num select krna ho toh random ka use karenge
// console.log(Math.floor(Math.random()*10)); har bar diff output milega
// -------------------------------------------------------------------
//           math.trunc()
//math.trunc means k decimal se phle jo bhi no hoga wo return kr dega bhaly decimal k bd kuch bhi ho
// console.log(Math.trunc(29.4));        //29
// console.log(Math.trunc(-99.8));      //-99
// ------------------------------------------------------------------------
// what is the diff between trunc,floor,ceil
//ceil means k chaat. ceil means k 99.1 agr doudt k bad kuch bhi likh dia toh wo round off kr dega.
//floor ka ye kam hy agr koi bhi value point k bd agy kuch bhi ajae toh wo same rakhega
//math.trunc means k decimal se phle jo bhi no hoga wo return kr dega bhaly decimal k bd kuch bhi ho
// -----------------------------------------------------------------------
//                 DOM in Javscript
// Document Object Model // DOM     browser Order Mark  // BOM
//window vs document
//DOM vs BOM
//DOM navigation
//searching and getting elements reference
// --------------------------------------------------------
//                window vs document
//window main container hy isko hum kehte hain global object or agr koi bhi operation perform krna ho toh related entire browser window object ka use lete hain
//document means child of window object means k document m jo bhi hoga wo window m lazmi hoga
//-------------------------------------------------------------------
// DOM is the document object model which deals with the document the HTML elements.
// html k element k related color change krna ho ya kuch bhi krna ho toh DOM use karenge
// BOM is the browser object model which deals with browser components aside from the document like history location screen and navigation.
//window se related kuch bhi kam krna ho toh BOM use karenge
// --------------------------------------------------------------------------
// is k agay ka thora kam html kifile m kiya hy
// 4 tareeky hote hain html javascript se change krne k no 1 document.getElementById('yaha id ka naam ayega)
//.innerHTML = " "; jo hy wo ek property hy jis ka kaam phle wala jo bhi html m likha hoga usko chage kr dega
// with the help of reference bhi change kr sakhte hain like this demochange.innerHTML
// -----------------------------------------------------------------------
//agr kahi class di ho toh kis tarha change karenge
//document.getElementsByClassName("para") is tarah se change hoga
//document.getElementsByTagName("p") is tarah pora tag find kr sakhte hain
//document.getElementsByName("gender") is tarah gender wagera find kr sakhte hain
// ------------------------------------------------------------------------
// document.querySelector('#heading').innerHTML = "I changed again" ye id k liye hy iska jo bhi first element hoga uska data change kr dega
// document.querySelector('.heading').innerHTML = "I changed again" ye class k liye hy
// ------------------------------------------------------------------
//what is the difference between document.getElementById and document.querySelector?
// document.getElementById ye reference dekr gate ho jata hy 
//document.querySelector is k ander selector dena parta hy or jo bhi first class hogi usko gate karega
// -------------------------------------------------------------------
//                                 Events in Javascript
// javasript m events ko 4 tareeky se likh sakhte hain
//01: html elements k sath kuch hota hy toh wo event keh lata hy
//02: onlclick jo function hy ye jo onclick work krta hy isko event kehte hain
//03: jb bhi kuch koi button per click krte hain is per jo react hota means k alert website rendor ya kuch bhi wo event hota hy
//04: javascript ko jb detected krte hain phr wo excute hota hoti hy broswer per toh ye bhii ek event hy 
// -------------------------------------------------------------------
// onchange	An HTML element has been changed 
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	The browser has finished loading the page
// -----------------------------------------------------------------
// 3rd wayof writing
// const thirdWay = document.getElementById("thirdWay")
// thirdWay.onclick = function(){
//       alert("hello world")
// };
// 4th way of writing
// const fouthWay = document.querySelector('#fourWay');
// fourWay.addEventListener('click', ()=>{
//       alert('I Love You');
// })
// ----------------------------------------------------------------------
// what is keyboard event?
//keyborad se koi bhi key press krte ho isse koi event process ho isse keyboard event bolte hain
//onkeypress="onkeypress()" means k kon se key ko press kr rahe ho or uska code kia hy wo pta lg jaega 
// onkeydown="onkeydown()"  koi bhi key press kr k rakho toh key down show karega
// onkeyup="onkeyup()" koi bhi key press kr k chor do toh key up show karega
// -----------------------------------------------------------------
// Input Event in Javascript
// input se ye pta laagta hy k koi bhi cheez user ne call ki toh hame pata lg jati hy
// ----------------------------------------------------------------
// Interveiw Question
// what is the difference between onclick and addEventListner?
// onclick overright kr deta hy
//EventListner overRight nhi krta hy
// -----------------------------------------------------------------------
// Timing Base event 
// set timeout means k humne koi bhi ek result banaya hy uska result 12 b aje show krna hy toh is k liye use karege. or ye ek hi bar chalta hy kuch ghante ya kuch dair bad ka time set krna ho toh ye use karenge
// set interval agr apko countdown lagana hy toh ye use karenge agr mili sec ka use krna ho toh ye karenge
// clear timeout agr bhi time ko rokna hy toh ye use hoga phle reference dena hoga or yehi reference timeout k paranthasis m pass krna hoga 
// clear interval kisi bhi cheez ko stop kr k dobara start krna ho toh ye use hoga
// ------------------------------------------------------------------------
//  OOPs in javascript : Object-Oriented Programming 
// what is object literals? : ye ek key:value pair data structure hy.
// example: like ek school bag is m multiple data store hota hy pencil pen or bhi bht se cheezen  toh object bhi ishi tarha kam krta hy agr apko apna name age gender jo bhi store krna ho ek hi varaible k ander toh wo objects k trought ho jaega
// what is "this" object? : 
// 1st way to create object.
// let myData = {
//       myName: "Sumair Khan",
//       myAge: 20,
//       getData: function(){
//             console.log(`my name is ${myData.myName} and my age is ${myData.myAge}`);
//       }
// }
//     myData.getData();
// -----------------------------------------------------------
// 2nd way to write
// let myData = {
//       myName: "Sumair Khan",
//       myAge: 20,
//       getData (){ isko object function bhi bolte hain
//             console.log(`my name is ${myData.myName} and my age is ${myData.myAge}`);
//       }
// }
//     myData.getData();
// this is your object literals.
// --------------------------------------------------------
// what is this object?
// this mean k ap kon se context k ander use kr rahe ho wo btata hy
// ye different different values ko get kr sakhta hy
// console.log(this.alert("hello world")); alert show karega
// let myNames = "sumair khan";
// function myName(){
//       console.log(this.myNames);
// }
// myName();
// -----------------------------------------------------------
// agr kisi bhi obj k ander kafi zaida data ho ya koi method ya property ho toh this k madad se aram se get kr sakhte hain

// let obj = {
//       myName: 'sumair khan',
//       myAge: 20,
//       Gender: 'male',
//       getData(){
//            console.log(this.Gender);
//       }
// }
// obj.getData();
// -------------------------------------------------------------------------

// let obj = {
//       myName: 'sumair khan',
//       myAge: 20,
//       Gender: 'male',
//       getData: () => {
//            console.log(this);
//       }
// }
// obj.getData();
// arrow function use nhi kr sakhte is m
//  -------------------------------------------------------------------------------
// let bioData = {
//       myTotal:{
//       realName: 'sumair khan',
//       channelName: 'sumair tech'
//       },
//       myAge : 29,
//       getData(){
//             console.log(`my name is ${this.realName.channelName} and my real age is ${this.myAge}`);
//       }
// }
//       bioData.getData();
// this is code can't work
// ---------------------------------------------------------------------------
// Array Destructuring
// kisi bhi cheez ko tukron m torna ho toh ye use hoga
// const myBioData = ['sumair', 'khan', 20];
// let [myFName, myLName, myAge ] = myBioData
// let [myFName, myLName, myAge, myCs="BSCS" ] = myBioData kuch new data add krna ho toh ese hoga
// console.log(myCs);
// --------------------------------------------------------------------------
// Object destructuring
// koi bhi obj ko tukron torna ho toh ese tote ga
// const obj = {
//       myFName: 'sumair',
//       myLName: 'khan',
//       myAge: 20
// }
// let {myFName, myLName, myAge, myCs='BSCS' } = obj
// console.log(myCs);
// ----------------------------------------------------------------------------
// Object properties
//Dymanic property kis tarha add hogi
// let myName = 'sumair'
// const obj = {
//       [myName] : 'hello how are you?',
//       [20]: 'is my age'
// }
// console.log(obj);
// -----------------------------------------------------------
// let myName = 'sumair'
// let myAge = 20
// const bioData = {myAge,myName}
// console.log(bioData);
// --------------------------------------------------------------------------------------
// spread operators
// const colors = ['red','blue','pink','white']
// let myFavt = [...colors, 'black', 'purple']
// console.log(myFavt);
// ------------------------------------------------------------------------------------
//             ES7 features
// iska kam ye hy k ek array m kuch data find krna ho toh includes k through ho jaega
// const colors = ['red','blue','pink','white']
// const isPresent = colors.includes("pink")   //true
// const isPresent = colors.includes("black")    //false
// console.log(isPresent);
// -------------------------------------------------------------------------------------
//            ES8 features
// String padding : kisi bhi word k bechm padding deni ho toh e use karenge
// object.value() : kisi bhi cheez ki srif value chahiye ho toh ye use karenge 
// object.entries() : or pora object chahiye ho toh ye or ye obj ko array m convert kr deta hy 
// ------------------------------------------------------
// const message = 'my name is sumair khan';
// // console.log(message);
// console.log(message.padStart(5))
// console.log(message.padEnd(7))
// ------------------------------------------------------
      // const person = {name:'alex',age:22}
      // console.log(Object.values(person));
      // console.log(Object.entries(person))
// --------------------------------------------------------------------------------------------\
// flat jitne bhi dimensional array ho usko 1 diamentional m convert kr deta hy
// const arr = [
//             ['zone_1','zone_2'],
//             ['zone_3','zone_4'],
//             ['zone_5','zone_6', ['zone_7','zone_8',['zone_9','zone_10']]]
//       ]
// console.log(arr.flat(Infinity));
// ------------------------------------------------------------------------------------------
//                             ---END MODERAN JAVASCRIPT---































































































































































































































































































































































































































































































 

























































































































































































































































































































































