numero = Array(5);

numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();

pares = numero.filter((number) =>  Math.abs(number) % 2 === 0 );
impares = numero.filter((number) => Math.abs(number) % 2 === 1 );

positivos = numero.filter((number) =>  number > 1);
negativos = numero.filter((number) =>  number < 0);

print(pares.length + " valor(es) par(es)");
print(impares.length + " valor(es) impar(es)");

print(positivos.length + " valor(es) positivo(s)");
print(negativos.length + " valor(es) negativo(s)");
