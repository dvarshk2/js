let cl = console.log;

function minToSec(min){
    return (`${min * 60} Seconds`);
}
cl(minToSec(5));

function hrsToMin(hrs){
    return (`${hrs * 60} minutes`);
}

cl(hrsToMin(2));

function secToMin(sec){
    return(`${sec / 60} Mins`)
}
cl(secToMin(60));

function minToHrs(min){
    return (`${min / 60} Hrs`)
}
cl(minToHrs(600));