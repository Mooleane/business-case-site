export default function SettingsChanger() {
  return (
    <section id="container">
      <section className="settings-changer">
        <h2>Settings</h2>
        <hr/>

        <section className="settings-field">
          <label for="username">Username:</label>
          <span>Not set</span>
          <button type="button" className="btn btn-small edit-btn">Edit</button>
        </section>

        <section className="settings-field">
          <label for="email">Email:</label>
          <span>Not set</span>
          <button type="button" className="btn btn-small edit-btn">Edit</button>
          <button type="button" className="btn btn-small verify-btn">Verify</button>
        </section>

        <section className="settings-field">
          <label for="password">Password:</label>
          <span>••••••••</span>
          <button type="button" className="btn btn-small edit-btn">Edit</button>
        </section>

        <section className="settings-field">
          <label for="dark-mode">Dark Mode:</label>
          <section className="toggle-switch">
            <input type="checkbox" id="dark-mode"/>
            <span className="toggle-slider"></span>
          </section>
        </section>

        <section className="settings-actions">
          <button type="button" className="btn btn-hover btn-secondary">Save</button>
          <a type="button" className="btn btn-hover btn-secondary" href="Profile">Configure Profile</a>
        </section>
      </section>
    </section>
  );
}
