const mainContent = document.getElementById("mainContent");

const teamsContent = `
    <div class="ims_sub_header">
        <h2>Teams</h2>
        
        <button onclick="addTeam()">Add New Team</button>
    </div>
    <div class="ims_sub_details">
        <p>List of registered teams and details.</p>
    </div>
    <div class="top_panel">
        <div class="table_info">
            <div class="info_group active">
                <p class="label">All</p>
                <span class="value">3</span>
            </div>
        </div>
        <div class="top_buttons">
            <button>Filters</button>
            <button> View</button>    
        </div>
    </div>
    
    <div class="ims_table">
        <table>
            <thead>
                <tr>
                    <th>Team Color</th>
                    <th>Team Name</th>
                    <th>Team Coordinator</th>
                    <th>Team Leader</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody id="img_list">
                <tr>
                    <td>Red</td>                
                    <td>Team A</td>
                    <td>John</td>
                    <td>John</td>
                    <td>BSIT</td>
                </tr>
                <tr>
                    <td>Yellow</td>
                    <td>Team B</td>
                    <td> Mike</td>
                    <td> Mike</td>
                    <td>BSN</td>
                </tr>
                <tr>
                    <td>Yellow</td>
                    <td>Team C</td>
                    <td>Sarah</td>
                    <td>Sarah</td>
                    <td>BSA</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="ims_sub_footer">
    <button class="edit_btn" onclick="editTeam()">Edit</button>
    <button class="delete_btn" onclick="editTeam()">Delete</button>
    </div>
`;

mainContent.innerHTML = teamsContent;

function addTeam() {
    alert("Functionality to add a new team will be here.");
}

function editTeam(teamName) {
    alert("Select table row. ");
}