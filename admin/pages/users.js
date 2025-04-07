const mainContent = document.getElementById("mainContent");

const usersContent = `
    <div class="ims_sub_header">
        <h2>User</h2>
        
        <button onclick="addTeam()">Athletes Gallery</button>
    </div>
    <div class="ims_sub_details">
        <p>List of registered Users and details.</p>
    </div>
    <div class="top_buttons">
            <button>Filters</button>
            <button> View</button>    
    </div>
    <div class="ims_table">
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Date Created</th>
                    <th>Access Role</th>    
                    <th>Status</th>
                </tr>
            </thead>
            <tbody id="img_list">
                <tr>
                    <td>1</td>
                    <td>Kohn Koe (You)</td>
                    <td>Administrator</td>
                    <td>02/04/25 11:00pm</td>
                    <td>Admin</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Kohn Koe </td>
                    <td>Committee</td>
                    <td>02/04/25 11:00pm</td>
                    <td>Evaluation</td>
                    <td>Active</td>
                </tr>
                <tr>
                     <td>3</td>
                    <td>Kohn Koe </td>
                    <td>Event Coordinator</td>
                    <td>02/04/25 11:00pm</td>
                    <td>Events</td>
                    <td>Active</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="ims_sub_footer">
    <button class="edit_btn" onclick="editTeam()">Edit</button>
    <button class="delete_btn" onclick="editTeam()">Delete</button>
    </div>
`;

mainContent.innerHTML = usersContent;

function addTeam() {
    alert("Functionality to add a new team will be here.");
}

function editTeam(teamName) {
    alert("Select table row. ");
}