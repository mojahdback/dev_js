// 1. Inverser le tableau
// A: .reverse()
const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];

const reverse = data.reverse();

console.log(reverse);

//  B: boucle + swap

const reversed= [];

for(let i = data.length -1 ; i >= 0 ; i--){

    reversed.push(data[i]);

}
for(let i=0 ; i< reversed.length ; i++){
    console.log(reversed[i]);
}

// Trier le tableau en ordre croissant

const sortASC =  data.sort((a,b) => a - b);
console.log(sortASC);

//B: implémenter bubble sort
let j ,i ;

for(i=0 ; i<data.length -1 ;i++){
    for(j= i + 1; j<data.length  ;j++){
        if(data[i] > data[j]){
            let temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
    }
}

for(i=0 ; i<data[i] ; i++){
    console.log(data[i]);
}

// Trier en ordre décroissant

const sortDESC =  data.sort((a,b) => b - a);

console.log(sortDESC);

// sorting manuel
for(let i=0 ; i<data.length -1 ;i++){
    for(let j= i + 1; j<data.length  ;j++){
        if(data[i] < data[j]){
            let temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
    }
}

for(let i=0 ; i<data[i] ; i++){
    console.log(data[i]);
}

// Convertir tous les nombres en chaînes de caractères

const changeToString =  data.map(String);

console.log(changeToString);

//boucle + String()

let stringData =[];

for(let i = 0; i< data.length ;i++){
    stringData[i] = String(data[i]);
}

console.log(stringData);

//Extraire uniquement les nombres situés aux index pairs
// **** A
    const indexPairs = data.filter((num, index )=> index % 2 === 0 );

    console.log(indexPairs);

// **** B 
    for(let i = 0 ; i< data.length ;i++){
     if(i % 2 === 0){
        console.log(data[i]);
     }
    }

// Trouver l’index d’un élément use findIndex()
const indexFound = data.findIndex(num  => num === 56);

console.log(indexFound);
// use loops
    
let foundIndexElement = 65;

let found = 0;

for(let i =0 ;i< data.length ;i++){
    if(foundIndexElement === data[i]){
        found = i;
        break;
    }
    else{
        found = -1;
    }
}

if(found === -1 ){
      console.log(found);
  
}
else{
    console.log("this number in index : " + found);
}

//  Supprimer les doublons dans un tableau use new set()
 
const myset = new Set(data);

console.log(myset);

// use loops

const uniqueList = [];

for(let value of data){
    let deplicate = false;
    for(let unValue of uniqueList){
        if(value === unValue){
            deplicate = true;
            break;
        }
       
    }
    if(!deplicate){
        uniqueList.push(value);
    }

}

console.log(uniqueList);

// Séparer le tableau en deux : pairs / impairs
const tPairs = [];
const tImpairs = [];

data.filter(num => num % 2 === 0 ? tPairs.push(num) : tImpairs.push(num));

console.log(tPairs);
console.log(tImpairs);
// use loop

let pairsTable = [];
let impairsTable = [];

for(let value of data){
    if(value % 2 === 0){
        pairsTable.push(value);
    }
    else{
        impairsTable.push(value);
    }
}

console.log(pairsTable);
console.log(impairsTable);

// Extraire les 5 premiers éléments

const part = data.slice(0 , 5);

console.log(part);

// With loop 

let fiveElement = [];

let k =0;

while(k < 5 ){
    fiveElement.push(data[k]);
    k++;
}

console.log(fiveElement);

// . Extraire les 5 derniers éléments

const partFin = data.slice(-5);

console.log(partFin);

// les 5 derniers éléments utilse boucle

let derniersElement = [];

let t = data.length -5 ;

while(t < data.length ){
    derniersElement.push(data[t]);
    t++;
}

console.log(derniersElement);

// Créer un tableau contenant uniquement les carrés des nombres

const carre = data.map(num => num * num);
console.log(carre);

// using loop 

let arrCary = [];
for(let value of data){
    arrCary.push(value * value);
}

console.log(arrCary);

// Supprimer tous les éléments inférieurs à 10

let topThenTen= data.filter(num => num > 10)

console.log(topThenTen);

// use loop + push

let arr = [];

for(let value of data){
    if(value > 10 ){
        arr.push(value);
    }
}
console.log(arr);