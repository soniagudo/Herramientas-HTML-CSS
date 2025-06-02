function disablePastDates() {
    const today = new Date();
    const dateInput = document.getElementById("reservationDate");
    const formattedDate = today.toISOString().split('T')[0]; 
    dateInput.setAttribute("min", formattedDate);
}

function validateTime() {
    const timeInput = document.getElementById("reservationTime");
    const value = timeInput.value;

    const validTimes = [
        "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
        "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
        "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"
    ];

    if (!validTimes.includes(value)) {
        alert("Por favor, selecciona una hora válida entre las 12:00 PM y las 12:00 AM.");
        timeInput.setCustomValidity("Hora no válida");
        timeInput.value = ""; 
    } else {
        timeInput.setCustomValidity(""); 
    }
}

function checkFormCompletion() {
    const form = document.getElementById("reservationForm");
    const submitButton = form.querySelector("button");
    const requiredFields = form.querySelectorAll("[required]");

    let formValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value) {
            formValid = false;
        }
    });
    
    if (formValid) {
        form.style.backgroundColor = "#d4edda";  
    } else {
        form.style.backgroundColor = "";  
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("reservationDate").addEventListener("change", checkFormCompletion);
    document.getElementById("reservationTime").addEventListener("input", validateTime);
    document.getElementById("reservationTime").addEventListener("change", checkFormCompletion);
    disablePastDates(); 
});
