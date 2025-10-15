import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SettingsChanger() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const [editingUsername, setEditingUsername] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings saved:', { username, email, password, darkMode });
    setEditingUsername(false);
    setEditingEmail(false);
    setEditingPassword(false);
  };

  const goToProfile = () => navigate('/Profile');
  const verifyEmail = () => alert('Verification email sent to ' + email);

  return (
    <section id="container">
      <section className="settings-changer">
        <h2>Settings</h2>

        <form onSubmit={handleSubmit}>
          <div className="settings-field">
            <label htmlFor="username">Username:</label>
            {editingUsername ? (
              <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            ) : (
              <span>{username || 'Not set'}</span>
            )}
            <button type="button" className="btn btn-small edit-btn" onClick={() => setEditingUsername(!editingUsername)}>
              {editingUsername ? 'Cancel' : 'Edit'}
            </button>
          </div>

          <div className="settings-field">
            <label htmlFor="email">Email:</label>
            {editingEmail ? (
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            ) : (
              <span>{email || 'Not set'}</span>
            )}
            <button type="button" className="btn btn-small edit-btn" onClick={() => setEditingEmail(!editingEmail)}>
              {editingEmail ? 'Cancel' : 'Edit'}
            </button>
            {email && (
              <button type="button" className="btn btn-small verify-btn" onClick={verifyEmail}>
                Verify
              </button>
            )}
          </div>

          <div className="settings-field">
            <label htmlFor="password">Password:</label>
            {editingPassword ? (
              <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            ) : (
              <span>••••••••</span>
            )}
            <button type="button" className="btn btn-small edit-btn" onClick={() => setEditingPassword(!editingPassword)}>
              {editingPassword ? 'Cancel' : 'Edit'}
            </button>
          </div>

          <div className="settings-field">
            <label htmlFor="dark-mode">Dark Mode:</label>
            <div className="toggle-switch">
              <span className="toggle-slider"></span>
            </div>
          </div>

          <div className="settings-actions">
            <button type="submit" className="btn btn-hover btn-secondary">Save</button>
            <button type="button" className="btn btn-hover btn-secondary" onClick={goToProfile}>
              Configure Profile
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}
