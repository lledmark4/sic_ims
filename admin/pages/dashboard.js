// Dashboard content
document.getElementById("mainContent").innerHTML = `
   <div class="ims_sub_header">
    <h2>Dashboard</h2>
</div>
<div class="ims_sub_details">
    <p>Welcome back! Admin</p>
</div>
<br>
        <div class="dashboard-cards">
            <div class="card">
                <h3>Teams</h3>
                <p>4</p>
            </div>
            <div class="card">
                <h3>Events</h3>
                <p>27</p>
            </div>
            <div class="card">
                <h3>Particiants</h3>
                <p>58/70</p>
            </div>
            <div class="card">
                <h3>Evaluated</h3>
                <p>30/58</p>
            </div>
        </div>
    
        <div class="dashboard-charts">
            <div class="chart">
                <h3>Recent Game Result</h3>
                <!-- Placeholder for a chart -->
                <div class="chart-placeholder">No Result</div>
            </div>
            <div class="chart">
                <h3>Players per team</h3>
                <!-- Placeholder for a chart -->
                <div class="chart-placeholder">
                <table>
            <thead>
                <tr>
                    <th>Team Name</th>
                    <th>Participants</th>
                </tr>
            </thead>
            <tbody id="img_list">
                <tr>          
                    <td>Team A</td>
                    <td>40/70</td>
                </tr>
                <tr>
                    <td>Team B</td>
                    <td>50/70</td>
                </tr>
                <tr>
                    <td>Team C</td>
                    <td>67/70</td>
                </tr>
            </tbody>
        </table>
                </div>
            </div>
        </div>
    
        <div class="dashboard-table">
            <h3>Recent Activities</h3>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Action</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>Signed In</td>
                        <td>2025-03-29</td>
                        <td>Success</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>Signed Out</td>
                        <td>2025-03-28</td>
                        <td>Success</td>
                    </tr>
                    <tr>
                        <td>Mike Johnson</td>
                        <td>Profile Updated</td>
                        <td>2025-03-27</td>
                        <td>Pending</td>
                    </tr>
                </tbody>
            </table>
        </div>
`;



