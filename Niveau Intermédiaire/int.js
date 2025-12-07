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


