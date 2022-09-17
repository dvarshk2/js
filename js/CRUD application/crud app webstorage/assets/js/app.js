let cl = console.log;

const stdInfoForm = document.getElementById('stdInfoForm');
// cl(stdInfoForm);
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const stdData = document.getElementById('stdData');
const submitBtn = document.getElementById('submitBtn');
const updateBtn = document.getElementById('updateBtn');

let stdArray = [];
if(localStorage.getItem('setStdInfo')){
    // stdArray = JSON.parse(localStorage.getItem('setStdInfo'));
    stdArray = getLocalData();
}

const onSubmitHandler = (eve) => {
    eve.preventDefault();
    // cl(eve);
    let obj ={
        getFname: fname.value,
        getLname: lname.value,
        getEmail : email.value,
        getContact : contact.value,
        id: uuidv4()
    }
    cl(obj);
    stdArray.push(obj);
    // cl(stdArray);
    // localStorage.setItem('setStdInfo', JSON.stringify(stdArray));
    setLocaldata(stdArray);
    stdInfoForm.reset();
    templating(stdArray);
};
function templating(arr){
    let result = "";
    arr.forEach((ele, i) => {
        result += `
        <tr>
            <td>${i + 1}</td>
            <td>${ele.getFname}</td>
            <td>${ele.getLname}</td>
            <td>${ele.getContact}</td>
            <td>${ele.getEmail}</td>
            <td>
                <button class='btn btn-success' data-id='${ele.id}' onclick="onEditHandler(this)">Edit</button>
            </td>
            <td>
                <button class='btn btn-danger' data-id='${ele.id}' onclick="onDeleteHandler(this)">Delete</button>
            </td>
        </tr>`
    });
    stdData.innerHTML = result;
};
// cl(stdArray)
templating(stdArray);

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

const onEditHandler = (ele) => {
    // cl('Edited!!!');
    // cl(ele);
    cl(ele.getAttribute('data-id'));
    updateBtn.classList.remove("d-none");
    submitBtn.classList.add("d-none");
    let getId = ele.getAttribute('data-id');
    localStorage.setItem('setId', getId);
    let getData = getLocalData();
    // cl(getData);
    let getObj = getData.filter( ele => ele.id === getId);
    cl(getObj);
    fname.value = getObj[0].getFname;
    lname.value = getObj[0].getLname;
    email.value = getObj[0].getEmail;
    contact.value = getObj[0].getContact; 
};
const onDeleteHandler = (eve) => {
    // cl('Deleted!!!');
    let getId = eve.getAttribute('data-id');

    let getData = getLocalData();

    let newData = getData.filter( ele => ele.id !== getId);
    templating(newData);
    // localStorage.setItem('setStdInfo', JSON.stringify(newData));
    setLocaldata(newData);
};
const onUpdateHandler = (eve) => {
    cl(eve.target);
    let getId = localStorage.getItem('setId');
    // cl(getId);
    let getData = getLocalData();
    // cl(getData);

    getData.forEach( ele => {
        if(ele.id === getId){
            ele.getFname = fname.value;
            ele.getLname = lname.value;
            ele.getEmail = email.value;
            ele.getContact = contact.value;
        }
    })
    // localStorage.setItem('setStdInfo', JSON.stringify(getData));
    setLocaldata(getData);
    templating(getData);
    stdInfoForm.reset();
    updateBtn.classList.add("d-none");
    submitBtn.classList.remove("d-none");
}

function getLocalData(){
    return JSON.parse(localStorage.getItem('setStdInfo'));
}
function setLocaldata(arr){
    localStorage.setItem('setStdInfo', JSON.stringify(arr));
}

stdInfoForm.addEventListener('submit', onSubmitHandler);
updateBtn.addEventListener('click', onUpdateHandler)
