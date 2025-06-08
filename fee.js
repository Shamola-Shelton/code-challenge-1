// Challenge 3: Mobile Money Transaction Fee Estimator

function estimateTransactionFee(amountToSend) {
    // Calculate 1.5% fee
    let calculatedFee = amountToSend * 0.015;
    
    // Apply minimum and maximum limits
    let transactionFee;
    if (calculatedFee < 10) {
        transactionFee = 10;        // Minimum fee of KES 10
    } else if (calculatedFee > 70) {
        transactionFee = 70;        // Maximum fee of KES 70
    } else {
        transactionFee = calculatedFee;
    }
    
    // Calculate total amount to be debited
    let totalAmount = amountToSend + transactionFee;
    
    return `Sending KES ${amountToSend}:
Calculated Transaction Fee: KES ${transactionFee}
Total amount to be debited: KES ${totalAmount}

Send Money Securely!`;
}

function runMobileMoneyCalculator() {
    // Prompt user for amount
    let userInput = prompt("Unatuma Ngapi? (KES):");
    
    // Convert input to number
    let amountToSend = Number(userInput);
    
    // Get output div
    const outputDiv = document.getElementById('mobile-output');
    
    // Check if input is valid
    if (isNaN(amountToSend) || amountToSend <= 0) {
        outputDiv.textContent = "Please enter a valid positive amount.";
    } else {
        outputDiv.textContent = estimateTransactionFee(amountToSend);
    }
    
    // Show the output
    outputDiv.style.display = 'block';
}