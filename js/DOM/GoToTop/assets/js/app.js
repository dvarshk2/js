// alert('hello')
let cl = console.log;

let topbtn = document.getElementById('topBtn');
cl(topbtn);

topbtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})

document.addEventListener('scroll', (e) => {
    if(document.documentElement.scrollTop > 150){
        topbtn.style.display='block';
    }else{
        topbtn.style.display='none';
    }
})