function getFormvalue() {
    // Retrieve the values from the input fields
    const firstName = document.querySelector('input[name="firstname"]').value;
    const lastName = document.querySelector('input[name="lastname"]').value;

    // Display the combined first and last names in an alert
    alert(firstName + " " + lastName);
}
