// Challenge 1: Chai Bora Ingredient Calculator
function calculateChaiIngredients(numberOfCups) {
    let water = numberOfCups * 200;
    let milk = numberOfCups * 50;
    let teaLeaves = numberOfCups * 1;
    let sugar = numberOfCups * 2;
    
    return `To make ${numberOfCups} cups of Kenyan Chai, you will need:
Water: ${water} ml
Milk: ${milk} ml
Tea Leaves (Majani): ${teaLeaves} tablespoons
Sugar (Sukari): ${sugar} teaspoons

Enjoy your Chai Bora!`;
}

function runChaiCalculator() {
    let userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    let numberOfCups = Number(userInput);
    
    const outputDiv = document.getElementById('chai-output');
    
    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        outputDiv.textContent = "Please enter a valid positive number of cups.";
    } else {
        outputDiv.textContent = calculateChaiIngredients(numberOfCups);
    }
    
    outputDiv.style.display = 'block';
}

// Challenge 2: Boda Boda Ride Fare Estimator
function calculateBodaFare(distanceInKm) {
    let baseFare = 50;
    let chargePerKm = 15;
    let distanceCharge = distanceInKm * chargePerKm;
    let totalFare = baseFare + distanceCharge;
    
    return `Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES ${baseFare}
Mpaka Uko: KES ${distanceCharge}
Total: KES ${totalFare}

Panda Pikipiki!`;
}

function runBodaCalculator() {
    let userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
    let distanceInKm = Number(userInput);
    
    const outputDiv = document.getElementById('boda-output');
    
    if (isNaN(distanceInKm) || distanceInKm <= 0) {
        outputDiv.textContent = "Please enter a valid positive distance.";
    } else {
        outputDiv.textContent = calculateBodaFare(distanceInKm);
    }
    
    outputDiv.style.display = 'block';
}

// Challenge 3: Mobile Money Transaction Fee Estimator
function estimateTransactionFee(amountToSend) {
    let calculatedFee = amountToSend * 0.015;
    
    let transactionFee;
    if (calculatedFee < 10) {
        transactionFee = 10;
    } else if (calculatedFee > 70) {
        transactionFee = 70;
    } else {
        transactionFee = calculatedFee;
    }
    
    let totalAmount = amountToSend + transactionFee;
    
    return `Sending KES ${amountToSend}:
Calculated Transaction Fee: KES ${transactionFee}
Total amount to be debited: KES ${totalAmount}

Send Money Securely!`;
}

function runMobileMoneyCalculator() {
    let userInput = prompt("Unatuma Ngapi? (KES):");
    let amountToSend = Number(userInput);
    
    const outputDiv = document.getElementById('mobile-output');
    
    if (isNaN(amountToSend) || amountToSend <= 0) {
        outputDiv.textContent = "Please enter a valid positive amount.";
    } else {
        outputDiv.textContent = estimateTransactionFee(amountToSend);
    }
    
    outputDiv.style.display = 'block';
}