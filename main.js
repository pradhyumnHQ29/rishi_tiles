// Function to calculate the number of tiles and total cost
function calculateTiles() {
    // Retrieve values from input fields
    const tileWidth = parseFloat(document.getElementById('tile-width').value);
    const tileHeight = parseFloat(document.getElementById('tile-height').value);
    const roomLength = parseFloat(document.getElementById('room-length').value);
    const roomWidth = parseFloat(document.getElementById('room-width').value);
    const tileCost = parseFloat(document.getElementById('tile-cost').value);

    // Check if all inputs are valid numbers
    if (isNaN(tileWidth) || isNaN(tileHeight) || isNaN(roomLength) || isNaN(roomWidth) || isNaN(tileCost)) {
        document.getElementById('result').innerHTML = `<p style="color: red;">Please enter valid numbers in all fields.</p>`;
        return;
    }

    // Calculate areas in square meters
    const tileArea = (tileWidth / 100) * (tileHeight / 100); // Tile area in square meters
    const roomArea = (roomLength / 100) * (roomWidth / 100); // Room area in square meters

    // Calculate tiles needed and total cost
    const tilesNeeded = Math.ceil(roomArea / tileArea);
    const totalCost = tilesNeeded * tileCost;

    // Display the result
    document.getElementById('result').innerHTML = `
        <p>Tiles Required: <strong>${tilesNeeded}</strong></p>
        <p>Total Cost: <strong>₹${totalCost.toFixed(2)}</strong></p>
    `;
}

// Attach the function to the button (if used in a script file)
document.getElementById("calculate-button").addEventListener("click", calculateTiles);

