
const Git= 'https://github.com/users/saadali-77'
 const User= fetch(Git)
 console.log(User)
 User.then((data)=>{
    console.log(data)
 })
// 1 promiseall
// run fo all give output collectively and find first error and return
// 2 promisesettled
// run for all and give error and response in array at the end
// 3 promiserace
// in it it will give which come first and return
// 4 promiseany
// it just need atleast one response to succed






// var a=5
// function New(){
//     console.log(a)
//     var a=10;

// }
// const NB=New()
// console.log(NB)



// const radius=[3,2,1,4]

// const output= radius.reduce((acc,curr)=>{
//     if(curr>acc){
//         acc= curr
//     }
//     return acc
// })
// console.log(output)










// const numb1=2;
// const numb2=4;

// function Saad(){
// const name='nirvan'
//     function Add(){
//         return `${name} scored ${numb1+numb2}`
// //     }
// //    return Add()
// // }
// // console.log(Saad())
// // const arr = new Array(5);

// // console.log(arr.length);
// // console.log('saad')
// // console.log(2+ '3')
// const array=[1,2,3,4,5]
// const b= array.splice(2,0,7,8,0)
// console.log(array)