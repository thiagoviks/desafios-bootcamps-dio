let opcaoUsuario = 1;
do{
let qtdeNotasValidas = 0;
let notas = [];
let cont = 0;
  
while(qtdeNotasValidas < 2) {
    
    cont++;
    const nota = parseFloat(gets());
    
    if (!nota) break;
    
    if (nota >= 0 && nota <= 10) {
        
        notas.push(nota)
        qtdeNotasValidas++;
    
    } else {
        
        console.log('nota invalida')
    
    }
}

const arraySum = arr => arr.reduce((acc, current) => acc + current)
const arrayMedia = arr => arraySum(arr) / arr.length

console.log("media = " + arrayMedia(notas).toFixed(2))
 
 do{
    console.log("novo calculo (1-sim 2-nao)");
    opcaoUsuario = parseFloat(gets())
   
 }while (opcaoUsuario != 1 && opcaoUsuario != 2);
  
} while(opcaoUsuario != 2);





