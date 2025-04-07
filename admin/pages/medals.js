const mainContent = document.getElementById("mainContent");

const medalsContent = `
    <div class="ims_sub_header">
        <h2>Medal tally</h2>
        
        <button onclick="addTeam()">Athletes Gallery</button>
    </div>
    <div class="ims_sub_details">
        <p>Summary of number of medals per team..</p>
    </div>
    <div class="top_buttons">
            <button>Filters</button>
            <button> View</button>    
    </div>
    <div class="ims_table">
        <table>
            <thead>
                <tr>
                    <th>Team Logo</th>
                    <th>Team Name</th>
                    <th>Gold Medal</th>
                    <th>Silver Medal</th>
                    <th>Bronse Medal</th>    
                    <th>Rank</th>
                </tr>
            </thead>
            <tbody id="img_list">
                <tr>
                    <td></td>
                    <td>Team A</td>
                    <td>6</td>
                    <td>15</td>
                    <td>18</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Team B</td>
                    <td>4</td>
                    <td>9</td>
                    <td>11</td>
                    <td>3</td>
                </tr>
                <tr>
                     <td></td>
                    <td>Team C</td>
                    <td>14</td>
                    <td>4</td>
                    <td>9</td>
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

mainContent.innerHTML = medalsContent;

function addTeam() {
    alert("Functionality to add a new team will be here.");
}

function editTeam(teamName) {
    alert("Select table row. ");
}