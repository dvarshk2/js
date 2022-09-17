let cl = console.log;

let myBtn = document.getElementById('btn');
cl(myBtn);
let myDiv = document.querySelector('.demo2');
cl(myDiv);
myBtn.addEventListener('click', function(){
    myDiv.style.backgroundColor='red';
    // myDiv.style.backgroundColor='black';
})

let boxA = document.querySelector('.boxA');
let boxB = document.querySelector('.boxB');

boxB.addEventListener('click', function (){
    boxA.style.backgroundColor='red';
});

