let a = 12;
let b = 8;
let c = 4;

let adição = a + b;

let subtração = a - b;

let multiplicação = a * b;

let divisão = a / b;

let módulo = a % b;



if (a > b) {
    console.log("a é maior que b");
} else {
    console.log("b é maior que a");
}


if (a > b && a > c){
    console.log("a é maior que b e c");
} else if (b > a && b > c){
    console.log("b é maior que a e c");
} else if (c > a && c > b){
    console.log("c é maior que a e b");
}


if (a >= 1){
    console.log("Positive");
} else if (a <= -1){
    console.log("Negative");
} else if (a == 0){
    console.log("Zero");
}


let anguloA = 25;
let anguloB = 100;
let anguloC = 25;

let somaDosAngulos = anguloA + anguloB + anguloC;
let angulosPositivos =  anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosPositivos){
    if (somaDosAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else { 
    console.log("Erro: ângulo inválido!");
}


let chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};



let nota = 15;
if (nota < 0 || nota > 100){
    console.log("Erro, nota incorreta.")
} else if (nota >= 90){
    console.log("A");
} else if (nota >= 80){
    console.log("B");
} else if (nota >= 70){
    console.log("C");
} else if (nota >= 60){
    console.log("D");
} else if (nota >= 50){
    console.log("E");
} else {
    console.log("F");
}



