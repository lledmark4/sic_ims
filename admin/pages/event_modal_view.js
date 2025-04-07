// Dashboard content
document.getElementById("mainContent").innerHTML = `
<div class="add_event_modal " id="addEventModal">
    <div class="modal_content">
            <h2>Add New Event</h2>
            <label for="eventName">Event Name</label>
            <input type="text" id="eventName" placeholder="Enter event name" />

            <label for="eventDate">Date</label>
            <input type="date" id="eventDate" />

            <label for="eventTime">Time</label>
            <input type="time" id="eventTime" />

            <label for="eventDescription">Description</label>
            <textarea id="eventDescription" placeholder="Enter event description"></textarea>

            <div class="modal_actions">
                <button id="saveEventButton">Save</button>
                <button id="cancelEventButton">Cancel</button>
            </div>
        </div>
</div>
`;





