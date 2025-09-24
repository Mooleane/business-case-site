export default function Navbar() {
    return (
        <nav className="nav">
            <ul className="bullet-text">
                <div className="nav-left">
                    <img src="" alt="app-logo" />
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
                </div>

                <div className="nav-right">
                    <section className="profile-section">
                        <button className="btn btn-secondary">Sign Up</button>
                        <button className="btn btn-secondary">Login</button>
                        <img src="src/assets/profile_icon.png" alt="profile-icon" width="50px"/>
                    </section>
                </div>
            </ul>
        </nav>
    )
}