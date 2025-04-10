const mainContent = document.getElementById("mainContent");

const eventsContent = `
<div class="ims_sub_header">
    <h2>Events</h2>

    <button onclick="addTeam()">Add New Event</button>
</div>
<div class="ims_sub_details">
    <p>List of registered Events and details.</p>
</div>
<div class="top_panel">
        <div class="table_info">
            <div class="info_group active">
                <p class="label">All</p>
                <span class="value">3</span>
            </div>
            <div class="info_group">
                <p class="label">Track and field</p>
                <span class="value">3</span>
            </div>
            <div class="info_group">
                <p class="label">Individual & Team sports</p>
                <span class="value">3</span>
            </div>
            <div class="info_group">
                <p class="label">Cultural and other competitions</p>
                <span class="value">3</span>
            </div>
        </div>
        <div class="table_info_dropdown">
            <label for="event_table">Event:</label>
            <select id="sports" name="sports" class="custom_select">
                <option selected>All (3)</option>
                <option>Track and field (3)</option>
                <option>Individual & Team sports (3)</option>
                <option>Cultural and other competitions (3)</option>
            </select>
        </div>
        <div class="table_search">
            <input type="text" placeholder="Enter event name">
            <button> Search</button>
        </div>
    </div>
<div class="ims_table">
    <table>
        <thead>
            <tr>
                <th>Event Name</th>
                <th>No. of players(Men)</th>
                <th>No. of players(Women)</th>
            </tr>
        </thead>
        <tbody id="img_list">
            <tr>
                <td class="name_column">Basketball</td>
                <td>12</td>
                <td>12</td>
            </tr>
    
            <tr>
                <td class="name_column">Volleyball</td>
                <td>14</td>
                <td>14</td>
            </tr>     
            <tr>
                <td class="name_column">400 meter dash</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td class="name_column">chess</td>
                <td>1</td>
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