document.addEventListener('DOMContentLoaded', getAllInputs);

/**
 * This function will get all the input fields and add an event listener on their activities
 */
function getAllInputs() {
    // Get all the input fields in the `input` NodeList
    const inputs = document.querySelectorAll('.controls input');
    // Loop for each item and attach an event listener to it
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
}

/**
 * This function updates the CSS property values
 */
function handleUpdate() {
    // Get the `data-*` attributes from the DOM
    const suffix = this.dataset.sizing || '';
    // And update the CSS property on it dynamically
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}