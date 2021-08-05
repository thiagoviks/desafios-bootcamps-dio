// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

const isSum = gets() === "S";

const xL = 12,
  yL = 12;

let sum = 0.0,
  av = 0.0;
  var M = [];
  let min =1;
  let max = 10;

for (var i = 0; i < 12; i++) {
  M[i] = [];
  for (var j = 0; j < 12; j++) {
    M[i][j] = Number(gets());

    if (i < 5 && j >= min && j <= max) {
      sum = sum + M[i][j];
    }
  }
  min++;
  max--;
}
if(isSum){
   console.log(sum.toFixed(1));
}
else {
   av = sum / 30;
  console.log(av.toFixed(1));
}

