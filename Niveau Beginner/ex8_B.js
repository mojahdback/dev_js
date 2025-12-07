const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];

let answer = 0;
let findNum = 10;
for(let i =0 ; i< data.length ; i++){
    if(findNum === data[i]){
        answer = 1;
        break;
    }

}

if(answer){
     console.log(findNum + "  this number is Here ");
}
else{
       console.log(findNum + "  this number not Here ");
}