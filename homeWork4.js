// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
// десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5,
// ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
// сообщение с помощью console.log и вернуть пустой объект.

function Converting(number) {
    const properties = ['units', 'tens', 'hundred']
    if (number > 999) {
        console.log('incorrect input')
    } else if (number === 0) {
        this.units = 0
    } else {
        for (property of properties) {
            if (number) {
                this[property] = number % 10
                number = (number - number % 10) / 10
            }
        }
    }
}

console.log(new Converting(0))
console.log(new Converting(2))
console.log(new Converting(23))
console.log(new Converting(234))
console.log(new Converting(1000))

// 2. Продолжить работу с интернет-магазином:
//    a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
//       объектами можно заменить их элементы?
//    b. Реализуйте такие объекты.

// пункты a. и b. реализованы в homeWork3.js

//    c. Перенести функционал подсчета корзины на объектно-ориентированную базу.

const ProductProto = {
    basketPrice() {
        return this.price * this.amount
    }
}
function Product(product_name, price, amount) {
    this.product_name = product_name
    this.price = price
    this.amount = amount
}
Product.prototype = ProductProto

let basket = [
    new Product('A', 100.00, 10),
    new Product('B', 50.30, 3),
    new Product('C', 130.50, 5)
]
console.log(basket)

countBasketPrice = 0
for (let item of basket) {
    countBasketPrice += item.basketPrice()
}
console.log(countBasketPrice)

// { product_name: 'A', price: 100.00, amount: 10 },
// { product_name: 'B', price: 50.30, amount: 3 },
// { product_name: 'C', price: 130.50, amount: 5 }


// 3. * Подумать над глобальными сущностями. К примеру, сущность «Продукт» в
// интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к
// тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в
// разных местах давал возможность вызывать разные методы.

// Например, поле количество amount в «Продукт» каталога означает сколько единиц этого продукта в интернет-магазине
// и когда перемещают в корзину - нужно вычесть это количество;
// а amount в «Продукт» корзины - это сколько единиц этого продукта перемещено в корзину - нужно добавить это количество