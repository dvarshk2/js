let cl = console.log;
// CRUD
// c >> Create
// R >> read
// U >> Update
// D >> Delete
let apiURL ='https://jsonplaceholder.typicode.com/posts';
const data = document.getElementById('data');
const postForm = document.getElementById('postForm');
const title = document.getElementById('title');
const info = document.getElementById('info');
const submitBtn = document.getElementById('submitBtn');
const updateBtn = document.getElementById('updateBtn');
let postArray = [];


function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

function makeHTTPRequest(method, url, body){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onload = function(){
        if((xhr.status === 200 || xhr.status === 201) && xhr.readyState === 4){
            resolve(xhr.response);
        }else{
            reject('Something went wrong!!!')
        }
    }
    xhr.send(body);
    })
    
}

// makeHTTPRequest('GET', apiURL)
//                 .then(res => {
//                     cl(res);
//                     let data = JSON.parse(res);
//                     templating(data);
//                 })
//                 .catch(err => cl(err));

makeHTTPRequest('GET', apiURL)
                .then(res => {
                    postArray = JSON.parse(res)
                    templating(postArray)
                })
                // .then(res => templating(JSON.parse(res)))
                // .then(templating)
               
                // .catch(err => cl(err))
                .catch(cl);

const onEditHandler = ele => {
    // cl(ele);
    let getId = +ele.getAttribute('data-id');
    // cl(getId);
    localStorage.setItem('setId', getId);// primitive data type stringify not required
//     let getObj = postArray.filter(obj => {   //will get 
//         return obj.id === getId;
//     })
    // title.value = getObj[0].title;
    // info.value = getObj[0].body;
    let getObj = postArray.find(obj => obj.id === getId);
    cl(getObj);
    title.value = getObj.title;
    info.value = getObj.body;
    submitBtn.classList.add('d-none');
    updateBtn.classList.remove('d-none');
}
const onDeleteHandler = ele => {
    // cl(ele);
    let getId = +ele.getAttribute('data-id');
    let deleteUrl = `${apiURL}/${getId}`;
    cl(deleteUrl);
    let updatedData = postArray.filter( obj => obj.id != getId);
    templating(updatedData);
    makeHTTPRequest('DELETE', deleteUrl);
}
function templating(arr){
    // arr = JSON.parse(arr);
    let result ='';
    arr.forEach(ele => {
        result += `
        <div class="card mb-4">
            <div class="card-body">
                <h3>${ele.title}</h3>
                <p>${ele.body}</p>
                <div class="text-right">
                    <button class="btn btn-success"data-id="${ele.id}" onClick = "onEditHandler(this)">Edit</button>
                    <button class="btn btn-danger"data-id="${ele.id}" onClick = "onDeleteHandler(this)">Delete</button>
                </div>
            </div>
        </div>
        `
    });

    data.innerHTML =  result;
}
let onPostHandler = (eve) => {
    eve.preventDefault();
    let obj = {
        title : title.value,
        body : info.value,
        userId : Math.ceil(Math.random() * 10),
        id : uuidv4(),
    }
    cl(obj);
    postArray.push(obj);
    templating(postArray);
    postForm.reset();
    makeHTTPRequest('POST', apiURL, JSON.stringify(obj));
}
const onUpdateHandler = eve => {
    let obj = {
        title : title.value,
        body : info.value,
    };
    let updateId = +localStorage.getItem('setId');
    cl(updateId);
    postArray.forEach(ele => {
        if(ele.id === updateId){
            ele.title = title.value;
            ele.body = info.value;
        }
    })
    templating(postArray);
    let updateUrl = `${apiURL}/${updateId}`;
    updateBtn.classList.add('d-none');
    submitBtn.classList.remove('d-none');
    postForm.reset();
    makeHTTPRequest('PATCH', updateUrl, JSON.stringify(obj));
}



updateBtn.addEventListener('click', onUpdateHandler);
postForm.addEventListener('submit', onPostHandler);