import { Link } from "react-router-dom"
import career_nav_logo from "../assets/career_nav_logo.png"
import profile_icon from "../assets/profile_icon.png"
import settings_icon from "../assets/settings_icon.png"

export default function Navbar() {
    return (
        <nav className="nav">
            <header className="nav-left">
                <img className = "app-logo" src={career_nav_logo} alt="app-logo" />
                <ul className="bullet-text">
                    <li>
                        <Link to="/">CareerNav</Link>
                    </li>
                        |
                    <li>
                        <Link to="/Resources">Resources</Link>
                    </li>
                        |
                    <li>
                        <Link to="/Dashboard">Dashboard</Link>
                    </li>
                        |
                    <li>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXFfzm3KJF-U-vhzD9H3LTYx7cuCiywwXSg0-gyf7bvH1xRQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">The Survey</a>
                    </li>
                </ul>
            </header>

            <aside className="nav-right">
                <section className="profile-section">
                    <Link to="/Signup"className="btn btn-hover btn-small">Sign Up</Link>
                    <Link to="/Login"className="btn btn-hover btn-small">Login</Link>
                    <Link to="/Profile">
                        <img className="profile-icon" src={profile_icon} alt="profile-icon" />
                    </Link>
                    <Link to="/Settings">
                        <img className="settings-icon" src={settings_icon} alt="settings-icon" />
                    </Link>
                </section>
            </aside>
        </nav>
    )
}