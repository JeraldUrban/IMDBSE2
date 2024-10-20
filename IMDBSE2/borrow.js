
// Example Code
const validEquipmentCodes = ["ABC123", "XYZ456", "EFG789"];


document.getElementById('borrow-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const enteredCode = document.getElementById('equipment-code').value.trim();
    if (validEquipmentCodes.includes(enteredCode)) {
        
        window.location.href = "date-time.html"; 
    } else {
       
        showErrorModal();
    }
});

function showErrorModal() {
    document.getElementById("error-modal").style.display = "flex";
}

document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("error-modal").style.display = "none";
});


document.getElementById("back-btn").addEventListener("click", function(event) {
    event.preventDefault(); 
    window.location.href = "login.html"; 
});
