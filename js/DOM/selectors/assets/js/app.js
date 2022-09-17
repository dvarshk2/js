let cl = console.log;
//DOM >> Document Object Model
//when html page renders/load in browser, 
//engine converts each and every element into object
//that structure is called DOM

//ID selector ==> single selection method
//it returns document object

var getDemo = document.getElementById('demo');
cl(getDemo);

// Class selector ==> multiple seletion method
//it returns HTML collection i.e. collection of HTML Elements
//HTML collection is array like object,it is not array

let getDemoByClassName = document.getElementsByClassName('demo');
cl(getDemoByClassName);

//Tag selector ==> multiple selection method
// it returns HTML colection 
//it is array like object

let getSkillsByTagName = document.getElementsByTagName('ul');
cl(getSkillsByTagName);
// 17 March ***********************************************************************************
//HTMLCollection ==> it is array like object
let skills = document.getElementsByClassName('skills');
cl(skills.length);

//skills.pop(); //all array mwthods will not work
let i;
for(i = 0; i < skills.length; i++){
    cl(skills[i].innerHTML);
}

let skillsArr = Array.from(skills);
skillsArr.forEach(ele => {
    ele.getElementsByClassName.backgroundColor ='red';
})

skillsArr.pop();
cl(skillsArr[0].innerHTML);

//node list ==> it is also array like object

//18 March *****************

let divClasss = document.querySelector('.demo');
cl(divClasss);

let divID = document.querySelector("#demo");
cl(divID);
cl(divID.innerHTML);
cl(divID.innerText);

let selectPara = document.querySelector('p');
cl(selectPara);

let selectHTML = document.querySelector('.demoUL>ul>li:first-child');
cl(selectHTML);

//querySelectorAll >> multiple selection method
// it returns node list
//node list >> Array like object
// it returns only collection of HTML Elements

let basicSkills = document.querySelectorAll('#skills1');
cl(basicSkills);

skillsArr = Array.from(basicSkills);
cl(skillsArr);