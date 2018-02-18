var calc = document.getElementById("calcInput");
var num = document.querySelectorAll(".num");
var operation = document.querySelectorAll(".operation");
var reset = document.getElementById("reset");
var numCurrent = 0;
var isNumberNew = false;
var operationLast;

for(var i = 0; i < num.length; i++) {
    var numActive = num[i];
    numActive.addEventListener("click", function (e) {
        inputNums(e.target.value);
    });
}

for(var j = 0; j < operation.length; j++) {
    var operationActive = operation[j];
    operationActive.addEventListener("click", function (e) {
        operateNums(e.target.value);
    });
}

reset.addEventListener("click", resetNum);

function inputNums(number) {
    if (isNumberNew) {
        calc.value = number;
        isNumberNew = false;
            console.log("1)calc.value: " + calc.value);
            console.log("1)isNumberNew: " + isNumberNew);
    } else {
        calc.value += number;
            console.log("2)calc.value: " + calc.value);
    }
}

function operateNums(calcOperation) {

        isNumberNew = true;
            console.log("2)isNumberNew: " + isNumberNew);
        if (operationLast === "+") {
            numCurrent += +calc.value;
                console.log("1)numCurrent: " + numCurrent);
        } else if (operationLast === "-") {
            numCurrent -= +calc.value;
                console.log("2)numCurrent: " + numCurrent);
        } else if (operationLast === "*") {
            numCurrent *= +calc.value;
                console.log("3)numCurrent: " + numCurrent);
        } else if (operationLast === "/") {
            numCurrent /= +calc.value;
                console.log("4)numCurrent: " + numCurrent);
        } else {
            numCurrent = +calc.value;
                console.log("5)numCurrent: " + numCurrent);
        }

    calc.value = numCurrent;
        console.log("3)calc.value: " + calc.value);
    operationLast = calcOperation;
        console.log("operationLast: " + operationLast);
}

function resetNum() {
    calc.value = "";
    numCurrent = 0;
        console.log("Click reset!");
}





/* if (isNumberNew && operationLast !== "=") { //якщо isNumberNew уже true, тобто ми вводимо нове число, то:
       calc.value = numCurrent;
           console.log("2)isNumberNew: " + isNumberNew);
           console.log("3)calc.value: " + calc.value);
   } else {*/

/*

var reset = document.getElementById("reset");

num.addEventListener("click", inputNums);
function inputNums () {
    for(var i = 0; ; ){

    }
    count.value = num.value;
};

sum.addEventListener("click", sumTwoNumbers);

function sumTwoNumbers() {
    var sumTwo = +num1.value + +num2.value;
    res.value = sumTwo;
};

reset.addEventListener("click", resetNums);

function resetNums() {
    num1.value = "";
    num2.value = "";
    res.value = "";
};

*/


