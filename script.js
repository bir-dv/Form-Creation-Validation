//Wrap your entire script in a DOMContentLoaded event listener.
//This ensures your JavaScript runs after the entire HTML document has been loaded.

document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener('submit', function(event){
        event.preventDefault();

        //retrive and trim input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);

        let isValid = true; // Tracks overall validation status
        let messages = []; // Stores validation error messages

        if (username.length < 3 ) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        if (!(email.includes("@") && email.includes("."))) {
            isValid = false;
            messages.push("Email must contain '@' and '.'.");
        }

        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 3 characters long.")
        }

        // Display feedback
        feedbackDiv.style.display = "block"; // Make feedback visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green for success
        } else {
            feedbackDiv.innerHTML = messages.join("<br>"); // Show all error messages
            feedbackDiv.style.color = "#dc3545"; // Red for errors
        }
    })



})