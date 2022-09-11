//* while Loop

const no_prompt = 500;
const data_prompt = "dataVa";

let data_state = 0;
while (data_state < no_prompt) {
  console.log(data_state);
  data_state++;
}

//+ do while loop

let num = 20;
let changeNum = 10;

do { //! block : run after checking
  console.log(num);
  changeNum++;
} while (num > changeNum); //! condition : check at first time 

//! Watch it again about whileloop //