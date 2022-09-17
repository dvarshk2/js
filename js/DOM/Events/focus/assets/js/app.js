//focus blur

let firstname= document.getElementById('fname');
let validationFname = document.getElementById('fnamePara');
firstname.addEventListener('focus', onFocus);
let para = document.createElement('p');
let paraText = document.createTextNode(`Name should be of min 6 characters`);
para.appendChild(paraText);


function onFocus(){
   // firstname.style.backgroundColor='skyblue';
    validationFname.appendChild(para);
}