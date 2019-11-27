/*function calcularBhaskara(a,b,c){
  let delta = b**2 - 4*a*c;
  console.log('delta:' + delta);
  
  let x1 = (-b + Math.sqrt(delta)) / (2*a);
  let x2 = (-b - Math.sqrt(delta)) / (2*a);
  
  console.log("x1 = " + x1, "x2 = " + x2);
}
calcularBhaskara(1,5,4); 
let a;
let b;
let c;
function calcularDelta(a,b,c){
  
  let delta = b**2 - 4*a*c;
  return delta;
}
function calcularX1(a,b,delta){
   let x1 = (-b + Math.sqrt(delta)) / (2*a);
  return x1;
}
function calcularX2(a,b,delta){
  let x2 = (-b - Math.sqrt(delta)) / (2*a);
  return x2;
}
a = prompt("Defina o valor do coeficiente A.")
b = prompt("Defina o valor do coeficiente B.")
c = prompt("Defina o valor do coeficiente C.")
let delta = calcularDelta(a,b,c);
let x1 = calcularX1(a,b,delta);
let x2 = calcularX2(a,b,delta);
console.log('Seu delta é: ' + delta, 'O valor de x1 é: ' + x1, 'O valor de x2 é: '+ x2) */


let idade = prompt("Digite sua idade.");

function calcularIdade(idade){
  let dias = idade*365.25
  console.log("Você viveu " + dias + " dias.")
  return dias
}

let bpm = prompt("Escreva sua quantidade de batidas média por minuto.")

function calcularBatidasDia(bpm){
    let batidas = bpm*60*24;
  
    console.log("Seu coração bate "+ batidas + " vezes por dia.")
}

function calcularBatidasVida(bpm){
  
    let batidasVida = bpm*60*24*valorDias;
  
    console.log("Seu coração já bateu "+ batidasVida + " vezes na vida (é muito, viado...).")
}


let valorDias = calcularIdade(idade)
calcularBatidasDia(bpm);
calcularBatidasVida(bpm);

