function processPayment(amount, method) {
    if (amount <= 0) {
        return "Invalid payment amount";
    }

    return "Payment initiated using " + method;
}

console.log("Payment module ready");