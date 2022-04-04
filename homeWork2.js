// 1. Почему код дает именно такие результаты?
/*
var a = 1, b = 1, c, d;
c = ++a; console.log(c); // 2 - оператор префикс приращения увеличивает и возвращает значение после увеличения
d = b++; console.log(d); // 1 - оператор постфикс приращения увеличивает и возвращает значение до увеличения
c = (2 + ++a); console.log(c); // 5 - a было равно 2 , после приращения стало равно 3  c = (2 + 3) = 5
d = (2 + b++); console.log(d); // 4 - b было равно 2 , после приращения стало равно 3, 
                               // но постфикс возвращает значение до увеличения d = (2 + 2) = 4
console.log(a); // 3 
console.log(b); // 3
*/

// 2. Чему будет равен x?

// var a = 2;
// var x = 1 + (a *= 2); // x = 1 + (a = 2 * 2 = 4) = 5

// 3. Объявить две целочисленные переменные — a и b
// и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
//   если a и b положительные, вывести их разность;
//   если а и b отрицательные, вывести их произведение;
//   если а и b разных знаков, вывести их сумму;
// Ноль можно считать положительным числом.

let a = 4
let b = 6

if (a >= 0 && b >= 0) {
    console.log(Math.abs(a - b)) // я хочу вывести разность между большим и меньшим числом
} else if (a < 0 && b < 0) {
    console.log(a * b)
} else {
    console.log(a + b)
}

console.log('==========================')

// 4. Присвоить переменной а значение в промежутке[0..15].
//    С помощью оператора switch организовать вывод чисел от a до 15.

let n = 10
switch (n) {
    case 0:
        console.log(n++)
    case 1:
        console.log(n++)
    case 2:
        console.log(n++)
    case 3:
        console.log(n++)
    case 4:
        console.log(n++)
    case 5:
        console.log(n++)
    case 6:
        console.log(n++)
    case 7:
        console.log(n++)
    case 8:
        console.log(n++)
    case 9:
        console.log(n++)
    case 10:
        console.log(n++)
    case 11:
        console.log(n++)
    case 12:
        console.log(n++)
    case 13:
        console.log(n++)
    case 14:
        console.log(n++)
    case 15:
        console.log(n++)
}

console.log('==========================')

// 5. Реализовать четыре основные арифметические операции в виде функций с двумя
// параметрами.Обязательно использовать оператор return.

// Traditional Function
function sum(a, b) {
    return a + b;
}

// Arrow Function

let sub = (a, b) => a - b
let mul = (a, b) => a * b
let div = (a, b) => a / b

console.log(sum(2, 6))
console.log(sub(12, 6))
console.log(mul(2, 5))
console.log(div(14, 7))

console.log('==========================')

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 — значения аргументов, operation — строка с названием операции.
// В зависимости от переданного значения выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение(применить switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum': return sum(arg1, arg2)
        case 'sub': return sub(arg1, arg2)
        case 'mul': return mul(arg1, arg2)
        case 'div': return div(arg1, arg2)
    }
}

console.log(mathOperation(10, 2, 'sum'))
console.log(mathOperation(10, 2, 'sub'))
console.log(mathOperation(10, 2, 'mul'))
console.log(mathOperation(10, 2, 'div'))

console.log('==========================')

// 7. * Сравнить null и 0. Объяснить результат.

console.log(null == null, null === null, null != null, null !== null) // true true false false
console.log(0 == 0, 0 === 0, 0 != 0, 0 !== 0) // true true false false
console.log(null >= null, null <= null, null > null, null < null) // true true false false
console.log(0 >= 0, 0 <= 0, 0 > 0, 0 < 0) // true true false false
console.log(null == 0, null === 0, null != 0, null !== 0)  // false false true true
console.log(null >= 0, null <= 0, null > 0, null < 0) // true true false false

// Сравнения преобразуют null в число, рассматривая его как 0.
// Вот почему null >= 0 и null <= 0 истинно, а null > 0 и null < 0 ложно.
// С другой стороны, проверка равенства == для undefined и null определена таким образом,
// что без каких-либо преобразований они равны друг другу и не равны ничему другому.
// Поэтому null == 0 ложно и соответственно null != 0 истинно

// console.log(undefined == null, undefined === null) // true false

console.log('==========================')

// 8. * С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val — заданное число, pow –— степень.

function power(val, pow) {
    let p = pow
    pow = Math.abs(pow)
    if (pow == 0)
        return 1
    if (pow % 2 == 0) {
        result = power(val * val, pow / 2)
    } else {
        result = val * power(val, pow - 1)
    }
    if (p < 0)
        return 1 / result
    return result
}


console.log(power(-3, 3))
console.log(power(2, -4))
console.log(power(-2, 10))
console.log(power(5, 3))


