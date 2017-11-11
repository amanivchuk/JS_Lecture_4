/*
* Задание №4. Рекурсивные функции
Напишите рекурсивную функцию digitSum(k), которая находит сумму цифр
целого числа k, не используя циклы.
*/

function fun(tmp) {
    if (tmp === 0){
        return 0;
    }
    if (tmp === 1){
        return 1;
    }
    return tmp * fun(tmp - 1);
}

console.log(fun(5));