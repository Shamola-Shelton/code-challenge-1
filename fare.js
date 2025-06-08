// Challenge 2: Boda Boda Ride Fare Estimator

function calculateBodaFare(distanceInKm) {
    // Fare calculation rules
    let baseFare = 50;                          // KES 50 base fare
    let chargePerKm = 15;                       // KES 15 per kilometer
    let distanceCharge = distanceInKm * chargePerKm;
    let totalFare = baseFare + distanceCharge;
    
    return `Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES ${baseFare}
Mpaka Uko: KES ${distanceCharge}
Total: KES ${totalFare}

Panda Pikipiki!`;
}

function runBodaCalculator() {
    // Prompt user for distance
    let userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
    
    // Convert input to number
    let distanceInKm = Number(userInput);
    
    // Get output div
    const outputDiv = document.getElementById('boda-output');
    
    // Check if input is valid
    if (isNaN(distanceInKm) || distanceInKm <= 0) {
        outputDiv.textContent = "Please enter a valid positive distance.";
    } else {
        outputDiv.textContent = calculateBodaFare(distanceInKm);
    }
    
    // Show the output
    outputDiv.style.display = 'block';
}