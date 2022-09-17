let cl = console.log;

// cl(Math.random());

// cl(Math.floor(5 + Math.floor(Math.random() * 11)));

function randomNo(num1, num2){
    alert(`${Math.floor(num1 + Math.floor(Math.random()*(num2 - num1 + 1)))}`)
}

randomNo(10,15);