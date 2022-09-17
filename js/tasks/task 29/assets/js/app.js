let cl = console.log;

let skill=['HTML','css','javaScript','Angular','TypeScriptA'];

function longStr(arr){
    let res='';
    let count= 0;
    arr.forEach(function(ele){
        if(ele.length > count){
            count = ele.length;
            res = ele;
        }
        return res;
    } )
}

cl(longStr(skill))
