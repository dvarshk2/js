let cl= console.log;

// alert("Hello");//gives information to user only ok btn available
// confirm("Confirm Details");//ask confirmation to user two btn ok n cancel
// prompt("Prompt ");

cl("fibonance series");

let fibArr = [];
for(i=0;i< 10;i++){
	if(i==0){
		fibArr[i] = 0;
		fibArr[i + 1]=1;
	}
	fibArr.push(fibArr[i] + fibArr[i + 1]);
}
cl(fibArr);

let fibCount = (firstNum, length) => {
	let fbArray = [];
	for(i=0; i < length;i++){
		if(i==0){
			fbArray[i] = firstNum;
			fbArray[i + 1] = firstNum + 1;
		}
	fbArray.push(fbArray[i] + fbArray[i+1]);
	}
	return fbArray;
}

cl(fibCount(1,10));
cl(fibCount(0,10));