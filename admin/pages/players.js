const mainContent = document.getElementById("mainContent");

const playersContent = `
    <div class="ims_sub_header">
        <h2>Players</h2>
        
        <button onclick="addTeam()">Athletes Gallery</button>
    </div>
    <div class="ims_sub_details">
        <p>List of registered Players and details.</p>
    </div>
    <div class="top_panel">
        <div class="table_info">
            <div class="info_group active">
                <p class="label">All</p>
                <span class="value">3</span>
            </div>
            <div class="info_group">
                <p class="label">Team A</p>
                <span class="value">3</span>
            </div>
            <div class="info_group">
                <p class="label">Team B</p>
                <span class="value">3</span>
            </div>
            <div class="info_group">
                <p class="label">Team C</p>
                <span class="value">3</span>
            </div>
        </div>
        <div class="table_info_dropdown">
            <label for="team">Team:</label>
            <select id="sports" name="sports" class="custom_select">
                <option selected>All (3)</option>
                <option>Team A (3)</option>
                <option>Team B (3)</option>
                <option>Team C (3)</option>
            </select>
        </div>
        <div class="table_event_dropdown">
            <label for="event">Event:</label>
            <select id="sports" name="sports" class="custom_select">
                <option selected>All</option>
                <option>Basketball</option>
                <option>Volleyball</option>
                <option>Chess</option>
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
                    <th>Name</th>
                    <th>Course</th>
                    <th>Year</th>
                    <th>Department</th>
                    <th>Event</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody id="img_list">
                <tr>
                    <td>John A John</td>
                    <td>BSIT</td>
                    <td>First Year</td>
                    <td>SIT</td>
                    <td>BasketBall</td>
                    <td>No Medical Certifacate</td>
                </tr>
                <tr>
                    <td>John A John</td>
                    <td>BSIT</td>
                    <td>First Year</td>
                    <td>SIT</td>
                    <td>BasketBall</td>
                    <td>Eligible</td>
                </tr>
                <tr>
                    <td>John A John</td>
                    <td>BSIT</td>
                    <td>First Year</td>
                    <td>SIT</td>
                    <td>Basketball<br>Cress</td>
                    <td>No Medical Certifacate <br> No Parents Permit</td>
                    
                </tr>
            </tbody>
        </table>
    </div>
    <div class="ims_sub_footer">
    
    </div>
`;

mainContent.innerHTML = playersContent;

function addTeam() {
    alert("Functionality to add a new team will be here.");
}

function editTeam(teamName) {
    alert("Select table row. ");
}