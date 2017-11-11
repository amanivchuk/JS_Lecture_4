/*
* Задание №3. Замыкания
Напишите код для &quot;безопасного&quot; вычисления периметра и площади
прямоугольника.
Сторонами прямоугольника может быть только число (тип данных Number,
значения других типов данных нельзя устанавливать), значение которого, строго
больше 0.
*/

function f(a, b) {
    var array = [];
    if(a > 0 && b > 0){
        var tmp_a = Number(a);
        var tmp_b = Number(b);

        array[0] = function () {
            return (tmp_a + tmp_b)*2;
        };
        array[1] = function () {
            return tmp_a*tmp_b;
        };
        return array;
    }
}

var tmp = f(2, 2);
console.log("Perimetr = " + tmp[0]());
console.log("Plochad = " + tmp[1]());