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
        case "+": addition(a,b); 
        break;
        case "-": subtraction(a,b); 
        break;
        case "*": multiplication(a,b); 
        break;
        case "/": division(a,b); 
        break;
    }
}

const display_keys=document.querySelectorAll(".digits, .operators");
const display=document.querySelector("#display");
let ip=""; 

display_keys.forEach((key) => {
    key.addEventListener("click", () =>{
        ip+=key.textContent;
        display.textContent=`${ip}`;
        console.log(ip);
    });
});


