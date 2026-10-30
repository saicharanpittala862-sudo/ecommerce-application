let cart = [];

function addToCart(product) {
    cart.push(product);
    console.log("Product added to cart");
}

function viewCart() {
    return cart;
}

console.log("Shopping cart module ready");