var cl=console.log;
cl("Coercion of Data Types");

var x="John";
var y=33;

cl(typeof x,x);// string John
cl(typeof y,y);// number 33	

var z=x+y;
cl(z);// John33 string>>> Number converted into string

//Coercion>>> conversion of one datatype into another is called coercion
var p=10;//number
var q=true;//Boolean

var r=p+q;
cl(r, typeof r);//11 number >> true is converted into number i.e. 1
// Boolean coerciondone
var q= false;
r=p*q;
cl(r, typeof r);//0 number>> coercion of Boolean done

var x="John";
var y=33;
var s;

var result=x+y+s;
cl(result, typeof result);//John33undefined string

//undefined null

// string & Number
var a="abc";
var b=12;
var c= a+b;
cl(c);

a= 12;
b="xyz";
c=a+b;
cl(c);

var p="PQR";
var q=90;
var r=p+q;
cl(r);

p=60;
q="uvw";
r=p+q;
cl(r);
//Number coercion done

//string Boolean
a="abc";
b=true;
c=a+b;
cl(c, typeof c);//[abctrue string]

cl(a*b, typeof(a*b));//[NaN number]

a= false;
b="xyz";
c=a+b;
cl(c, typeof c);

cl(a/b, typeof (a/b));

//String undefined
var a="abc";
var t;
cl(t);
c=a+t;
cl(c, typeof c);

//string null
b=null;
a="abc";
c=a+b;
cl(c, typeof c);


// no & Boolean 
a=110;
b=true;
c=a+b;
cl(c);

cl(a*b);

a=false;
b=300;
c=a*b;
cl(c);

cl(a+b);
//coercion of Boolean done

//number undefined
a=110;
var t;

c=a+t;
cl(c, typeof c);
cl(a/t);

//Number null
a=110;
b=null;
cl(b);
c=a+b;
cl(c, typeof c);



//Boolean & undefined
a=true;
cl(a);
var d;
cl(d);
c=a+d;
cl(c);//NaN

cl(a*d);

p=false;
var t;
cl(t);

cl(p/t);//NaN

//Boolean null
a=true;
b=null;
c=a+b;
cl(c, typeof c);//coercion of null done

p=false;
var j=b+p;
cl(j, typeof j);


//undefined & null

var a=null;
var t;
cl(a+t);//NaN

cl(a*t);
