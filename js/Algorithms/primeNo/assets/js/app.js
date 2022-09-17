let cl=console.log;
//check 7 is prime no?
	// 7%1==0
	// 7%2!=0  //divider=2;
	// 7%3!=0
	// 7%4!=0
	// 7%5!=0
	// 7%6!=0  //divider< number
	// 7%7==0


function isPrime(n){
	let divider=2;
	while(divider<n){
		if(n%divider == 0){
			return(`${n} is not prime`);
		}else{
			divider++;
		}
	}
	return(`${n} is prime`);
}

cl(isPrime(8));
cl(isPrime(11));
cl(isPrime(12));
cl(isPrime(13));
cl(isPrime(15));


function primeNo(n){
	let divider = 2;
	while(divider < n){
		if(n % divider === 0){
			return `${n} is not prime no`;
		}else{
			divider++;
		}
	}
	return `${n} is prime no`
}
console.log(primeNo(3));
console.log(primeNo(10));
console.log(primeNo(19));
console.log(primeNo(21));
console.log(primeNo(43));

let obj = {
	name: 'Varsh',
	address : {
		city:'Basmath'
	}
}

let obj1 = {...obj};

obj1.name = 'ketu';
obj1.address.city = 'purna';
cl(obj1);
// cl(obj)

let obj2 = JSON.parse(JSON.stringify(obj))

 obj2.address.city= 'poona';
 cl(obj2)
 cl(obj);