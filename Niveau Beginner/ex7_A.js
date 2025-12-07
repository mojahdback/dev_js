const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];

const sum = data.reduce((acc, value) => {
     return acc +  value;    
},0);

let moyen = sum / data.length;

console.log(moyen); 
