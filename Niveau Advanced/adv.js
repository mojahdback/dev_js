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

data.reduce((acc , v) => {
    const s = acc + v 
    cum.push(s);
    return s;
},0);

console.log(cum);

// use loop 

let result = [];
let sum = 0 ;
for(let i=0 ; i< data.length ;i++){
    sum += data[i];
    result.push(sum);
}

console.log(result);

//  Créer un tableau avec les nombres uniques triés

const array = [12, 5, 8, 28, 14, 9, 2, 77, 12, 56, 38, 99, 14, 28, 1, 65, 77, 38, 11, 50];

const unique = [...new Set(array)];

unique.sort((a,b) => a - b);

console.log(unique);
// : suppression manuelle doublons + tri manuel

let uniqArr = [];

for(let value of array){
    let isUnq = false ;
    for(let VUnq of uniqArr){
        if(value === VUnq){
            isUnq = true;
            break;
        }
    }
    if(!isUnq){
        uniqArr.push(value);
    }
}

console.log(uniqArr);

for(let i = 0 ; i< uniqArr.length -1 ;i++){
    for(let j = i+1; j< uniqArr.length ; j++){
        if(uniqArr[i] > uniqArr[j]){
            let temp = uniqArr[i];
            uniqArr[i] = uniqArr[j];
            uniqArr[j] = temp;

            }
    }
}

console.log(uniqArr);

//  Regrouper les nombres < 50 et ≥ 50

const less = [];
const greater = [];

data.reduce((acc , value) => value >= 50 ? greater.push(value) : less.push(value),0);

console.log(less);
console.log(greater);

// boucle + deux tableaux

const T_less = [];
const T_greater = [];

for(let value of data){
    if(value >= 50){
        T_greater.push(value);
    }
    else{
        T_less.push(value);
    }
}
console.log(T_less);
console.log(T_greater);

// Trouver les 3 plus grands nombres

const SortData = data.sort((a,b) => b - a );

console.log(SortData);

const threeLarg = SortData.slice(0,3);

console.log(threeLarg);

// tri manuel + extraction

for(let i = 0 ; i< data.length -1 ;i++){
    for(let j = i+1; j< data.length ; j++){
        if(data[i] < data[j]){
            let temp = data[i];
            data[i] = data[j];
            data[j] = temp;

            }
    }
    if(i < 3){
        console.log(data[i])
    }
}

// Trouver les 3 plus petits nombres

const SortDat = data.sort((a,b) => a - b );

console.log(SortDat);

const threeSmall = SortDat.slice(0,3);

console.log(threeSmall);


//  tri manuel loop 


for(let i = 0 ; i< data.length -1 ;i++){
    for(let j = i+1; j< data.length ; j++){
        if(data[i] > data[j]){
            let temp = data[i];
            data[i] = data[j];
            data[j] = temp;

            }
    }
    if(i < 3){
        console.log(data[i])
    }
}

// Créer un mapping :

const obj = {
    even : [],
    odd : [],
    total : 0
};

data.reduce((acc , value) => {
    obj.total += value;

    if(value % 2 === 0){
        obj.even.push(value);
    }
    else{
        obj.odd.push(value);
    }
    
},0);

console.log(obj);

// using loop 

const box = {
    even : [],
    odd : [],
    total : 0
};

for(let value of data){
    box.total += value;
    if(value % 2 === 0){
        box.even.push(value);
    }
    else{
        box.odd.push(value);
    }
}

console.log(box);

// Générer un tableau contenant les nombres multipliés par leur index

const multIndex = [];

data.map((key, index) => multIndex.push(key * index));

console.log(multIndex);

// using loop

const newData = [];

for(let i = 0 ; i< data.length ; i++){
    newData.push(data[i] * i);
}

console.log(newData);

//  Remplacer les valeurs < 10 par 0

const changeValue = [];
data.map((value )=>{
    if(value < 10 ){
        changeValue.push(0);
    }
    else{
        changeValue.push(value);
    }
    
}  );

console.log(changeValue);

// using loop 

const changeZero = [];

for(let value of data){
    if(value < 10){
        changeZero.push(0);
    }
    else{
         changeZero.push(value);
    }

}

console.log(changeZero);

// Diviser le tableau en groupes de taille 4

function methodOne(data){
    const result = [];
    for(let i =0 ;i< data.length ; i++){
        if(i % 4 === 0 ){
            const group  = data.slice(i ,i + 4);

            result.push(group);

        }
    }

    return result;
}

console.log(methodOne(data));

// double boucle + index 
 
function methodTwo(data) {
    const result = [];
    let index = 0;

    while (index < data.length) {
        const group = [];

        for (let j = 0; j < 4 && index < data.length; j++) {
            group.push(data[index]);
            index++;
        }

        result.push(group);
    }

    return result;
}
console.log(methodTwo(data));

//  Créer une fonction qui retourne :


function All(data){
    const arr = [];
    const sum =  data.reduce((acc , value) => {
                const S = acc + value;
                return S;
        },0);
    let obj = {
        max : Math.max(...data),
        min : Math.min(...data),
        sum : sum,
        moyen : sum / data.length,
        count : data.length
    }

    arr.push(obj);
  
    return arr;

}

console.log(All(data));



// use loop 


function All(data){
    const arr = [];
    let  max = data[0];
    let min = data[0];
    let sum  = 0;
    for(let i =0 ; i< data.length ; i++){
        if(max < data[i]){
            max = data[i];
        }
        if(min > data[i]){
            min = data[i];
        }
        sum += data[i];

    }
    let moyen = sum / data.length;
    arr.push(max,min,sum, moyen);
    return arr;

}

console.log(All(data));



