let cl = console.log;

function checkTF(a,b){
    if(a == 35 || b == 35){
        cl(`True`);
    }else if(a+b == 35){
        cl(`True`);
    }else{
        cl(`False`);
    }
}

checkTF(35,10);
checkTF(30,5);
checkTF(12,13);
checkTF(10,35);