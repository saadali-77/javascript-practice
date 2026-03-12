function Greet(params,callback) {
    callback(`hello, ${params}`)
}
Greet('saad',message=>console.log(message))