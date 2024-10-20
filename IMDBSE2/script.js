// Sample accounts for testing
const accounts = [
    { email: "admin@example.com", password: "Admin123", firstName: "John", lastName: "Doe", role: "admin" },
    { email: "staff@example.com", password: "Staff123", firstName: "Jane", lastName: "Doe", role: "staff" },
    { email: "borrower@example.com", password: "Borrower123", firstName: "Bob", lastName: "Smith", role: "borrower" }
];

function validateForm(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const role = document.querySelector('input[name="role"]:checked');

    
    if (!email || !password || !firstName || !lastName || !role) {
        showError("Please fill in all the fields.");
        return false;
    }

    
    const account = accounts.find(acc =>
        acc.email === email &&
        acc.password === password &&
        acc.firstName === firstName &&
        acc.lastName === lastName &&
        acc.role === role.value
    );

    if (account) {
        // Redirect based on role (admin, staff, or borrower)
        window.location.href = "borrow.html";
    } else {
        showError("Entered details do not match any staff/admin accounts.");
    }

    return false; 
}

function showError(message) {
    const modal = document.getElementById("error-modal");
    document.querySelector(".modal-content p").textContent = message;
    modal.style.display = "flex"; // Show the modal
}

function closeModal() {
    const modal = document.getElementById("error-modal");
    modal.style.display = "none"; // Hide the modal
}

// Add event listener for the modal close button
document.querySelector(".close-btn").addEventListener("click", closeModal);

// Add event listener for form submission
document.querySelector('form').addEventListener('submit', validateForm);
