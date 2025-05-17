// Title:1:Interactive Color Picker Boxes 
// Objective: The goal of this assignment is to practice DOM manipulation and styling using HTML, CSS, and JavaScript. You will build a simple web page with multiple color boxes. When a user clicks on any color box, the background color of the entire page should change to that color.
// Instructions:Use only HTML, CSS, and JavaScript for this task.Create a web page that displays multiple colored boxes (at least 6 different colors).
// Each box should have a fixed size (e.g., 100px by 100px) and a distinct background color.
// When a user clicks on a box, the background color of the entire web page should change to match the clicked box.
// Add hover effects to the boxes using CSS for better user experience.
// Make sure your code is clean, well-indented, and includes comments where necessary.

// solution:

// let colorPicker = document.getElementById('colorpicker')
// let colorCode = document.getElementById('colorcode')
// let output = document.getElementById('output')
// colorPicker.addEventListener('input', (c) => {
//     let selectColor = c.target.value;
//     colorCode.textContent = selectColor
//     output.style.backgroundColor = selectColor
// })


// Project-3
// Assignment Title: Simple Calculator
// Objective:
// This assignment will help you build a basic calculator using HTML, CSS, and JavaScript. The calculator should perform simple arithmetic operations such as addition, subtraction, multiplication, and division.
// Instructions:
// Create a basic calculator interface using HTML and style it using CSS. The calculator should have: A display screen to show inputs and results
// Buttons for digits (0–9)
// Buttons for operations (+, −, ×, ÷)
// A “Clear” button to reset the input
// An “=” button to display the result
// Use JavaScript to perform the calculations based on user input.
// Handle input validation (e.g., avoid dividing by zero).
// Ensure the layout is responsive and user-friendly.


// let display = document.getElementById("display")
// function appendToDisplay(input) {
//     display.value += input
// }
// function clearDispaly() {
//     display.value = ""
// }

// function calculate() {
//     display.value = eval(display.value)

// }



// 3. Temperature Converter
// Scenario:You are building a temperature converter that converts between Celsius, Fahrenheit, and Kelvin.
// Task:Write a function that:1. Takes in a temperature value and a unit (Celsius, Fahrenheit, or Kelvin).2. Use switch to convert the given temperature to the other two units (e.g., Celsius to Fahrenheit and Kelvin).3. Return the converted temperature values.
// function convertTemperature(value, unit) {
//     let Celsius, Fahrenheit, Kelvin

//     switch (unit) {
//         case "Celsius":
//             Celsius = value
//             Fahrenheit = (value * 9 / 5) + 32;
//             Kelvin = value + 273.15
//             break;
//         case "Fahrenheit":
//             Fahrenheit = value
//             Celsius = (value - 32) * 5 / 9;
//             Kelvin = (value - 32) * 5 / 9 + 273.15;
//             break;
//         case "Kelvin":
//             Kelvin = value
//             Celsius = value + 273.15;
//             Kelvin = (value - 273.15) * 5 / 9 + 32
//             break;
//         default:
//             return "Invalid unit"
//     }
//     let result = {
//         Celsius: parseFloat(Celsius.toFixed(2)),
//         Fahrenheit: parseFloat(Fahrenheit.toFixed(2)),
//         Kelvin: parseFloat(Kelvin.toFixed(2))
//     };
//     console.log("Celsius", Celsius);
//     console.log("Fahrenheit", Fahrenheit);
//     console.log("Kelvin", Kelvin);
//     return result;
// }
// convertTemperature(100)



// 2. Employee Payroll System
// Scenario:You are developing a payroll system for employees. Each employee has a salary, hours worked,and bonus eligibility.
// Task:Write a function that processes an array of employee objects, each containing:
// employeeName: The name of the employee.
// baseSalary: The base salary of the employee.
// hoursWorked: The total number of hours worked.
// eligibleForBonus: Boolean flag indicating if the employee is eligible for a bonus.
// The system should:1. Calculate the overtime pay (1.5x the base rate) for any hours worked beyond 40.2. Use switch to apply a bonus based on eligibility:○ If eligible, apply a 10% bonus to the base salary.○ If not eligible, no bonus.
// 3. Use if-else to check if the total salary exceeds $100,000, applying a tax rate of 30%for high earners.4. Use string methods to format employee names.
// 5. Use array methods to calculate and display the total payroll.

// let employee = [{
//         employeeName: "Ali",
//         baseSalary: 30000,
//         hoursWorked: 80,
//         eligibleForBonus: true
//     },
//     {
//         employeeName: "Ahmed",
//         baseSalary: 20000,
//         hoursWorked: 70,
//         eligibleForBonus: false
//     },
//     {
//         employeeName: "Kanu",
//         baseSalary: 35000,
//         hoursWorked: 90,
//         eligibleForBonus: true
//     }
// ];

// function CalculatePayroll(employee) {
//     let totalSalary;
//     let hourRate = 20;
//     let bonus = 200;
//     switch (true) {
//         case employee.hoursWorked > 80:
//             totalSalary = employee.baseSalary + ((employee.hoursWorked - 80) * hourRate);
//             break;
//         default:
//             totalSalary = employee.baseSalary;
//             break;
//     }
//     switch (employee.eligibleForBonus) {
//         case true:
//             totalSalary += bonus;
//             break;
//         case false:
//             break;
//     }

//     return {
//         name: employee.employeeName,
//         totalSalary: totalSalary
//     };
// }
// employee.forEach(emp => {
//     let result = CalculatePayroll(emp);
//     console.log(`Employee: ${result.name}, Total Salary: ${result.totalSalary}`);
// });



// 5. Multi-Currency Converter
// Scenario:
// You are building a currency converter for an international travel app. The app needs to convert
// an amount in one currency to multiple other currencies (e.g., USD to EUR, GBP, JPY, etc.).
// Task:
// 1. Create an object with exchange rates for different currencies (e.g., {"USD": 1,
// "EUR": 0.85, "GBP": 0.75, "JPY": 110.50}).
// 2. Write a function that:
// ○ Takes in the amount in USD and the target currency.
// ○ Converts the amount to the target currency using the exchange rates.
// ○ Use switch to handle the conversion based on the target currency.
// 3. Return the converted amount in the selected currency.

function CurrencyConverter(targetcurrency, amount) {
    let convertedAmount;
    let rate;

    switch (targetcurrency.toupperCase()) {
        case "USD":
            rate = 1;
            convertedAmount = amount * rate
            break;
        case "EUR":
            rate = 0.85;
            convertedAmount = amount * rate
            break;
        case "GBP":
            rate = 0.75;
            convertedAmount = amount * rate
            break;
        case "JPY":
            rate = 110.50;
            convertedAmount = amount * rate
            break;
        default:
            console.log("Unsupported:" + targetcurrency);
            return
    }
    console.log(`$${amount} USD = ${convertedAmount.toFixed(2)} ,${targetcurrency.toupperCase()}`);

}
CurrencyConverter(100, "USD")
CurrencyConverter(50, "EUR")
CurrencyConverter(80, "GBP")
CurrencyConverter(40, "JPY")