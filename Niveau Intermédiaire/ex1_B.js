const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];

const reversed= [];

for(let i = data.length -1 ; i >= 0 ; i--){

    reversed.push(data[i]);

}

for(let i=0 ; i< reversed.length ; i++){
    console.log(reversed[i]);
}