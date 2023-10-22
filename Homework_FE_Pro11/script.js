// Создайте функцию delayedTask, которая возвращает промис.
// Функция delayedTask должна принимать два аргумента:
// taskName (название задачи) и delay (задержка в миллисекундах).
// Внутри функции, используйте setTimeout для задержки выполнения задачи на указанное количество миллисекунд.
// После задержки, функция должна разрешить промис с сообщением, содержащим название задачи и время выполнения.
function delayedTask (taskName, delay){
  const promise1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
      const time = new Date();
      const timeString = time.toLocaleTimeString();
      resolve(`${taskName}, ${timeString}`);    
    }, delay);
  });
  return promise1;
}

delayedTask("Task1", 3000)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));



//_____________________________________________________________________________________________
// Создайте функцию, которая проверяет, является ли заданное число четным,
// и возвращает Promise с результатом проверки.
// Если переданное значение не является числом, Promise будет отклонен с сообщением об ошибке.

function checkEven (number){
  const promise2 = new Promise((resolve, reject) => {
    if(typeof number !== "number" || isNaN(number)){
      reject("Значение не является числом!");
    } else if(number % 2 === 0){
      resolve(`${number} - четное число`);
    } else {
      resolve(`${number} - нечетное число`);
    }
  });
  return promise2;
}

checkEven(2)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));