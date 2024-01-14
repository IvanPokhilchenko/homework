// 1)Используя метод reduce, посчитайте сколько людей проголосовали.

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const sumPeople = voters.reduce((acc, value) => {
    if(value.voted){
        return acc + 1;
    } else{
        return acc;
    }
}, 0);

console.log(sumPeople);


// 2)Получив массив всех товаров из вашего списка желаний, прикиньте, 
// сколько будет стоить купить все сразу.

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const sumProducts = wishlist.reduce((acc, value) => acc + value.price, 0);

console.log(sumProducts);


// 3)Создайте массив объектов со свойствами 'name' и 'age'. 
// Вычислите количество совершеннолетних и несовершеннолетних людей.

const persons = [
    {name: "Ivan", age: 30},
    {name: "Alexey", age: 28},
    {name: "Bohdan", age: 35},
    {name: "Anastasiia", age: 14},
    {name: "Lena", age: 38},
    {name: "Ruslan", age: 15},
    {name: "Mathias", age: 19},
    {name: "Frank", age: 31},
    {name: "David", age: 17}
];

const minor = persons.filter((element) => element.age < 18).length;
const adult = persons.filter((element) => element.age >= 18).length;

console.log(`Несовершеннолетные ${minor}, совершеннолетные ${adult}`);

// 4)Создайте массив объектов со свойствами 'name' и 'age'. 
// Используя методы массива, создайте новый массив, содержащий только те объекты,
//  возраст которых больше 30 лет.
const people = [
    {name: "Ivan", age: 32},
    {name: "Alexey", age: 28},
    {name: "Bohdan", age: 35},
    {name: "Anastasiia", age: 14},
    {name: "Lena", age: 38},
    {name: "Ruslan", age: 15},
    {name: "Mathias", age: 19},
    {name: "Frank", age: 31},
    {name: "David", age: 17}
];

const oldPeople = people.filter((element) => element.age > 30);

console.log(oldPeople);

