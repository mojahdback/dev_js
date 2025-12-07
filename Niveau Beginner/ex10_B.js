const data = [12, 5, 8, 130, 44, 9, -2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];


let verfy = 1;

for(let i=0; i< data.length ; i++){
        if(data[i] > 0 ){
            verfy = 1;
        }
        else{
            verfy=0;
            break;
        }
}

if(verfy){
    console.log("All numbers are positive ");
}
else{
     console.log("there is some one not  positive ");
}