export default function Navbar() {
    return (
        <nav className="nav">
            <header className="nav-left">
                <img src="" alt="app-logo" />
                <ul className="bullet-text">
                    <li>
                        <a className="app-text" href="/">App Name</a>
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
                    <a className="btn btn-hover btn-secondary" href="Signup">Sign Up</a>
                    <a className="btn btn-hover btn-secondary" href="Login">Login</a>
                    <a href="Profile">
                        <img src="src/assets/profile_icon.png" alt="profile-icon" width="40px"/>
                    </a>
                </section>
            </aside>
        </nav>
    )
}