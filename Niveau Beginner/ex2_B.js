const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];

let i =0;
while(i < data.length){
    if(data[i] % 2 !== 0){
         console.log(data[i]);
    }
    i++;
}