function processPayment(amount, method) {
    if (amount <= 0) {
        return "Invalid payment amount";
    }

    return "Payment initiated using " + method;
}

function refundPayment(paymentId) {
    return "Refund requested for " + paymentId;
}
console.log("Payment module ready");