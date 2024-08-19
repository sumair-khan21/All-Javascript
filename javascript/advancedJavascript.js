// console.log('hello world');
// ---------------------------------------------------------------------------------------------
//                               ---ADVANCED JAVASCRIPT---
// Higher order function : ese function jo dosray function as a argument accept krte hon wo Higher order function hota hy.
// CallBack Function : ese function jo dosray function k ander as a argument pass hota hy isko callback function kehte hain.
// we need to create calculator
// const add = () =>{
//           return a+b;
// }
// const sub = () =>{
//           return Math.abs(a-b);
// }
// const mult = () =>{
//           return a*b;
// }
// const calculator = (num1,num2,operator)=>{
//    return(num1,num2)
// }
// console.log(calculator(5,2,add));
//---------------------------------------------------------------------------------------------
//                    Asychronous Javascript part 
// //srif var m hoisting use hota hy or wo srif declearzion utha k uper le jata hy na k initialize
//saray var k variable utha k le jata hy
// let age; //decleare krna
// age = 22; // initialize
// console.log(age);
// ---------------------------------------------------------------------------------------------
//                      lexically scope
// it means k lexical scoping is k jitne bhi parent or global scope hoonge un sb ko access kr sakhta hy
// and one more thing k jo bhi parent hoga wo apne child ko access nhi kr sakhta undefind show karega
// inner function ka data get kr sakhta lekin outer function ka nhi kr skhta
// let a = 'hello guyz ';
// const first = () =>{
//           let b = 'how are you? ';
//           const second = () =>{
//           let c = 'i am fine'
//           console.log(a+b+c);
//           }
//           second()
// }
// first()
// -----------------------------------------------------------------------------------------------------
//                 what is clouser?
// const outerFun = (a) =>{
//           let b = 10;
//           const innerFun = () =>{
//              let sum = a+b;
//              console.log(`the sum of a and b is ${sum}`);
//           }
//           innerFun()
// }
// outerFun(5)
// this is called clouser.
// const outerFun = (a) =>{
//                     let b = 10;
//                     const innerFun = () =>{
//                        let sum = a+b;
//                        console.log(`the sum of a and b is ${sum}`);
//                     }
//                     return innerFun;
//           }
//           let check = outerFun(5)
//           console.dir(check)
// ----------------------------------------------------------------------------------------------
//           use strict mood
// agr ye apne code m laga dia toh har ek cheez perfectly define krni hogi
// jese k ye
// "use strict"
// x = 'sumair'
// console.log(x); //error ayega
// -------------------------------------------------------------------------------------
// what is difference between Synchronous and Asynchronous javascript?
// Synchronous means k agr ap koi do kam ek sath kr rahe ho toh jb tk apka ek kam nhi ho jata ap dosra kam nhi kr sakhte
// Asynchronous means k saray kam chalte rahenge kisi ko rukna nhi parega or iska ek kam ye bhi k ek hi waqt m do kam kr sakhte ho.

// const fun2 = () =>{
//           console.log("function 2 is called");
// }
// const fun1 = () =>{
//           console.log('function 1 is called')
//           fun2()
//           console.log('function 1 is called again')
// }
// fun1() // one by one kam kr rha hy
// --------------------------------------------------------------------------------------------
// const fun2 = () =>{
//                     setTimeout (() =>{  <=Asynchronous method
//                               console.log("function 2 is called");
//                     }, 5000);
//           }
//           const fun1 = () =>{
//                     console.log('function 1 is called')
//                     fun2()
//                     console.log('function 1 is called again')
//           }
//           fun1()
// Asynchronous simply mean k saray kam chalte rahenge kuch rukega nhi
// -----------------------------------------------------------------------------------------------
// what is event loop in javascript?
// message queue mean k ek line m lgna
// koi bhi function banta hy toh uska ek execution stack banta hy
// koi bhi cheez ko message queue se utha kr execution stack m lekr jane ko event loop bolte  hain.
// --------------------------------------------------------------------------------------------
// what is function curring?
// sum(5)(3)(8) isko function curring bolte hain// huge difference
// sum(5,3,8)
// function sum(num1){
//           return function(num2){
//                     return function(num3){
//                               console.log(num1+num2+num3);
//                     }
//           }
// }
// sum(5)(3)(8) // this is called function curring
// --------------------------------------------------------------------------------------------------
// short hand
// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);
// sum(5)(3)(8)
// ----------------------------------------------------------------------------------------------
// what is JSON in javascript?
// Javascript Object Notation
// koi bhi api ya data ko string ya object m convert krne k liye use krte hain json
// --------------------------------------------------------------------------------------------
//                                Promises
//what is promises in javascript?
//promises means k ek dost ne apse kaha m ek saal bad is position per hoga phr apko ek saal wait krna hoga ya toh wo us position per hoga ya phr fail ho jaega
//toh koi bhi api ko call krne k lie fetch use krte hain ye avscript ka ek method hy
// fetch use karege toh do condition hogi ya toh data milega ya nhi milega
//is m do condito hogi data fullfil ya reject
//promises m bs ye do cheezen hoti hain
// GET https://icanhazdadjoke.com/

