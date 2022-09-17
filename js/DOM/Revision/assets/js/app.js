// DOM >> Document Object Model >> When html page renders in browser, browser engine converts each and every element in to Object, this structure is called as DOM 

// ================= Selectors  ===============================
//

// 1. ID selector >> single section method
//                 >> it returns document object

var getDemo = document.getElementById('demo');
console.log(getDemo);
console.log(getDemo.innerHTML);
console.log(getDemo.innerText);
console.log(getDemo.textContent);


// 2. class selector >> multiple selection method
                    //   >> it returns HTML Collection >> HTML collection is array like object, it's not array

var getDemoByClassName = document.getElementsByClassName('demo');
console.log(getDemoByClassName);// returns html collection

// 3. Tag Selector >> multiple selection method >> returns html collection

// var skillsByTagName = document.getElementsByTagName('ul');
var skillsByTagName = document.getElementsByTagName('li');
console.log(skillsByTagName);

let skills = document.getElementsByClassName('skills');
// console.log(skills);
console.log(skills.length);
// console.log(skills.pop()); //skills.pop is not a function >> All array methods will not work

for(let i = 0; i < skills.length ; i++){
    console.log(skills[i].innerHTML);// will get html inside skills class
    console.log(skills[i].innerText);// only inner text will be printed
}

let skillsArr = Array.from(skills);
console.log(skillsArr);
skillsArr.forEach( ele => {
    ele.style.backgroundColor = 'teal';
})
// console.log(skillsArr.pop());
console.log(skills[0].innerHTML);//text with html will be printed
console.log(skills[0].innerText);// only text will be printed



// ================= Events  && eventListener ===============================
// click, double click, hover, onmouse, key key up, key down, focus, blur, change
//EventListener syntax
// Element.addEventListener('eventName', callbackFunction());

let myBtn = document.getElementById('btn');
let myDiv = document.querySelector('.div1');
let div3 = document.querySelector('.div3');
let div4 = document.querySelector('.div4');
let onMouse = document.querySelector('.onMouse')
let inputFname = document.querySelector('.fname');
let validation = document.getElementById('validation');
console.log(inputFname.value);
function onFocus(){
    validation.style.display="block";
}

function onBlur(){
    validation.style.display = 'none';
}

let onKeyUp = () => {
    console.log(inputFname.target);
}

let onkeyDown = () => {
    console.log('key down');
}


myBtn.addEventListener('click', function(){
    myDiv.style.backgroundColor = 'blueviolet';
})

div4.addEventListener('dblclick', function(){
    div3.style.backgroundColor = 'green';
})


onMouse.addEventListener('mouseover', function(){
    onMouse.style.border = '5px solid red';
})

onMouse.addEventListener('mouseout', function(){
    onMouse.style.backgroundColor = '#123456';
    onMouse.style.color = '#fff';
})

validation.style.display = 'none';
inputFname.addEventListener('focus', onFocus);
inputFname.addEventListener('blur', onBlur);

inputFname.addEventListener('keyup', onKeyUp);
inputFname.addEventListener('keydown', onkeyDown)






// ================= Class Name & Class List ===============================

