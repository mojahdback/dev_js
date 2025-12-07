const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];

let verfy = 1;

for(let i=0; i< data.length ; i++){
        if(data[i] > 100 ){
            verfy = 1;
            break;
        }
        else{
            verfy =0;
            continue;
        }
    
}

if(verfy){
    console.log("there is some numbers large then 100");
}
else{
     console.log("there is no number large then 100");
}
