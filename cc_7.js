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

//Task 4-Product Shipping Cost Calculation
function calculateShippingCost(weight, location, expedited = false) {
    let initialcost;
    let weightcost;

    if ( location === "USA") {initialcost= 5; weightcost=0.5; }
    else if (location ==="Canada") {
        initialcost =10; weightcost = 0.7;
    } else {
        return "No location found"
    }
    let cost = initialcost +(weightcost * weight);

    if (expedited) {
        cost +=10

    }
    return cost.toFixed(2);
    
}

// Test Cases
console.log(calculateShippingCost(10, "USA", true)); // Expected output: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping Cost: $13.50"

//Task 5- Business Loan Interest Calculation, Returning Values
function calculateLoanInterest(principal, rate, years) {
    let interest= principal * rate * years;
    return (`Total Interest: $${interest.toFixed(2)}`);
 }
 
 
 // Test Cases
 console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected output: "Total Interest: $150.00"
 console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected output: "Total Interest: $1750.00"


//Task 6: Higher-Order Functions
function filterHighValueTransactions(transactions, filterFunction) {
    let HighValueTransactions = transactions.filter(filterFunction);
    console.log(` ${HighValueTransactions}`);
 }
 let transactions = [500, 1200, 3000, 800, 2200];
 filterHighValueTransactions(transactions, amount => amount > 1000);
 // Expected output: [1200, 3000, 2200]

 //


//Task 7-

function createBudgetTracker() {
    let totalBalance = 0;
   
    return function(balance) {
        totalBalance -= balance;
        return `Current Balance: $${totalBalance}`;
    };
 }
 
 
 // Test Cases
 let budget = createBudgetTracker();
 console.log(budget(300)); // Expected output: "Current Balance: -$300"
 console.log(budget(200)); // Expected output: "Current Balance: -$500"

 
 