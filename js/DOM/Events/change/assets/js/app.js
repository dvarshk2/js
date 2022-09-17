let cl = console.log;
let changeColor = document.getElementById('changeBodyColor');
let body = document.querySelector('body');



changeColor.addEventListener('change', function(ele){
    // cl(ele.target.value);
    body.style.backgroundColor = ele.target.value;
})