let cl = console.log;

cl(`Check number range`);

function range(n){
    if(n<100 && n >50){
        cl(`Value is between 50-100`)
    }else{
        cl(`Value is not between 50-100`)
    }
}
range(90);
range(190);
range(50);
range(100);
range(51);