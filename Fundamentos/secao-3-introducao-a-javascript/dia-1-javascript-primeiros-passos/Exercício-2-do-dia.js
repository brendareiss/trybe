let a = 12;
let b = 8;
let c = 4;


let impar = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !==0)) {
    impar = true;
} 

console.log(impar);



let valorCusto = 1;
let valorVenda = 3;

if (valorCusto >= 0 && valorVenda >= 0) {
  let valorCustoTotal = valorCusto * 1.2;
  let lucroTotal = (valorVenda - valorCustoTotal) * 1000;
  console.log(lucroTotal);
} else {
  console.log("Error, os valores não podem ser negativos!");
};

