let cl = console.log;

// API  >> APllication programming Interface
// PWA >> Progressive web application 

// before webstorages we use cookies in browser

// Cookies>> store data in browser 24-26kb
// webstorages>> it is api given by HTML5. Can store data upto 5 MB 
// it works as interface for server and client


// Webstorages>> 1. Local Storage 2. Session Storage 
// Local storage>> Data stored forever
// Session storage>> data will be aito deleted as soon as session expired

// Node.js >> blob datatype(Multimedia Data) 
// java>> Internet Banking


// JSOn >> javaScript Object Notation, before JSON XML was used

// DataBase /webstorage can only understand JSON 
// js engine/browser can only understand js obj 

// sending obj to database
//to convert js obj to JSON we use JSON.stingify(jsobj);

let jsobj ={
    fname: "Ravikiran",
    lname: "Niturkar",
    contact: 123456,
    email: "Ravi@nitur",
}
cl(jsobj);

// send jsobj to database 
let jsonObj = JSON.stringify(jsobj);
cl(jsonObj);


// when we get data from database/webstorage it is in JSON format 
// to convert JSON data into js object we use JSON.parse(JSONObject)

let backToJSobj = JSON.parse(jsonObj);
cl(backToJSobj);

// sending json object to local storage
localStorage.setItem('setObject', jsonObj);

//get object from data base/localstorage

let getObject = localStorage.getItem('setObject');
cl(getObject);

getObject = JSON.parse(localStorage.getItem('setObject'));
cl(getObject);

document.write(`${getObject.fname} ${getObject.lname} : From Local Storage <br>`); 

sessionStorage.setItem('setSessionData', jsonObj);

let getSessiondata = JSON.parse(sessionStorage.getItem("setSessionData"));
cl(getSessiondata);
document.write(`${getSessiondata.fname} ${getSessiondata.lname} : from session storage`); 