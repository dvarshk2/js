let cl= console.log;
//className >> it returns string of all the classes present in the html element
//
let demoDiv = document.getElementById('demo');
cl(demoDiv);
cl(demoDiv.className);//returns string of all class name presentin the element
let str = 'demo';
str = 'skillss';
str = "skillset"
if(demoDiv.className.includes(str)){// includes method check the pesence of given word/string in the string
    cl(`${str} is present`);
}else{
    cl(`${str} is not present`)
}

//classList >> DOMToken list, array like object

cl(demoDiv.classList);//DOM token list array like object

let myBtn = document.querySelector('.btn');
myBtn.classList.add('myBtn');//this will add myBtn class to class list
//1. add
//2. remove 
//3. toggle >> it works like switch
cl(myBtn.classList);

myBtn.classList.remove('btn');
cl(myBtn.classList)

myBtn.addEventListener('click', function(){
    //  demoDiv.classList.add('myBtn');
    // demoDiv.classList.remove('basic');
    demoDiv.classList.toggle('myBtn');
})