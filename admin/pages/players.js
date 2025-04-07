const mainContent = document.getElementById("mainContent");

const playersContent = `
    <div class="ims_sub_header">
        <h2>Players</h2>
        
        <button onclick="addTeam()">Athletes Gallery</button>
    </div>
    <div class="ims_sub_details">
        <p>List of registered Players and details.</p>
    </div>
    <div class="top_buttons">
            <button>Filters</button>
            <button> View</button>    
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
    <button class="edit_btn" onclick="editTeam()">Edit</button>
    <button class="delete_btn" onclick="editTeam()">Delete</button>
    </div>
`;

mainContent.innerHTML = playersContent;

function addTeam() {
    alert("Functionality to add a new team will be here.");
}

function editTeam(teamName) {
    alert("Select table row. ");
}