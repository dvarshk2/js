let cl= console.log;

//find factorial of any no
//-4! >> factorial of -ve no does not exist
//0! >> factorial of 0 is 1

function findFactorail(n){
	//if Number is negative
	if(n < 0){
		cl(`Factorail of ${n} does not exist`);
	}
	//if number is zero
	if(n == 0){
		cl(`Factorail of ${n} is 0`);
	}
	//if number is positive
	if(n > 0){
		let factNo = 1;
		for(i = 1; i <= n; i++){
			factNo = factNo*i;
		}
		cl(`Factorial of ${n} is ${factNo}`);
	}
}
findFactorail(2);
findFactorail(3);
findFactorail(4);
findFactorail(5);

function factorial(num){
	if(num < 0){
		return `Factorial of ${num} does not exist`;
	}else if(num === 0){
		return `Factorial of ${num} is 1`;
	}else{
		let fact= 1;
		for(j = 1; j <= num ; j++){
			fact *= j;
		}
		return `Factorial of ${num} is ${fact}`;
	}
}

cl(factorial(5));
cl(factorial(4));
cl(factorial(6));

//find factorial without using for Loop
// recursive function >> A function call himself
function withoutLoopFactorial(no){
	if(no < 0){
		return `Factorial of ${no} does not exist`;
	}else if(no === 0){
		return `Factorial of ${no} is 1`;
	}else if( no === 1){
		return 1;
	}else{
		return no*withoutLoopFactorial(no - 1);
	}
}

cl(withoutLoopFactorial(-4));
cl(withoutLoopFactorial(0));
cl(withoutLoopFactorial(2));
cl(withoutLoopFactorial(3));
cl(withoutLoopFactorial(5));