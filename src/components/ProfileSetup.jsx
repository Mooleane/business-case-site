import { useState, useEffect } from 'react';

export default function ProfileSetup() {
    const [profile, setProfile] = useState({
        age: '',
        country: '',
        state: '',
        hobbies: '',
        work: ''
    });
    const [message, setMessage] = useState('');

    useEffect(() => {
        const savedProfile = localStorage.getItem('userProfile');
        if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userProfile', JSON.stringify(profile));
        setMessage('Profile saved successfully!');
        setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
    };

    return (
        <section id="container">
            <section className="profile-setup">
                <h2>Configure Profile</h2>
                {message && <p className="success-message">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="age">Age: </label>
                        <input 
                            type="number" 
                            id="age" 
                            name="age" 
                            value={profile.age}
                            onChange={handleChange}
                            min="1" 
                            max="120" 
                            required 
                        />
                        <br/><br/>
                        <label htmlFor="country">Country: </label>
                        <select id="country" name="country" value={profile.country} onChange={handleChange} required>
                            <option value="">Select a country</option>
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="uk">United Kingdom</option>
                        </select>
                        <br/><br/>
                        <label htmlFor="state">State: </label>
                        <select id="state" name="state" value={profile.state} onChange={handleChange}>
                            <option value="">Select a state</option>
                            <option value="pa">PA</option>
                            <option value="ny">NY</option>
                            <option value="ca">CA</option>
                        </select>
                    </p>
                    <p>
                        <label htmlFor="hobbies">Hobbies: </label><br/>
                        <textarea 
                            id="hobbies" 
                            name="hobbies" 
                            value={profile.hobbies}
                            onChange={handleChange}
                            rows="4"
                            cols="50" 
                            placeholder="List your hobbies"
                        />
                        <br/><br/>
                        <label htmlFor="work">Work Preferences:</label><br/>
                        <textarea 
                            id="work" 
                            name="work" 
                            value={profile.work}
                            onChange={handleChange}
                            rows="4" 
                            cols="50"
                            placeholder="Describe your work preferences"
                        />
                    </p>
                    <section>
                        <button type="submit" className="btn btn-hover btn-secondary">Save</button>
                    </section>
                </form>
            </section>
        </section>
    )
}