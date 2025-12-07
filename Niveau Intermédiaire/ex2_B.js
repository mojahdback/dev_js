const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];

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
