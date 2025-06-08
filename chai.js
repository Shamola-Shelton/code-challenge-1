// Challenge 1: Chai Bora Ingredient Calculator

function calculateChaiIngredients(numberOfCups) {
    // Calculate ingredients based on standard recipe per cup
    let water = numberOfCups * 200;      // 200 ml per cup
    let milk = numberOfCups * 50;        // 50 ml per cup
    let teaLeaves = numberOfCups * 1;    // 1 tablespoon per cup
    let sugar = numberOfCups * 2;        // 2 teaspoons per cup
    
    return `To make ${numberOfCups} cups of Kenyan Chai, you will need:
Water: ${water} ml
Milk: ${milk} ml
Tea Leaves (Majani): ${teaLeaves} tablespoons
Sugar (Sukari): ${sugar} teaspoons

Enjoy your Chai Bora!`;
}

function runChaiCalculator() {
    // Prompt user for number of cups
    let userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    
    // Convert input to number
    let numberOfCups = Number(userInput);
    
    // Get output div
    const outputDiv = document.getElementById('chai-output');
    
    // Check if input is valid
    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        outputDiv.textContent = "Please enter a valid positive number of cups.";
    } else {
        outputDiv.textContent = calculateChaiIngredients(numberOfCups);
    }
    
    // Show the output
    outputDiv.style.display = 'block';
}