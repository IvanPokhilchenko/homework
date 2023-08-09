// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 
// (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

const findDiv = document.querySelector('.numbers');

for(let i = 100; i >= 50; i = i -10){
    const paragraph = document.createElement('p');

    paragraph.textContent = i;

    findDiv.appendChild(paragraph);
}

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные

const words = ["Frontend", "HTML", "CSS", "JavaScript", "Code",];

const findContainerDiv = document.querySelector('.strings_container');

for(let i = 0; i < words.length; i++){
    const paragraphs = document.createElement('p');

    paragraphs.textContent = words[i];

    findContainerDiv.appendChild(paragraphs);

}

// Написать цикл, который проходится по массиву с обьектами - у обьектов свойства first_name, last_name и age (данные взять произвольные) 
// - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя.
// Добавить все карточки в div с классом users_container

const users = [
    {
         first_name: "Ivan",
         last_name: "Ivanov",
         age: 25,
     },
    { 
        first_name: "Pavlo",
        last_name: "Pavlov",
        age: 18, 
    },
    {
         first_name: "Petro",
         last_name: "Petrov",
         age: 16, 
    },
    { 
        first_name: "Dmitro",
        last_name: "Dmitrov",
        age: 12, 
    },
    { 
        first_name: "Alex",
        last_name: "Alexeev",
        age: 30, 
    },
    { 
        first_name: "Andrey",
        last_name: "Andreev",
        age: 22, 
    },
];
  const findUserDiv = document.querySelector('.users_container');


for (let i = 0; i < users.length; i++)
{
    const user = users[i];

  if (user.age >= 18) {
    const card = document.createElement('div');
    card.className = 'user_card'; 

    let name = document.createElement('p');
    name.textContent = `Name: ${user.first_name}`;
    card.appendChild(name); 

    let surname = document.createElement('p');
    surname.textContent = `Surname: ${user.last_name}`;
    card.appendChild(surname);

    let years_old = document.createElement('p');
    years_old.textContent = `Age: ${user.age}`;
    card.appendChild(years_old);

    findUserDiv.appendChild(card);
  }
}






