

const a= [1,3,4,2,8,9,5,6]
const b= a.sort((a,b)=>a-b)
console.log(b)







// const a='hellohere'
// const b= a.split('e').length -1
// console.log(b)










// 





function factorial(n){
    let answer=1
    for(let i=1; i<=n; i++){
        answer *= i
    }
    return answer

}

console.log(factorial(5))








// function palindrome(n){
//     let a=0, b=1;
//     for(let i=0; i<n; i++){
//         console.log(a)
//         let next= a+b;
//         a=b;
//         b= next
//     }

// }

//  console.log(palindrome(7))



























// let a =[1,5,4,2]

// const logic= (a)=>{
//     return Math.PI * a * a
// }
// function Saad(a,logic){
//     const area=[]
// for(let i=0; i<a.length; i++){
// area.push(logic(a[i]))

// }
// return area;
// }
//  console.log(Saad(a, logic))

// const b=[1,3,5,1,9]
// const max=b.reduce((acc, curr) => {
//     if(curr>acc)  {
//         acc= curr
//     }
//     return acc;
// }, 0)
// console.log(max)

// function Saad(str){
// const b= str.split('').reverse().join('')
// if(b===str){
//     return 'Palindrome'
// }
// }
//   console.log(Saad('gfg'))
// const a=[1,3,4,5]
// const b= a.shift()
// console.log(b)
// console.log(a

// )
function Prime(n){
    if(n<=1) return false
    for(let i=2; i<n; i++)
{if(n%i===0) return false

}    
return true

}
console.log(Prime(5))