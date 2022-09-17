let cl = console.log;

const accoHeading = Array.from(document.querySelectorAll('.accoHeading'));
cl(accoHeading);

const accoHeadingChangeHandler = eve => {
    cl(eve.target);
    accoHeading.forEach(head => {
        head.classList.remove('active');
    })
    eve.target.classList.add('active');
}



accoHeading.forEach( heading => {
    heading.addEventListener('click', accoHeadingChangeHandler);
})