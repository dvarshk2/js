let cl = console.log;

let baseURL = 'http://localhost:3000/posts';
const data = document.getElementById('data');
const postForm = document.getElementById('postForm');
const title = document.getElementById('title');
const info = document.getElementById('info');
const submitBtn = document.getElementById('submitBtn');
const updateBtn = document.getElementById('updateBtn');

let postArray = [];

function makeAPIcall(methodName, url, body){
  return fetch(url, {         //fetch returns promise
    method: methodName,
    body : body,
    headers: {
      'content-type':'application/json; charset=UTF-8',
      'Authorization' : 'Bearer Token qwertyuiop'
    },
  }).then(res => res.json())    // json method also returns promise
}
// function getPost(){
//   fetch(baseURL)  // fetch api returns promis
//   .then(response => response.json())    // json also returns promise
//   .then(json => {
//     //   cl(json)
//       postArray = json;
//       templating(json);
//   })
//   .catch(err => cl(err))
// }

async function getPost(){
  // let responseData = await makeAPIcall('GET', baseURL);
  // templating(responseData);
  try{
    let responseData = await makeAPIcall('GET', baseURL);
    postArray = responseData;
    templating(postArray);
  }catch(err){
    cl(err);
  }
}
const onEditHandler = ele => {
  let getId = +ele.dataset.id;
  localStorage.setItem('setid', getId);
  // cl(getId);
  // let getObj = postArray.filter(obj =>{
  //   return obj.id === getId;
  // })
  // cl(getObj[0]);
  let getObj = postArray.find(obj => obj.id === getId);
  cl(getObj);
  title.value = getObj.title;
  info.value = getObj.body;
  submitBtn.classList.add('d-none');
  updateBtn.classList.remove('d-none')
}
const onupdateHandler = ele => {
  let getId = localStorage.getItem('setid');
  let updateUrl = `${baseURL}/${getId}`;
  let updateObj = {
    title : title.value,
    body: info.value,
  }
  cl(updateObj);
  try{
  makeAPIcall("PATCH", updateUrl, JSON.stringify(updateObj));
  }catch(err){
    cl(err);
  }
}
const onDeleteHandler = ele => {
  let getId = ele.getAttribute('data-id');
  confirm('Are you sure!!!')
  if(confirm){
    let deleteUrl = `${baseURL}/${getId}`;
  try{
  makeAPIcall('DELETE', deleteUrl);
  }catch(err){
    cl(err);
  }
  }
}
getPost();
function templating(arr){
      let result = '';
      arr.forEach(ele => {
          result += `
          <div class="card mb-4">
            <div class="card-body">
                <h3>${ele.title}</h3>
                <p>${ele.body}</p>
                <p class="text-right">
                    <button class="btn btn-success" data-id=${ele.id} onclick ="onEditHandler(this)">Edit</button>
                    <button class="btn btn-danger" data-id=${ele.id} onclick = "onDeleteHandler(this)">Delete</button>
                </p>
            </div>
         </div>
          `;
      });
      data.innerHTML = result;
}

async function onSubmitHandler(e){
    // e.preventDefault();
    let obj = {
        userId : Math.ceil(Math.random() * 10),
        title : title.value,
        body : info.value,
      }
      cl(obj);
      postArray.push(obj);
      cl(postArray)
    //   templating(postArray);
      postForm.reset();
      // fetch(baseURL, {
      //     method :'POST',
      //     body : JSON.stringify(obj),
      //     headers: {
      //         'Content-type' : 'application/json; charset = UTF-8',
      //         Authorization : 'Bearer Token qwertyuiop',
      //     }
      // }).then(res => res.json())
      // .then(data => cl(data))
      // .catch(cl);
      // let responseData = await makeAPIcall('POST', baseURL, JSON.stringify(obj));
      try{
      let responseData = await makeAPIcall('POST', baseURL, JSON.stringify(obj));
      }catch(err){
        cl(err);
      }
}


updateBtn.addEventListener('click', onupdateHandler)
postForm.addEventListener('submit', onSubmitHandler)