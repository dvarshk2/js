let cl = console.log;

let lis = Array.from(document.querySelectorAll(".tabheading li"));
cl(lis);
let tabpanel = Array.from(document.querySelectorAll(".tabpanel"));
cl(tabpanel);
const onTabChangeHandler = eve => {
    cl(eve.target);
    let getId = eve.target.getAttribute('data-id');
    cl(getId);
    tabpanel.forEach(tab => {
        tab.classList.remove('active');
    });
    lis.forEach(li => {
        li.classList.remove('active');
        eve.target.classList.add('active');
    })
    let getpanel = document.getElementById(getId);
    cl(getpanel);
    getpanel.classList.add('active');
}




lis.forEach(li => {
    li.addEventListener('click', onTabChangeHandler)
})