let counter=0

 const getData = ()=>{
   console.log('data retrieved', ++counter)
 }

 const mydebo= (callback, delay)=>{
   let timer;
  return function(...args){
   if(timer) clearTimeout(timer)
     timer= setTimeout(()=>{
    callback(...args)
   }, delay)
  }
 }
const Better = mydebo(getData, 3000)











// this keyword
// // below it will point to window object






// console.log(this)
// //'use strict'
// // inside strict mode it will print undefinde
// function Nomad(){
//    // it will point to global object



//    console.log(this)
// }
// Nomad()
// // this call print undefine














// window.Nomad()
// // // it will point 
// console.log("running...") 
// // out to global object

// const obj1= {
//    a:1,
//    New:function(){
      
//       console.log(this.a)
//       // it will print 1
//    }
// }
// obj1.New()
// const obj2={
//    a:2
// }
// // below this will show or point to to whole obj 

// obj1.New.call(obj2)
// // call apply and bind bind are sharing methods

// // this inside dome element reference to html element