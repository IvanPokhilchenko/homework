// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них

function getMinimum(a, b){
    return a < b ? a : b;
}
const result = getMinimum(5,10);
console.log(`Наименьшее число: ${result}`);

// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему

function getMinMax(a, b){
    const min = a > b ? a : b;
    const max = a > b ? b : a;

    for (let i = min; i >= max; i--) {
        if(i % 2 ===0){
            console.log(i)
        }
    }
}
getMinMax(5,20);

// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2

function power(base, exponent = 2){
    return Math.pow(base, exponent);
}

const baseNumber = 3;
const exponentValue = 4;
const result1 = power(baseNumber, exponentValue);
console.log(result1);

// Напишите функцию, которая принимает числовой аргумент p и считает сумму чисел от 1 до p

function sumNumbers (p){
    let sum = 0;
    for (let i =0; i <= p; i++){
        sum = sum + i;
    }
    return sum;

}
const p = 5;
const result2 = sumNumbers(p);
console.log(result2);

// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n и m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных)

function sumEvenAndOdd(n, m){
    let sumEven = 0;
    let sumOdd = 0;
    for(let i = n; i <= m; i++){
        if(i % 2 === 0){
            sumEven += i;
        } else {
            sumOdd += i;
        }
    }
    console.log(`Сумма четных чисел: ${sumEven}`);
    console.log(`Сумма нечетных чисел: ${sumOdd}`);
}
const n = 1;
const m = 2;
sumEvenAndOdd(n,m);
// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null.
// Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 

function findLongestString (strings){
    if(strings.length === 0){
        return null;
    }
    let longest = strings[0];

    for(let i = 1; i < strings.length; i++){
        if (strings[i].length > longest.length){
            longest = strings[i];
        }
    }
    return longest;
}
const stringArray = ["Frontend","ban","hello","date"];
const longestString = findLongestString(stringArray);
console.log(`Вывод длинного элемента в массиве: ${longestString}`);