// const jokes = document.querySelector('#joke');
// const jokeBtn = document.querySelector('#jokeBtn')

// const generateJoke = () => {

//     const setHeader = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', setHeader )
//     .then((res) =>{
//         console.log(res.json());
//     }).catch((error) =>{
//         console.log(error);
//     })

// }
// jokeBtn.addEventListener('click', generateJoke);
// generateJoke()
//--------------------------------------------------------------------------------------------------------------
  // const mEnter = document.getElementById('box');
       // mEnter.addEventListener('mouseenter',()=>{
       //        mEnter.style.background = 'red'
       //        console.log("mouse enter bro");
       // } );
       // mEnter.addEventListener('mouseleave',()=>{
       //        mEnter.style.background = 'pink'
       //        console.log("mouse leave bro");
       // }

              // function mouseDown(){
              //        document.getElementById("myP").style.color = "blue"
              // }
              // function mouseUp(){
              //        document.getElementById("myP").style.color = "red"
              // }

              // const change = ()=>{
              // //     document.getElementById('demo').innerHTML = "par change";
              // const demochange = document.getElementById('demochange');
              // demochange.innerHTML = " hello guyz"
              // console.log(document.getElementsByClassName("para"));
              // console.log(document.getElementsByTagName("p"))
              // console.log(document.getElementsByName("gender"))
              // }
       //   let t = new Date().toLocaleTimeString()
       //   document.getElementById("time").innerHTML = t;
       //   let d = new Date().toLocaleDateString()
       //   document.getElementById("time").innerHTML = d;
       //   (function(){
       //        setInterval(()=>{
       //   let d = new Date().toLocaleTimeString()
       //   document.getElementById("demo").innerHTML = d;

       //        },1000)
       //   })();
     
// -------------------------------------------------------------------------------------------------------------
//                          async await      ,,      jokes
//async await promises m use hoga hy
//In short, async and await make asynchronous code look and behave more like synchronous code, making it easier to read and write.
//try or catch ka ye kam hota hy k koi bhi error ko handle krna ho toh try catch laga do
// async function generateJoke()
    // const generateJoke = async () =>{
    // try{
    //     const setHeader = {
    //     headers:{
    //         Accept:'application/json'
    //     }
    //     }

    // const res = await fetch('https://icanhazdadjoke.com/', setHeader) // => ye part hame promises return kr rha hy
    // const data = await res.json() // ye part data return kr rha hy
    // jokes.innerHTML = data.joke; 
    // }catch(err){
    //     console.log(`the error is ${err}`);
    // }
    // }
//--------------------------------------------------------------------------------------------------------------------
//  light on and light off project
// do in html file
//--------------------------------------------------------------------------------------------------------------
//                       thermometer
// const tempLoad = () =>{
//     let temp = document.getElementById('temp')
//     temp.innerHTML = '&#xf2cb'
//     setTimeout(()=>{
//         temp.innerHTML = '&#xf2ca'
//         temp.style.color= '#f8b627'
//     } ,1000)
//     setTimeout(()=>{
//         temp.innerHTML = '&#xf2c9'
//     } ,2000)
//     setTimeout(()=>{
//         temp.innerHTML = '&#xf2c8'
//         temp.style.color = '#d63031'
//     } ,3000)
    
