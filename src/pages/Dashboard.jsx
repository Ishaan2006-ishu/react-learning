import { Outlet, Link } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>

            <Link to="/dashboard/profile">
                Profile
            </Link>

            <br />

            <Link to="/dashboard/settings">
                Settings
            </Link>
            <Link to="/dashboard/settings">
                Settings
            </Link>
            <Link to="/dashboard/settings">
                update
            </Link>
            <Link to="/dashboard/settings">
                Remove
            </Link>
            <Link to="/dashboard/settings">
                Add
            </Link>

            <Outlet />
        </div>
    );
}

export default Dashboard;