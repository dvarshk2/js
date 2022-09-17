let cl = console.log;

let d= new Date(1991, 4, 10);
	cl(d);
function dayD(d){
	
	const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	let dDay = d.getDay();
	if(dDay === 6 || dDay === 0){
		alert(`WeekEnd`);
	}else{
		alert(`Week day`);
	}
}
d= new Date(2022, 2 , 11);
dayD(d);