// }
// tempLoad();
// setInterval(tempLoad,5000)
// ----------------------------------------------------------------------------------------------------------------
//                                    temp convertor
// const calculateTemp = () =>{
//        const numberTemp = document.getElementById('temp');
//     //    console.log(numberTemp);
//        const tempSelected = document.getElementById('temp_diff');
//        const valueTemp = temp_diff.options[tempSelected.seletedIndex].value;
 
//        const CelToFah = (cel) => {
//         let Fahrenheit = Math.round((cel * 9/5) + 32);
//         return Fahrenheit;
//        }      
//        const FahToCel = (fah) =>{
//         let Celsius = Math.round((fah -32) * 5/9)
//         return Celsius;
//        }

//        let result;
//        if(valueTemp == 'cel'){
//         result = CelToFah(numberTemp);
//         document.getElementById('resultContainer').innerHTML= `= ${result}Fahrenheit`;
//        }else{
//         result = FahToCel(numberTemp)
//         document.getElementById('resultContainer').innerHTML= `= ${result}Celsius`;
//        }
// }

//--------------------------------------------------------------------------------------------------------------------
//                                 Increment Counter
// const counters  = document.querySelectorAll('.counter');
// counters.forEach((counter)=>{
//     counter.innerHTML = 0;
//     const updateCounter = () =>{
//         const targetCount = +counter.getAttribute('data-target');
//         const startingCount = Number(counter.innerHTML);
//         const incr = targetCount / 100;
//         if(startingCount < targetCount){
//           counter.innerHTML = `${Math.round(startingCount + incr)}`
//           setTimeout(updateCounter, 10 )
//         }else{
//          counter.innerHTML = targetCount;
//         }
//     } 
//     updateCounter();    
// })
//---------------------------------------------------------------------------------------------------------------------
//kisi bhi no ko string m convert krna ho toh is tarha karenge
//using unary plus operator
// var n = +str;
//the number constructor
// var n = Number(str);
//the parseFloat function:
// var n = parseFloat(str);
//--------------------------------------------------------------------------------------------------------------------
//                          final project
const addButton = document.querySelector('#add');
const updateLSData = () =>{
       const textAreaData = document.querySelectorAll('textarea');
       const notes = [];
       console.log(textAreaData);
       textAreaData.forEach((note)=>{
              return notes.push(note.value);
       })
       console.log(notes);
       localStorage.setItem('notes' , JSON.stringify(notes));
}
const addNewNote = (text = '') =>{
const note = document.createElement('div');
note.classList.add('note');
const htmlData = `
<div class="operation">
       <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
       <button class="delete"><i class="fa-solid fa-trash-alt"></i></button>
 </div>
 <div class="main ${text ? " " : "hidden"}"></div>
 <textarea class="${text ? "hidden" : " "}"></textarea> `;
 note.insertAdjacentHTML('afterbegin', htmlData)
//  console.log(note);
// geting the references
const editButton = note.querySelector('.edit');
const delButton = note.querySelector('.delete');
const mainDiv = note.querySelector('.main');
const textarea = note.querySelector('textarea');
//delete the note
delButton.addEventListener('click',()=>{
          note.remove();
          updateLSData();
})
// toggle using edit button
textarea.value = text;
mainDiv.innerHTML = text;
editButton.addEventListener('click',()=>{
       mainDiv.classList.toggle('hidden')
       textarea.classList.toggle('hidden')
})
textarea.addEventListener('change',(event)=>{
  const value = event.target.value;
  mainDiv.innerHTML = value;
  updateLSData();
})
 document.body.appendChild(note) //appendchild means k kisi bhi chlid ko body m add krwana
}

//getting data back from localstorage
const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){notes.forEach((note) => addNewNote(note)) }

addButton.addEventListener('click', ()=> addNewNote());




























































































































































































