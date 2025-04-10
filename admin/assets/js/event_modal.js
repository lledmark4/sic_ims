

var addEventButton = document.getElementById('#addEventButton')
addEventButton.addEventListener("click", function (event) {
    // Open Add Event Modal
    if (event.target.id === "addEventButton") {
        document.getElementById("addEventModal").classList.remove("hidden");
    }

    // Close Add Event Modal
    if (event.target.id === "cancelEventButton" || event.target.id === "saveEventButton") {
        document.getElementById("addEventModal").classList.add("hidden");
    }

    // Save Event Logic (can be expanded as needed)
    if (event.target.id === "saveEventButton") {
        const eventName = document.getElementById("eventName").value;
        const eventDate = document.getElementById("eventDate").value;
        const eventTime = document.getElementById("eventTime").value;
        const eventDescription = document.getElementById("eventDescription").value;

        if (eventName && eventDate && eventTime) {
            alert(`Event Saved: ${eventName} on ${eventDate} at ${eventTime}`);
            // You can add logic to save the event data to a database or list
        } else {
            alert("Please fill out all required fields.");
        }
    }
});