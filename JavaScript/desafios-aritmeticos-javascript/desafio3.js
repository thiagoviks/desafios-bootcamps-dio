let arr = [];

for (let i = 0; i < 10; i++) {
  arr[i] = gets();
  console.log(`X[${i}] = ${arr[i] <= 0 ? 1 : arr[i]}`);
}

//outra possivel solucao
/*
const n = Array.from(Array(10), () => +gets());

for (let i = 0; i < 10; i++) {
  console.log(`X[${i}] = ${n[i] <= 0 ? 1 : n[i]}`);
}
*/
