const radius=[3,2,1,4]

const area= (radius)=>{
    return Math.PI * radius * radius ;
}
const circumfrence= (radius)=>{
return 2 * Math.PI *radius
}

const CalculateArea= (radius,logic)=>{
    const arr=[]
    for(let i=0;i<radius.length;i++){
   arr.push(logic(radius[i]))
    }
    return arr;

}

 console.log( CalculateArea(radius,area))
 console.log( CalculateArea(radius,circumfrence))










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