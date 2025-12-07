const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];


const bigThen = data.some(num => num > 100);

console.log(bigThen ? "there is some numbers large then 100" : "there is no number large then 100");