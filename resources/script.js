// Add an event listener to the form
document.getElementById('redirectForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to reload the page

    // Get the number from the input field
    const number = document.getElementById('numberInput').value;
    const errorMessage = document.getElementById('errorMessage'); // The div for error messages

    // Clear any previous error messages
    errorMessage.textContent = '';

    // Check if the entered number matches the expected number (1093523)
    if (number === "1093523") {
        // Redirect to the formed URL
        window.location.href = `https://23cft23.github.io/${number}/`;
    } else {
        // Show an error message if the number is incorrect
        errorMessage.textContent = "Error: Incorrect number. Please enter the correct number to proceed.";
        errorMessage.style.color = "red"; // Styling the error message in red
    }
});
