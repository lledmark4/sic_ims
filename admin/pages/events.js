const mainContent = document.getElementById("mainContent");

const eventsContent = `
<div class="ims_sub_header">
    <h2>Events</h2>

    <button onclick="addTeam()">Add New Event</button>
</div>
<div class="ims_sub_details">
    <p>List of registered Events and details.</p>
</div>
<div class="top_buttons">
    <button>Filters</button>
    <button> View</button>
</div>

<div class="ims_table">
    <table>
        <thead>
            <tr>
                <th>Event Name</th>
                <th>Event Category</th>
                <th>Event Type</th>
                <th>Required Participants</th>
            </tr>
        </thead>
        <tbody id="img_list">
            <tr>
                <td class="name_column">Basketball</td>
                <td>None</td>
                <td>Team Event</td>
                <td>12</td>
            </tr>
    
            <tr>
                <td class="name_column">Volleyball</td>
                <td>None</td>
                <td>Team Event</td>
                <td>14</td>
            </tr>
            <tr>
                <td rowspan="2" class="name_column">Track and Field</td>
                <td>100 meter dash</td>
                <td>Individual Event</td>
                <td>1</td>
            </tr>
            
            <tr>
                <td>400 meter dash</td>
                <td>Individual Event</td>
                <td>1</td>
            </tr>
            <tr>
                <td class="name_column">chess</td>
                <td>None</td>
                <td>Individual Event</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="ims_sub_footer">
    <button class="edit_btn" onclick="editTeam()">Edit</button>
    <button class="delete_btn" onclick="editTeam()">Delete</button>
</div>
`;

mainContent.innerHTML = eventsContent;