const mainContent = document.getElementById("mainContent");

const eventsContent = `
    <div class="events-header">
        <h2>Events</h2>
        <p>Manage and view all sports events.</p>
    </div>

    <div class="events-actions">
        <button class="add-event-btn">Add Event</button>
        <button class="export-event-btn">Export to CSV</button>
    </div>

    <div class="events-table-container">
        <table class="events-table">
            <thead>
                <tr>
                    <th>Event Name</th>
                    <th>Date</th>
                    <th>Venue</th>
                    <th>Participants</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Basketball Tournament</td>
                    <td>2025-04-15</td>
                    <td>Gymnasium</td>
                    <td>12 Teams</td>
                    <td>Ongoing</td>
                    <td>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Soccer Championship</td>
                    <td>2025-05-10</td>
                    <td>Stadium</td>
                    <td>8 Teams</td>
                    <td>Upcoming</td>
                    <td>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Volleyball Cup</td>
                    <td>2025-06-01</td>
                    <td>Sports Hall</td>
                    <td>10 Teams</td>
                    <td>Completed</td>
                    <td>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="events-footer">
        <button class="print-btn">Print</button>
        <button class="settings-btn">Settings</button>
    </div>
`;

mainContent.innerHTML = eventsContent;