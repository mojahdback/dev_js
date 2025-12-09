// Calculer le produit de tous les nombres
const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];

const produit = data.reduce((acc , value)=> acc * value,1);

console.log(produit);

// use loop
let total = 1;

for(let value of data){
    total *= value ;
}

console.log(total);

// Générer un tableau cumulatif

let cum = [];

data.reduce((acc , v) => cum.push(acc + v) );

console.log(cum);
// use loop 

let result = [];
let sum = 0 ;
for(let i=0 ; i< data.length ;i++){
    sum += data[i];
    result.push(sum);
}

console.log(result);
