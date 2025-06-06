function addition(a,b){
    return a+b;
}
function subtraction(a,b){
    return a-b;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    if(b==0){
        return "Can't divide by 0";
    }
    return a/b;
}

function operate(a, operator, b){
    let result="";
    switch(operator)
    {
        case "+": result= addition(Number(a),Number(b)); break; 
        case "-": result= subtraction(Number(a),Number(b)); break;
        case "*": result= multiplication(Number(a),Number(b)); break;
        case "/": result= division(Number(a),Number(b)); break;
    }
    return Number(result).toFixed(6);
}

const digits=document.querySelectorAll(".digits");
const operators=document.querySelectorAll(".operators");
const display=document.querySelector("#display");
const equals=document.querySelector("#equals");
const clear=document.querySelector("#clear");

let ip="";
let a="", b="", oper="";
let firstOperatorUsed=false, secondOperatorUsed=false; 

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if(!firstOperatorUsed){
            a+=digit.textContent;
            display.textContent=a;
            console.log(a);
        }
        else if(firstOperatorUsed){
            b+=digit.textContent;
            display.textContent=b;
            console.log(b);
        }
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if(a==="") return;   //returns nothing if operator is clicked without 1st number entered
        if(!firstOperatorUsed){  //an oper clicked when none have been clicked yet
            oper=operator.textContent;
            firstOperatorUsed=true;
            display.textContent=" ";
            console.log(`first op= ${oper}`);
        }
        else if(firstOperatorUsed && b===""){   //2 operators used in a row
            oper=operator.textContent;
            console.log(`new oper=${oper}`)
        }
        else{
            a=String(operate(a,oper,b));
            b="";
            oper=operator.textContent;
            display.textContent=a;
            console.log(`new a=${a}, oper=${oper}`);
        }
    }); 
});

equals.addEventListener("click", () => {
    if(a==="") return;   //returns nothing if operator is clicked without 1st number entered
    let result=String(operate(a,oper,b));
    display.textContent=result;
    a=result; b="";
    firstOperatorUsed=false;
    console.log(`result= ${result}`);
});

clear.addEventListener("click", () => {
    a=""; b="";
    ip="";
    display.textContent="";
    firstOperatorUsed=false;
});




