let cl = console.log;

const showModal = document.getElementById('showModal');
// cl(showModal);
const backDrop = document.getElementById('backDrop');
// cl(backDrop);
const myModal = document.getElementById('myModal');
// cl(myModal);
const myCloseBtns = Array.from(document.querySelectorAll('.myClose'));
// cl(myCloseBtns);
const addMovie = document.getElementById('addMovie');
const title = document.getElementById('title');
const imageUrl = document.getElementById('imageUrl');
const rating = document.getElementById('rating');
const info = document.getElementById('info');

let movieArray = [];



const showModalHandler = (eve) => {
    // backDrop.classList.add('show');
    // myModal.classList.add('show');
    // toggleShowClass(backDrop,'show');
    // toggleShowClass(myModal,'show');
    toggleShowClass();
};
const onCloseHandler = e => {
    // backDrop.classList.remove('show');
    // myModal.classList.remove('show');
     // toggleShowClass(backDrop,'show');
    // toggleShowClass(myModal,'show');
    toggleShowClass();
}
const addMovieHandler = eve => {
    let movieObj ={
        title: title.value,
        imgUrl : imageUrl.value,
        rating : rating.value
    }
    movieArray.push(movieObj);
    let result='';
    movieArray.forEach(obj => {
        result += `
                <div class="col-md-4">
					<div class="card">
						<div class="card-body">
							<h5>${obj.title}</h5>
							<img class='img-fluid' src="${obj.imgUrl}" alt="">
							<p>${obj.rating}/5</p>
						</div>
					</div>
				</div>
        `
    });
    info.innerHTML=result;
    backDrop.classList.remove('show');
    myModal.classList.remove('show');
    title.value='';
    imageUrl.value ='';
    rating.value = '';
    
}

// function toggleShowClass(e,nameOfClass){
//     e.classList.toggle(nameOfClass);
// }

function toggleShowClass(){
    backDrop.classList.toggle('show');
    myModal.classList.toggle('show');
}


showModal.addEventListener('click', showModalHandler);

myCloseBtns.forEach(btn => {
    btn.addEventListener('click', onCloseHandler);
})
addMovie.addEventListener('click', addMovieHandler)