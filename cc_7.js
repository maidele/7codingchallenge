//Task 1- Customer Invoice Calculation; Function Declarations 

function calculateInvoice(subtotal, taxRate, discount) {
    let Total = (subtotal + (subtotal * taxRate)) - discount
    console.log(`Total Invoive: $${Total.toFixed(2)}`);

}

// Test Data
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"

