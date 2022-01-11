
var a = 5;

var getNum1 = function () {
    console.log("hoisting111!!!");
}

var getNum2 = () => {
    console.log("hoisting222!!!");
}


function getNum() {
    console.log("hoisting!!!");
}


console.log(getNum())
console.log(a)
