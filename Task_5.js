/*
* Задание №5. Переопределение функций
Есть следующий код:
function format(data, type) {
// Ваш код
}
var originFormat = format;
format(&quot;1&quot;, &quot;number&quot;);
console.log(format()); // 1
console.log(typeof format()); // &quot;number&quot;
originFormat(&quot;Hello&quot;, &quot;boolean&quot;);
console.log(format()); // true

console.log(typeof format()); // &quot;boolean&quot;
originFormat(true, &quot;string&quot;);
console.log(format()); // &quot;true&quot;
console.log(typeof format()); // &quot;string&quot;
Допишите код, чтобы функция format(data, type) переопределяла себя в
зависимости от параметра type:
 Если значением параметра type является строка &quot;number&quot;, то
переопределенная версия функции format() преобразует значение
параметра data в число и возвращает результат;
 Если значением параметра type является строка &quot;string&quot;, то
переопределенная версия функции format() преобразует значение
параметра data в строку и возвращает результат;
 Если значением параметра type является строка &quot;boolean&quot;, то
переопределенная версия функции format() преобразует значение
параметра data в логическое значение и возвращает результат;
 При других значениях параметра type функция format() не переопределяет
себя.
* */

function format(data, type) {
    switch (type){
        case "number": {
            format = function () {
                return Number(data);
            };
        } break;
        case "string": {
            format = function () {
                return String(data);
            };
        } break;
        case "boolean": {
            format = function () {
                return Boolean(data);
            };
        } break;
    }
    return format;
}
var originFormat = format;
format("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"
originFormat("Hello", "boolean");
console.log(format()); // true

console.log(typeof format()); // "boolean"
originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"
