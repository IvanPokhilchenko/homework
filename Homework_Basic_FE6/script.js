// Напишите цикл for, который выводит в консоль каждое второе число от 0 до 10
   
 for(let i =0; i <= 10; i =i + 2){
    console.log(i);
 }

// Напишите цикл for, который выводит в консоль все числа о 55 до 20

const arr = [];
 for(let i = 55; i >= 22; i--){
    arr.push(i);
 }
 console.log(arr);

 // Дан массив numbers. Вывести в консоль все числа из массива

 const numbers = [3,5,11,2,8,1,6];
 for(let i =0; i < numbers.length; i++){
    console.log(numbers[i]);
 }

 // Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат

 const numbers_squared = [];
 for(let i =0; i < numbers.length; i++){
    numbers_squared.push(numbers[i] ** 2);
 }
 console.log(numbers_squared);

 // Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)

 const last_elem = numbers_squared[6];
 console.log(last_elem);

 // Дан обьект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

 const user = {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    salary: 500,
 };
 console.log(`User's name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`);



 // Найти сумму положительных чисел

 const arrs = [6,1,3,3,4,5];
 let positive_numbers = 0;
 for(let i =0; i < arrs.length; i++){
    if(arrs[i] > 0){
        positive_numbers = positive_numbers + arrs[i]
    }
 }
 console.log('Сумма положительных  чисел:', positive_numbers);

 // Найти сумму чисел, чей индекс равен значению элемента

 let index_number = 0;
for(let i =0; i < arrs.length; i++){
    if(arrs[i] == i){
        index_number =index_number + arrs[i];
    }
}
console.log('Сумма чисел, чей индекс равен значению:', index_number);

// Найти сумму четных чисел и вывести в консоль 
// Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее

 let even_number = 0;
 let odd_number = 0;

 for(let i =0; i < arrs.length; i++){
    if(arrs[i] % 2 == 0){
        even_number = even_number + arrs[i];
    }
    if(!(arrs[i] % 2 == 0)){
        odd_number = odd_number + arrs[i];
    }

    if(even_number > odd_number){
        result = even_number - odd_number
     } else{
        result = odd_number - even_number
     }
 }
 console.log('Сумма четных чисел:', even_number);
 console.log('Сумма нечетных чисел:', odd_number);
 console.log('Вывод разницы четных и нечетных чисел:', result);



