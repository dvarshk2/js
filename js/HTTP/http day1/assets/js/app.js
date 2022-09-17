let cl = console.log;

let baseURL = 'https://jsonplaceholder.typicode.com/posts'; //api>> application programming interface
let info = document.getElementById('info');
//GET >> to get data from database
//POST >> to send data to database
//DELETE >> to remove obj/instances from database
//PATCH >> to udate data partially from database
//PUT >> to udate data/ object in database

// 1 create instance
let xhr = new XMLHttpRequest();

//2 open method
xhr.open('GET', baseURL, true)

// GET >> method name
// baseURL >> API Link
// True >> aync value bydefault it is true

// 3 onload method
xhr.onload = function(){
    if(xhr.status === 200 && xhr.readyState === 4){
    // cl(xhr.response); // xhr>> Obj, response >> property
    let data = JSON.parse(xhr.response);
    cl(data);
    templating(data);
    }
}

//4 send
xhr.send();

//xhr.status

//200 >> http call is successful
//404 >> URL not found
// 503 >> service not available
//403 >> forbidden

function templating(arr){
    let result = '';
    arr.forEach(ele => {
        result += `
        <tr>
            <td>${ele.id}</td>
            <td>${ele.title}</td>
            <td>${ele.body}</td>
        </tr>
        `
    });
    info.innerHTML = result;
}
