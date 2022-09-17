var cl=console.log;
//cl('hello');

var person={
	fname:'Varshketu',
	lname:'Dadhale',
	country:'India',
	fullName: function(){
		return person.fname+' '+person.lname;
	},
	pari:{
		fname:'Vaidehi',
		lname:'Jawlekar',
		fullName: function(){
			//return person.pari.fname+' ' +person.pari.lname;
			return this.fname+' ' +this.lname;
		},
		mona:{
			fname:'Shubhra',
			lname:'Patil',
			fullName: function(){
				//return person.pari.mona.fname+' ' +person.pari.mona.lname;
				return this.fname+' '+this.lname;
			}
		}
	},
}

//this within object method>> it always points to closest parent object

cl(person.fullName());
cl(person.pari.fullName());
cl(person.pari.mona.fullName());
//cl(this.fullname());

var person2={
	fname:'Nivruti',
	lname:'Narwade',
	fullName: function(){
		return this.fname+' '+this.lname;
	},
	barka:{
		fname:'Gokarna',
		lname:'Dadhale',
		fullName: function(){
			return this.fname+' ' +this.lname;
		},
		pari:{
			first:'Vaidehi',
			middle:'Varshketu',
			last:'Dadhale',
			fullName:function(){
				return this.first+' ' +this.middle+' ' +this.last;
			},
		},
	},
}

cl(person2.barka.pari.fullName());
cl(person2.barka.fullName());
cl(person2.fullName());

var harry={
	first:'Haribhau',
	last:'raut',
	fullName: function(){
		return this.first+' '+this.last;
	},
	spouse:{
		fname:'Manju',
		lname:'Raout',
		fullName:function(){
			return this.fname+' '+this.lname;
		},
		daughter:{
			first:'Avni',
			middle:'Hari',
			fullName:function(){
				return this.first+' '+this.middle;
			}
		},
	},
}
cl(harry.spouse.daughter.fullName());
cl(harry.spouse.fullName());
cl(harry.fullName());