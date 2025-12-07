const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];


let max = data[0];
for(let i =0 ; i<data.length ; i++){
    if(max < data[i]){
        max = data[i];
    }
   
}
console.log("\n===========================")
console.log("The max number is : "+ max);
console.log("===========================\n")