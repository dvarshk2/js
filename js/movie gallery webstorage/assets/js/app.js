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
const updatemovie = document.getElementById('updatemovie');
const title = document.getElementById('title');
const imageUrl = document.getElementById('imageUrl');
const rating = document.getElementById('rating');
const info = document.getElementById('info');
const movieForm = document.getElementById('movieForm');

let movieArray = [];
if(localStorage.getItem("setData")){
    movieArray = JSON.parse(localStorage.getItem('setData'));
    templating(movieArray);
}


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
    eve.preventDefault();
    let movieObj = {
        title : title.value,
        imgUrl : imageUrl.value,
        rating : rating.value,
        id : uuidv4(),
    }
    movieArray.push(movieObj);
    localStorage.setItem('setData', JSON.stringify(movieArray));
    templating(movieArray);
   
    backDrop.classList.remove('show');
    myModal.classList.remove('show');
    // title.value='';
    // imageUrl.value ='';
    // rating.value = '';
    movieForm.reset();
    
}
const onEditHandler = (e) => {
    // cl("edit");
    // let getId = e.getAttribute("data-id");
    // cl(getId);
    let getId = e.dataset.id;
    localStorage.setItem("setID", getId);
    let editdata = movieArray.find(obj => obj.id === getId);
    title.value = editdata.title;
    imageUrl.value = editdata.imgUrl;
    rating.value = editdata.rating;
    toggleShowClass();
    addMovie.classList.add("d-none");
    updatemovie.classList.remove("d-none");
}

const onUpdateHandler = (eve) =>{
    let updatedID = localStorage.getItem("setID");
    // cl(updatedID);
    movieArray.forEach(obj =>{
        if(obj.id === updatedID){
            obj.title = title.value;
            obj.imgUrl = imageUrl.value;
            obj.rating = rating.value;
        }
    })
    localStorage.setItem('setData', JSON.stringify(movieArray));
    templating(movieArray);
    movieForm.reset();
    addMovie.classList.remove("d-none");
    updatemovie.classList.add("d-none");
    backDrop.classList.remove('show');
    myModal.classList.remove('show');

}
const onDeleteHandler = (ele) => {
    // cl("Delete");
    let deletedID = ele.dataset.id; //1
    let newMovieArray = movieArray.filter(obj => obj.id !== deletedID);
    cl(newMovieArray);
    localStorage.setItem("setData", JSON.stringify(newMovieArray));
    templating(newMovieArray);
}

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
// function toggleShowClass(e,nameOfClass){
//     e.classList.toggle(nameOfClass);
// }

function toggleShowClass(){
    backDrop.classList.toggle('show');
    myModal.classList.toggle('show');
}

function templating(arr){
    let result='';
    arr.forEach(obj => {
        result += `
                <div class="col-md-4">
					<div class="card mb-4">
						<div class="card-body">
							<h5>${obj.title}</h5>
							<img class='img-fluid' src="${obj.imgUrl}" alt="">
							<span>${obj.rating}/5</span>
                            <span class="editDelete">
                            <i class="far fa-edit" data-id=${obj.id} onclick="onEditHandler(this)"></i>
                            <i class="fas fa-trash-alt" data-id=${obj.id} onclick="onDeleteHandler(this)"></i>
                            </span>
						</div>
					</div>
				</div>
        `
    });
    info.innerHTML=result;
}

showModal.addEventListener('click', showModalHandler);

myCloseBtns.forEach(btn => {
    btn.addEventListener('click', onCloseHandler);
})
movieForm.addEventListener('submit', addMovieHandler);

updatemovie.addEventListener("click", onUpdateHandler);