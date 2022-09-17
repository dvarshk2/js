let cl = console.log;

// let str = 'javaScript';
// let arr = str.split("");
// // cl(arr);
// arr.push(str.slice(0,1));
// cl(arr);
// cl(arr.join(""));

function newStr(str){
    let arr = str.split('');
    arr.push(str.slice(0,1));
    cl(arr.join(''));
}

newStr('Hari');
newStr('varshk2');
newStr('12345');