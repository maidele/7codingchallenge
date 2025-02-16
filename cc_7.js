//Task 1- Customer Invoice Calculation; Function Declarations 

function calculateInvoice(subtotal, taxRate, discount) {
    let Total = (subtotal + (subtotal * taxRate)) - discount
    console.log(`Total Invoive: $${Total.toFixed(2)}`);

}

// Test Data
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"

//Task 2-Employee Hourly Wage Calculation; Function Expression

const calculateHourlyWage = function(salary, hoursPerWeek) {
    let HourlyWage = salary / (hoursPerWeek * 52)
    console.log(`Hourly Wage: $${HourlyWage.toFixed(2)}`);
};

// Test Data
calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"

// Task 3 - Customer Loyalty Discount; Arrow Function

const calculateLoyaltyDiscount = (amount, years) => {
    let discount = 0;
    if (years >= 5) discount = amount- (amount * 0.15);
    else if (years >= 3) discount = amount * 0.1;
    else discount = amount- (amount * 0.05);
    
    console.log(`Discounted Price: $${discount}`);
};

// Test Cases
calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"