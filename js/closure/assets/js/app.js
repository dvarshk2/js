let cl = console.log;


function outerFunction(){
    let x = 10;
    return function innerFunction(){
        return x;
    }
}

// cl(x);//[X is not defined]

let fun1 = outerFunction();
cl(fun1);// returns innerfunction

let fun2 = fun1();
cl(fun2); // returns x

//closure >> when we returns a function inside another function

// inner function creates a scope called as 'Lexical Scope' and 
// innerfunction can access all the data of that scope

//lexical scope >> scope of parent

//closure >> a function with it's lexical scope is called as Closure