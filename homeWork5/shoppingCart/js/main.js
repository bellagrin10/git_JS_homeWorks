// Shop

let $shop = document.querySelector('.shop container')
let $shopItems = document.querySelector('.shop-content')

// Showcase Products

showcaseProducts.forEach(product => {

  let $productShowBox = document.createElement('DIV')
  $productShowBox.classList.add('product-box')

  let $img = document.createElement('IMG')
  $img.setAttribute('class', 'product-img')
  $img.setAttribute('src', product.imgSrc)
  $img.setAttribute('alt', "")

  let $title = document.createElement('H2')
  $title.setAttribute('class', 'product-title')
  $title.textContent = product.title

  let $price = document.createElement('SPAN')
  $price.setAttribute('class', 'price')
  $price.textContent = "$" + product.price
  // Shopping Bag -> Add To Cart
  let $shoppingBagIcon = document.createElement('I')
  $shoppingBagIcon.setAttribute('class', 'bx')
  $shoppingBagIcon.classList.add('bx-shopping-bag')
  $shoppingBagIcon.classList.add('add-cart')

  $productShowBox.append($img)
  $productShowBox.append($title)
  $productShowBox.append($price)
  $productShowBox.append($shoppingBagIcon)

  $shopItems.append($productShowBox)
})

// Cart

let $cart = document.querySelector('.cart')

// Open Cart

let $cartIcon = document.querySelector('#cart-icon')
$cartIcon.onclick = () => {
  $cart.classList.add("active")
}

// Close Cart

let $closeCart = document.querySelector('#close-cart')
$closeCart.onclick = () => {
  $cart.classList.remove('active')
}

// Your Shopping Cart

if (cartProducts.length > 0) {
  let $cartContent = document.querySelector('.cart-content')

  cartProducts.forEach(product => {

    let $cartShopBox = document.createElement('DIV')
    $cartShopBox.classList.add('cart-box')

    let $img = document.createElement('IMG')
    $img.classList.add('cart-img')
    $img.setAttribute('src', product.imgSrc)
    $img.setAttribute('alt', "")

    let $details = document.createElement('DIV')
    $details.classList.add('detail-box')

    let $title = document.createElement('DIV')
    $title.classList.add('cart-product-title')
    $title.textContent = product.title

    let $price = document.createElement('DIV')
    $price.classList.add('cart-product-title')
    $price.textContent = "$" + product.price

    let $quantity = document.createElement('INPUT')
    $quantity.classList.add('cart-quantity')
    $quantity.setAttribute('type', 'number')
    $quantity.setAttribute('value', product.quantity)
    // $quantity.setAttribute('value', '1')
    $quantity.setAttribute('min', '1')
    $quantity.setAttribute('max', product.inStock)
    // Trash At -> Remove Cart
    let $trashAtIcon = document.createElement('I')
    $trashAtIcon.setAttribute('class', 'bx')
    $trashAtIcon.classList.add('bxs-trash-alt')
    $trashAtIcon.classList.add('cart-remove')

    $details.append($title)
    $details.append($price)
    $details.append($quantity)

    $cartShopBox.append($img)
    $cartShopBox.append($details)
    $cartShopBox.append($trashAtIcon)

    $cartContent.append($cartShopBox)
  })
} else {
  // Empty Cart
  let $cartTitle = document.querySelector('.cart-title')
  let $EmptyTextNode = document.createTextNode(' Is Empty')
  $cartTitle.appendChild($EmptyTextNode)
  $buyBtn = document.querySelector('.btn-buy')
  $buyBtn.classList.add('deactive')
}

// Update Total

let quantity = cartProducts.reduce((acc, product) => {
  return (acc + product.quantity)
}, 0)

let $quantityNumber = document.querySelector('.quantity-number')
$quantityNumber.textContent = quantity

let total = cartProducts.reduce((acc, product) => {
  return (acc + product.price * product.quantity)
}, 0)

let $totalPrice = document.querySelector('.total-price')
$totalPrice.textContent = '$' + total
