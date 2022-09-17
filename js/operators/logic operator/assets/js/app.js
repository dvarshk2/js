//------ equality operator -----------------
var cl= console.log;
var x=10;
var y=10;
var z='10';
var q=20;
var p='20';

var result= (x==y);
cl(result);

// double equal to (==) checks only value not data type

result=(x==z);
cl(result); //data type not checked

result=(x==q);
cl(result);

result=(x==p);
cl(result);

//------- Strictly equal to (===) -------------

result=(x===y);
cl(result);

result=(x===z);
cl(result);

result=(x===q);
cl(result);

var a=20;
var b=20;
var c='20';
var d=30
var e='30';

result=(a==b);
cl(result);

cl(a==c);

cl(a==d);

cl(d==e);

cl(a===b);//true

cl(a===c);//false

cl(a===d);//false

cl(d===e);//false

var i='15';
var j=15;
var k=20;
var l='20';
var m=15;

cl(i==j);//true

cl(i==k);//false
cl(j==m);//true

cl(i===j);//false;
cl(i===k);//false
cl(i===l);//false
cl(j===m);//true

var p=100;
var q=100;
var r='100';
var s=200;
var t='200';

cl(p==q);//true
cl(p===q);//true
cl(p==r);//true
cl(p===r);//false
cl(p==s);//false
cl(p===s);//false
cl(p==t);//false
cl(p===t);//false
cl(s==t);//true
cl(s===t);//false

// ----------- Not equal to (!=) -------------
//not equal to only checks value not data type
var x=10;
var y=10;
var z='10';
var q=20;
var p='20';

cl(x!=y);//false 
cl(x!=z);//false
cl(x!=q);//true
cl(x!=p);//true
cl(q!=p);//false

//--------Strictly not equal to>>It checks both value and data type
cl(x!==y);//false
cl(x!==z);//true
cl(x!==q);//true
cl(x!==p);//true
cl(p!==q);//true

var a=20;
var b=20;
var c='20';
var d=30
var e='30';

cl(a!=b);//false
cl(a!==b)//false
cl(a!=c);//false
cl(a!==c);//true
cl(a!=d);//true
cl(a!==d);//true
cl(a!=e);//true
cl(a!==e);//true
cl(d!=e);//false
cl(d!==e);//true

var i='15';
var j=15;
var k=20;
var l='20';
var m=15;

cl(j!=k);//true
cl(j!==k);//true
cl(j!=i);//false
cl(j!==i);//true
cl(j!=l);//true
cl(j!==l);//true
cl(j!=m);//false
cl(j!==m);//false
cl(k!=l);//false
cl(k!==l);//true

var p=100;
var q=100;
var r='100';
var s=200;
var t='200';
cl(p!=q);//false
cl(p!==q);//false
cl(p!=r);//false
cl(p!==r);//true
cl(p!=s);//true
cl(p!==s);//true
cl(s!=t);//false
cl(s!==t);//true

//less than, greater than
cl(p<=q);//true
cl(p>=q);//true
cl(p<q);//false
cl(p>q);//false
cl(s>p);//true
cl(p<s);//true
cl(s<=t);//true
cl(s>=t);//true
cl(x>y);//false
cl(x<y);//false
cl(x<=y);//true
cl(x>=y);//true
cl(x<=q);//true
cl(x>=q);//false
cl(x<=p);//true
cl(x>=p);//false
cl(p<=q);//true
cl(p>=q);//true

var flag=true;
var antiflag=!flag;
cl(antiflag);//false

cl(!antiflag);//true

var correct=true;
var wrong=!correct;//false
cl(wrong);
cl(!wrong);//true

//--------AND operator && ---------

result=(x<=y)&&(p>=q);//true&&true ==true
cl(result);//true

result=(x>y)&&(p>q); //false&&false ==false
cl(result);//false

result= (x==q)&&(p==q); //false&&true==false
cl(result);//false

result=(x==q)&&(p!=q);//true&&false==false
cl(result);//false

//********* OR Operator (||)--------
result=(x==y)||(x>=y); //true||true == true
cl(result);//true

result=(x>y)||(x==y);//false||true==true
cl(result);

result=(q>x)||(q<x);//true||false==true
cl(result);

result=(x<y)||(x>y);//false||false==false
cl(result);

var i='15';
var j=15;
var k=20;
var l='20';
var m=15;

//AND Operator
cl((i<=j)&&(i>=j));
cl((i<k)&&(i>=k));
cl((k>l)&&(k==l));
cl((i===j)&&(l===k));

//OR operator

cl((j===m)||(i==j));
cl((j<k)||(m>l));
cl((i>j)||(k==l));
cl((i===j)||(k===l));

a=10;
b=20;
c=30;
d=40;
//AND Operator
var att=((a*d)===(b*b))&&((b*c)===((a+b)*b));
cl(att);
var atf=(b/a==2)&&(c/b==2);
cl(atf);
var aft=(d/b!=2)&&(d/b==2);
cl(aft);
var aff=((c-a)!=b)&&(a*b)!==d*5;
cl(aff);

//OR operator
cl(a,b,c,d);
var ott=(a==10)||(b*2==d);
cl(ott);
var otf=((a+b)==c)||a==b;
cl(otf);
var oft=((a+b+10)==410)||(b==(a+a));
cl(oft);
var off=(a==b)||(c==d);
cl(off);