import { Link } from "react-router-dom";

export default function DasboardNavbar() {	
    return(
    	<nav className="dashboardnav">
      		<Link to="/Dashboard" className="btn btn-hover btn-secondary">Dashboard</Link>
      		<Link to="/Career-Recommendations" className="btn btn-hover btn-secondary">Career Recommendations</Link>
      		<Link to="/Trend-Tracker" className="btn btn-hover btn-secondary">Trend Tracker</Link>
    	</nav>
    )
}