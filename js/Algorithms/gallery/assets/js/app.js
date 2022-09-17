let cl = console.log;

const changeColor = document.getElementById('changeColor');
const allDivs = Array.from(document.querySelectorAll('.all'));


const onChangeHandler = eve => {
    let getClass = `.${eve.target.value}`;
    cl(getClass)
    allDivs.forEach( ele => {
        ele.classList.add('d-none');
    })
    let selected = Array.from(document.querySelectorAll(getClass));
    cl(selected);
    selected.forEach( e => {
        e.classList.remove('d-none');
    })
}




changeColor.addEventListener('change', onChangeHandler)