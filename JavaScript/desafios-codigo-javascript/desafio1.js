const input = gets();

const salary = parseFloat(input);

let percent = 0;
//let reajust, newSalary;

if ( salary >= 0 && salary <= 400.0 ) {
  //reajust = salary * 0.15;
 // newSalary = salary + reajust;
  percent = 15;
} else if ( salary >= 400.01 && salary <= 800.0  ) {
  reajust = salary * 0.12;
  newSalary = salary + reajust;
  percent = 12;
} else if ( salary >= 800.01 && salary <= 1200.0   ) {
 // reajust = salary * 0.10;
 // newSalary = salary + reajust;
  percent = 10;
} else if ( salary >= 1200.01 && salary <= 2000.0  ) {
 // reajust = salary * 0.07;
 // newSalary = salary + reajust;
  percent = 7;
} else {
 // reajust = salary * 0.04;
  //newSalary = salary + reajust;
  percent = 4;
}

const reajust = (percent/100)*salary;
const newSalary = salary + reajust;
console.log("Novo salario: " + newSalary.toFixed(2));
console.log("Reajuste ganho: " + reajust.toFixed(2));
console.log("Em percentual: " + percent + " %");
