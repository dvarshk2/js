let cl = console.log;

function divide2or5(num){
    if(num%2 == 0 || num%5 == 0){
        cl(`True`);
    }else{
        cl(`False`);
    }
}

divide2or5(10);
divide2or5(11);
divide2or5(4);
divide2or5(5);
divide2or5(7);