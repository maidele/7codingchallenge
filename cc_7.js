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

