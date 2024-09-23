document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form field values
    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('fatherName').value;
    const address = document.getElementById('address').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const email = document.getElementById('email').value;
    const branch = document.getElementById('branch').value;

    // Check if all required fields are filled
    if (!name || !fatherName || !address || !gender || !email || !branch) {
        alert('Please fill in all required fields.');
        return;
    }

    // Gather form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Log form data to console
    console.log('Form Data:', data);
    alert('Form submitted successfully!');
});
