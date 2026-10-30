function searchProduct(products, keyword) {
    return products.filter(product =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
    );
}

console.log("Product search module ready");