var cl=console.log;
cl('Array');

//first class function>> function which is stored as value.

var rollNo =[1,2,3,4,5,6,7,8,9];
cl(rollNo);

//count elements available in Array

cl("Length of array",rollNo.length);

// Index of array starts from zero
var get1=rollNo[0];
cl(get1);

var get5=rollNo[4];
cl(get5);

var get8 =rollNo[7];
cl(get8);

//Array>> can store multiple data/info on the basis of index Number

//change assigned value of index
cl("change asigned value of index");
rollNo[4]=18;
cl(rollNo);
document.write(rollNo);

//check type of Array
cl(typeof rollNo);

var student=["abhi","Suraj","Sudarshan","Kanhaiya","Bapurao","Chaitanya","Anita","Sneha"];
cl(student);
document.write(student);

cl(student[2]);

cl(student[6]);
cl(student[8]);
student[8]="pooja";
student[9]="Aarti";
cl(student);

var fed=["HTML", "CSS", "JS", "Angular", "node.js", "React", "mongoDB","Express.js"];
cl(fed);

delete fed[6];
cl(fed);
var fedLength=fed.length;
cl(fedLength);

fed[5]="BackEnd";
cl(fed);

fed[6]="Front End";
cl(fed);

fed[8]="UI Developer";
cl(fed);

var fedLength=fed.length;
cl(fedLength);

//prime no Array

var primeNo=[2,3,5,7,11,13,17,19];
cl(primeNo);
var primeNoLenghth=primeNo.length;
cl(primeNoLenghth);

primeNo[8]=23;
primeNo[9]=29;
cl(primeNo);
cl(primeNo.length);