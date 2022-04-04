// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let n = 0
while (n <= 100) {
    let isPrime = true
    if (n % 2 == 0 && n != 2) {
        isPrime = false
    } else {
        let i = 3
        while (i <= n ** (1 / 2)) {
            if (n % i == 0) {
                isPrime = false
                break
            }
            i += 2
        }
    }
    if (isPrime)
        console.log(n)
    n++
}

console.log('==============================')

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть
// сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
// зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
//    a. Организовать такой массив для хранения товаров в корзине;
//    b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

basket = [
    { product_name: 'A', price: 100.00, amount: 10 },
    { product_name: 'B', price: 50.30, amount: 3 },
    { product_name: 'C', price: 130.50, amount: 5 }
]

let countBasketPrice = basket.reduce((acc, item) => {
    return (acc + item.price * item.amount)
}, 0)

console.log(countBasketPrice)

console.log('==============================')

// 4. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это
//    должно так:
//    for(...){// здесь пусто}

for (let i = 0; i <= 9; console.log(i++)) { }

console.log('==============================')
/* 5. * Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
x
xx
xxx
xxxx
xxxxx
*/

for (let pyramid = 'x'; pyramid.length < 20; pyramid += 'x') {
    console.log(pyramid)
}
