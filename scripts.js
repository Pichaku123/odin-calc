// +-----------------------+
// |       [Display]       |
// +-----------------------+
// | [7] [8] [9]   [ / ]   |
// | [4] [5] [6]   [ * ]   |
// | [1] [2] [3]   [ - ]   |
// | [0] [.] [=]   [ + ]   |
// |       [Clear]         |
// +-----------------------+
//smth like this(got the layout from gpt)

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
    return a/b;
}

function operate(a, operator, b){
    switch(operator)
    {
        case "+": return addition(Number(a),Number(b)); 
        case "-": return subtraction(Number(a),Number(b)); 
        case "*": return multiplication(Number(a),Number(b)); 
        case "/": return division(Number(a),Number(b)); 
    }
}

const digits=document.querySelectorAll(".digits");
const operators=document.querySelectorAll(".operators");
const display=document.querySelector("#display");
const equals=document.querySelector("#equals");
let ip="";
let a="", b="", oper="";
let firstOperatorUsed=false, secondOperatorUsed=false; 

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if(!firstOperatorUsed){
            a+=digit.textContent;
            console.log(a);
        }
        else if(firstOperatorUsed){
            b+=digit.textContent;
            console.log(b);
        }
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if(!firstOperatorUsed){  //an oper clicked when none have been clicked yet
            oper=operator.textContent;
            firstOperatorUsed=true;
            console.log(`first op= ${oper}`);
        }
        else if(firstOperatorUsed){
            a=String(operate(a,oper,b));
            b="";
            oper=operator.textContent;
            console.log(`new a=${a}, oper=${oper}`);
        }
    }); 
});

equals.addEventListener("click", () => {
    console.log(`result= ${String(operate(a,oper,b))}`);
});
// function splitter(ip){
//     console.log(`input is ${ip}`);  //working fine
//     //we need to split the function, so that it has 1 number, 1 operator and another number.
//     //to accomodate for multiple operators, we need to stop the first operation after we find 2nd oper.
//     let foundFirstOperator=false, foundSecondOperator=false;
//     let a="", b="";
//     while(!foundSecondOperator)
//     {
//         for(let i=0; i<ip.length; i++)
//         {
            
//         }
//     }
// }

// display_keys.forEach((key) => {
//     key.addEventListener("click", () =>{
        
//         if(key.classList.contains("operators") && !operatorUsed){   
//             //if key is operator and operator is not used yet
//             ip+=key.textContent;
//             display.textContent=`${ip}`;
//             operatorUsed=true;
//             console.log(ip);
//         }
//         else if(key.classList.contains("operators") && operatorUsed){   
//             //if key is operator and operator has been used
//             splitter(ip);
//             console.log(ip);
//         }

//     });
// });

// equals.addEventListener("click", () => {
//     splitter(ip);
// });


