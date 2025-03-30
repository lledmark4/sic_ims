const mainContent = document.getElementById("mainContent");

const teamsContent = `
    <div class="teams-header">
        <h2>Teams</h2>
        
        <button onclick="addTeam()">Add New Team</button>
    </div>
    <p>List of registered teams and details.</p>
    <div class="teams-table">
        <table>
            <thead>
                <tr>
                    <th>Team Name</th>
                    <th>Team Coordinator</th>
                    <th>Team Leader</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody id="teamsList">
                <tr>
                    <td>Team A</td>
                    <td>John</td>
                    <td>John</td>
                    <td>BSIT</td>
                </tr>
                <tr>
                    <td>Team B</td>
                    <td> Mike</td>
                    <td> Mike</td>
                    <td>BSN</td>
                </tr>
                <tr>
                    <td>Team C</td>
                    <td>Sarah</td>
                    <td>Sarah</td>
                    <td>BSA</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="teams_footer">
    <button class="edit_btn"" onclick="editTeam()">Edit</button>
    <button class="delete_btn"" onclick="editTeam()">Delete</button>
    </div>
`;

mainContent.innerHTML = teamsContent;

function addTeam() {
    alert("Functionality to add a new team will be here.");
}

function editTeam(teamName) {
    alert("Select table row. ");
}