function Name(params) {
    const reverse= params.split('').reverse().join('')
    return params === reverse
}
console.log(   Name('gfg'))