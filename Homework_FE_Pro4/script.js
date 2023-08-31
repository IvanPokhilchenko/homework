// Написать скрипт, который выводит списки с товарами в интерфейс
// (на основе массива с объектами).Внизу каждого списка выводится итоговая сумма каждого товара.
// А так же в самом конце выводится итоговая сумма и количество всех товаров.
const cars = [
    {
        title: "BMW",
        price: 40000,
        count: "15"
    },
    {
        title: "Toyota",
        price: 20000,
        count: "13"
    },
    {
        title: "Ford",
        price: 30000,
        count: "20"
    },
    {
        title: "Chevrolet",
        price: 60000,
        count: "9"
    },
    {
        title: "Volkswagen",
        price: 30000,
        count: "13"
    },
  ];

  let allPrice = 0;
  let allCount = 0;
  for( let i = 0; i < cars.length; i++){
    const {title, price, count} = cars[i];

    const newCar = document.createElement("ol");
    const carTitle = document.createElement("li");
    carTitle.innerText = title;

    const carPrice = document.createElement("li");
    carPrice.innerText = price;

    const carCount = document.createElement("li");
    carCount.innerText = count;

    newCar.append(carTitle, carPrice, carCount);

    const carAllPrice = price * +count;
    const carAllPriceElement = document.createElement("li");
    carAllPriceElement.innerText = "Итого: " + carAllPrice;

    newCar.append(carAllPriceElement);

    document.querySelector("body").append(newCar);

   allPrice += carAllPrice;
   allCount += +count;
  }
  const parag = document.createElement("p");
  parag.innerText = "Общая стоимость машин: " + allPrice + ", Общее количество товаров: " + allCount;
  document.querySelector("body").append(parag);

  //_______________________________________________________________________________________________

  // Напишите скрипт, который выводит в интерфейс следующую таблицу
  // (html должен быть пустым, все элементы создаются строго с помощью скриптов):

  const array = ["№", "Full Name", "Position", "Salary"];

  const arr = [
    ["1", "Bill Gates", "Founder Microsoft", "$1000"],
    ["2", "Steve Jobs", "Founder Apple", "$1200"],
    ["3", "Larry Page", "Founger Google", "$1100"],
    ["4", "Mark Zuckeberg", "Founder Facebook", "$1300"],
  ];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tr = document.createElement("tr");
for (let i = 0; i <= array.length; i++) {
  const th = document.createElement("th");
  th.textContent = array[i];
  tr.appendChild(th);
}
thead.appendChild(tr);
table.appendChild(thead);

const tbody = document.createElement("tbody");
for (let i = 0; i < arr.length; i++) {
  const tr1 = document.createElement("tr");
  for (let j = 0; j < arr[i].length; j++) {
    const td = document.createElement("td");
    td.textContent = arr[i][j];
    tr1.appendChild(td);
  }
  tbody.appendChild(tr1);
}
table.appendChild(tbody);

document.querySelector("body").appendChild(table);

//________________________________________________________________________________
// Дан массив из объектов, в котором хранятся породы собак и их возраст. 
// Напишите цикл, который создаст для каждого объекта параграфы
// Пример как должен выглядеть вывод первого объекта:
// golden retriever's age is 7 ) и добавит в body.
const dogs = [
    {
      breed: "golden retriever",
      age: 7,
    },
    {
      breed: "labrador retriever",
      age: 4,
    },
    {
      breed: "french bulldog",
      age: 12,
    },
    {
      breed: "beagle",
      age: 6,
    },
    {
      breed: "german shepherd dog",
      age: 2,
    },
    {
      breed: "poodle",
      age: 3,
    },
    {
      breed: "bulldog",
      age: 4,
    },
];
for (let i = 0; i < dogs.length; i++){
    const dog = dogs[i];
    const par = document.createElement("p");
    par.textContent = dog.breed + "'s age is " + dog.age;
    document.querySelector("body").append(par);
}
//_________________________________________________________________________________________
// Создайте список с названиями фильмов и годов их выпуска из массива объектов.
// Массив с объектами создавать самому. 
// Каждый объект должен иметь два ключа – name, year.

const movies = [
    {
      name: "The Holliday",
      year: 2006
    },
    {
      name: "Forrest Gump",
      year: 1994
    },
    {
      name: "Love Actually",
      year: 2003
    },
    {
      name: "Yes Man",
      year: 2008
    },
    {
      name: "Groundhog Day",
      year: 1993
    }
  ];
  
  const listUl = document.createElement("ul");
  
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const listLi = document.createElement("li");
    listLi.textContent = movie.name + " (" + movie.year + ")";
    listUl.appendChild(listLi);
  }
  
  document.body.appendChild(listUl);