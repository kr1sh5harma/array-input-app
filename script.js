// Initial array of numbers
let numbers = [];

// Function to add a number to the array
function addNumber() {
  // Get the input element and its value
  const inputElement = document.getElementById("numberInput");
  const userInput = parseFloat(inputElement.value); // Convert input to a number

  // Check if the input is valid
  if (!isNaN(userInput)) {
    // Add the number to the array
    numbers.push(userInput);

    // Clear the input field
    inputElement.value = "";

    // Update the displayed array
    displayArray();
  } else {
    alert("Please enter a valid number!");
  }
}

// Function to display the array
function displayArray() {
  const outputElement = document.getElementById("arrayOutput");
  outputElement.textContent = `[${numbers.join(", ")}]`;
}

// Display the initial array when the page loads
displayArray();