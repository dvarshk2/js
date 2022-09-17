let cl = console.log;

cl(`Show Addition, Substraction, multiplication and division of given numbers`);

function mathOp(num1, num2){
    alert(`Addition of ${num1} and ${num2} is ${num1 + num2},
        Substraction of ${num1} and ${num2} is ${num2 - num1},
        Multiplication of ${num1} and ${num2} is ${num1 * num2}
        Division of ${num1} and ${num2} is ${num2 / num1}`)
    }

mathOp(10,20);