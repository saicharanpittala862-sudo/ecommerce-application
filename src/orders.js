function createOrder(userId, cartItems) {
    const order = {
        userId: userId,
        items: cartItems,
        status: "Pending"
    };

    console.log("Order created successfully");
    return order;
}

function updateOrderStatus(order, status) {
    order.status = status;
    return order;
}

console.log("Order management module ready");