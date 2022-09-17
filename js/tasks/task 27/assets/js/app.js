let cl = console.log;

let states = ["TamilNadu",'Aasam', 'Bihar', 'Maharashtra', 'Gujrat', 'Andra Pradesh'];

// for(i=0;i < states.length;i++){
//     cl(`${states[i]} is Indian state`)
// }

function string(state){
    for(i=0; i < state.length; i++){
        cl(`${state[i]} is Indian State`);
    }
}

string(states);

let sta=['Karnatak',"Manipur","Arunachal",'Meghalay'];
string(sta);