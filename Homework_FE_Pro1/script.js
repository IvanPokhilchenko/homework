// Написать функцию, которая получает в качестве аргумента число и строку, 
// где число обозначает сколько раз должна быть добавлена эта строка в массив.
// Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, 
// в результате мы получаем [“dog”,”dog”,”dog”]
function createStringArray(string, count){
    const result = [];

for (let i = 0; i < count; i++){
    result.push(string);
}
return result
}
const valueString = "dog";
const valueCount = 3;

const resultArray = createStringArray(valueString, valueCount);
console.log(resultArray);


//__________________________________________________________________________________________________________________________________
// Написать функцию, которая получает в качестве аргумента массив с числами.
// Функция нужна для расчета суммы четных чисел в массиве. Так же написать новую функцию для расчета суммы нечетных чисел в массиве.
// Написать функцию, которая принимает как аргумент две полученные суммы и выводит наибольшее из них.
function sumEvenNumbers (arr){
    let sum = 0;
    for( let num of arr){
        if (num % 2 === 0){
            sum += num;
        }
    }
    return sum;
}

function sumOddNumbers (arr){
    let sum = 0;
    for(let num of arr){
        if (num % 2 !== 0){
            sum += num;
        }
    }
    return sum;
}

function getMaxSum(sum1, sum2){
    return sum1 > sum2 ? sum1 : sum2;
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenSum = sumEvenNumbers(numbers);
const oddSum = sumOddNumbers(numbers);

console.log(evenSum);
console.log(oddSum);

const maxSum = getMaxSum(evenSum, oddSum);
console.log(maxSum);

//__________________________________________________________________________________________________________________________________
// Напишите функцию, которая как аргумент принимает строку.
// Эта функция возвращает это слово в развернутом виде. Пример:  “cat” => “tac”
function reverseString (input){
    let reversed = '';
    for (let i = input.length - 1; i >= 0; i--){
        reversed += input[i];
    }
    return reversed;
}

const originalString = "cat";
const reversedString = reverseString(originalString);
console.log(reversedString);



//__________________________________________________________________________________________________________________________________
// Написать функцию, которая будет находить максимальное число в массиве.
function findMaxNumber (arrs) {
    let max = arrs[0];

    for (let i = 1; i < arrs.length; i++){
        if(arrs[i] > max){
            max = arrs[i];
        }
    }
    return max;
}
const number = [3,7,2,8,5,10];
const maxNumber = findMaxNumber(number);
console.log(maxNumber);




//__________________________________________________________________________________________________________________________________
// Написать функцию, которая будет находить минимальное число в массиве.
function findMinNumber (arrays){
    let min = arrays[0];
    for(let i = 1; i < arrays.length; i++){
        if(arrays[i] < min){
            min = arrays[i];
        }
    }
    return min;
}

const numbs = [3,7,2,8,5,10];
const minNumber = findMinNumber(numbs);
console.log(minNumber);
