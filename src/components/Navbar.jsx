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
                        <a className="app-text" href="/">CareerNav</a>
                    </li>
                        |
                    <li>
                        <a href="Resources">Resources</a>
                    </li>
                        |
                    <li>
                        <a href="Dashboard">Dashboard</a>
                    </li>
                </ul>
            </header>

            <aside className="nav-right">
                <section className="profile-section">
                    <a className="btn btn-hover btn-small" href="Signup">Sign Up</a>
                    <a className="btn btn-hover btn-small" href="Login">Login</a>
                    <a href="Profile">
                        <img className="profile-icon" src={profile_icon} alt="profile-icon" />
                    </a>
                    <a href="Settings">
                        <img className="settings-icon" src={settings_icon} alt="settings-icon" />
                    </a>
                </section>
            </aside>
        </nav>
    )
}