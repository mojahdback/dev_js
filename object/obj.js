const users = [
  { id: 1, name: "Kamal", age: 22, city: "Marrakech", score: 45 },
  { id: 2, name: "Sami", age: 30, city: "Rabat", score: 72 },
  { id: 3, name: "Issam", age: 28, city: "Marrakech", score: 60 },
  { id: 4, name: "Oualid", age: 19, city: "Agadir", score: 33 },
  { id: 5, name: "Hassan", age: 33, city: "Casablanca", score: 80 },
  { id: 6, name: "Farah", age: 25, city: "Marrakech", score: 50 },
  { id: 7, name: "Salma", age: 40, city: "Rabat", score: 90 },
  { id: 8, name: "Hanae", age: 21, city: "Marrakech", score: 41 },
  { id: 9, name: "Ibrahim", age: 27, city: "Casablanca", score: 55 },
  { id: 10, name: "Jade", age: 24, city: "Agadir", score: 48 }
];

// sorting by using sort(age)

const sortAge = users.sort((a,b) => a.age - b.age );

console.log(sortAge);

// sorting by using sort(score)

const sortScore = users.sort((a,b) =>  b.score - a.score );

console.log(sortScore);


// using buble sort (age)

for(let i=0 ; i< users.length -1 ; i++){
    for(let j= i+1 ; j< users.length ;j++){
        if(users[i].age > users[j].age){
            let temp = users[i];
            users[i] = users[j];
            users[j] = temp;
        }
    } 
}

console.log(users);

// using buble sort (score)

for(let i=0 ; i< users.length -1 ; i++){
    for(let j= i+1 ; j< users.length ;j++){
        if(users[i].score < users[j].score){
            let temp = users[i];
            users[i] = users[j];
            users[j] = temp;
        }
    } 
}

console.log(users);

//Ajouter une propriété status: "active" à chaque utilisateur
//use map() + spread

const arrUsers = [];

users.map((user) =>{
    arrUsers.push({...user ,
                    status:"active"
                  })
} );

console.log(arrUsers);


// using loop 


const newUser = [];

for(let i=0;i<users.length ;i++){
    let newObj = {};
    newObj.id = users[i].id;
    newObj.name = users[i].name;
    newObj.city = users[i].city;
    newObj.age = users[i].age;
    newObj.score = users[i].score;
    newObj.status = "active";
    newUser.push(newObj);

}
console.log(newUser);


