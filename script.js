function getFormvalue() {
    //Write your code here
	function getFormvalue() {
    // Get form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Combine first and last name
    const fullName = `${firstName} ${lastName}`;

    // Display the alert with the full name
    alert(fullName);
}

// Add event listener to the form submit button
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    getFormvalue(); // Call the function to get form values and show the alert
});


