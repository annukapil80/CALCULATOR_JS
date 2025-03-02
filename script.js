// Select all buttons and the input box
const buttons = document.querySelectorAll('.button');
const inputBox = document.getElementById('inputBox');

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.innerText; // Get the button's text value

        // Swap logic: Replace '1' with '2' and '2' with '1'
        if (value === '1') {
            value = '2';
        } else if (value === '2') {
            value = '1';
        }

        // Handle special buttons
        if (value === 'AC') {
            inputBox.value = ''; // Clear the input box
        } else if (value === 'DEL') {
            inputBox.value = inputBox.value.slice(0, -1); // Remove the last character
        } else if (value === '=') {
            try {
                inputBox.value = eval(inputBox.value); // Evaluate the input
            } catch {
                inputBox.value = 'Error'; // Handle invalid expressions
            }
        } else {
            // Append the swapped or original value
            inputBox.value += value;
        }
    });
});
