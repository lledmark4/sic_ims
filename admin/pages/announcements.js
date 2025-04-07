const mainContent = document.getElementById("mainContent");

const announcementsContent = `
    <div class="ims_sub_header">
        <h2>Announcements</h2>
        
        <button onclick="addTeam()">Post New Announcement</button>
    </div>
    <div class="ims_sub_details">
        <p>List of posted announcements</p>
    </div>
    <div class="top_buttons">
            <button>Filters</button>
            <button> View</button>    
    </div>
    <div class="announcements_container">
        <div class="announcements_card">
            <div class="ann_header">
                <h4>Posted by: Sir mamsdsfke<h4>
                <p>Date posted: 2025-04-05</p>
            </div>
            <div class="ann_body">
                <h3>Opening Ceremony</h3>
                <p>Join us at the gym for the grand opening ceremony of the intramurals!</p>
                <div class="ims_sub_footer">
                    <button class="edit_btn" onclick="editTeam()">Edit</button>
                    <button class="delete_btn" onclick="editTeam()">Delete</button>
                </div>
            </div>
        </div>
    
        <div class="announcements_card">
            <div class="ann_header">
                <h4>Posted by: Sir mamsdsfke<h4>
                <p>Date posted: 2025-04-05</p>
            </div>
            <div class="ann_body">
                <h3>Basketball Finals</h3>
                <p>The final match between Team A and Team B will take place at 3 PM.</p>
                <div class="ims_sub_footer">
                    <button class="edit_btn" onclick="editTeam()">Edit</button>
                    <button class="delete_btn" onclick="editTeam()">Delete</button>
                </div>
            </div>
        </div>
    </div>
    
`;

mainContent.innerHTML = announcementsContent;

function addTeam() {
    alert("Functionality to add a new team will be here.");
}

function editTeam(teamName) {
    alert("Select table row. ");
}