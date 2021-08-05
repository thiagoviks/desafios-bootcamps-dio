
const input = parseInt(gets());
const N = [];
N[0] = input;

for (let i=1; i <10; i++) {
    N[i] = N[i-1] * 2;
  }
  for (let i=0; i <10; i++) {
    console.log("N["+ i +"] = " + N[i]);
  }
   
