let str = " carro ";

let value = str.trim()

let ft = value[0].toUpperCase();
let lt = value[value.length -1].toUpperCase(); 

let newStr = value.replace(value[0], ft);

console.log(newStr.replace(newStr[newStr.length -1], lt));