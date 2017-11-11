/*
* Задание №2. Замыкания
Есть следующий код:
function createArrayIterator(array) {
// Ваш код
}
var arr = [5, 6, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 6
console.log(itr()); // 7
console.log(itr()); // undefined
Допишите код, чтобы функция createArrayIterator() возвращала функцию-
перечислитель для массива, который задается через параметр array.
*/

function createArrayIterator(array) {
    var tmp = 0;
    return function () {
        return array[tmp++];
    };
}
var arr = [5, 6, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 6
console.log(itr()); // 7
console.log(itr()); // undefined
