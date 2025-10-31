import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';

export default function ProfileSetup() {
    const navigate = useNavigate();
    
    const [profile, setProfile] = useState({
        age: '',
        country: '',
        state: '',
        hobbies: '',
        work: ''
    });

    useEffect(() => {
        const savedProfile = localStorage.getItem('userProfile');
        if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
        }
    }, []);

    // Replaces the old profile info with the new profile info
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    };

    // Saves the profile info to local storage
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userProfile', JSON.stringify(profile));
        navigate("/Dashboard");
    };

    return (
        <section id="container">
            <section className="profile-setup">
                <h2>Configure Profile</h2>
                <hr />
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
                            placeholder="List your hobbies (e.g., Drawing, Programming, Music, etc)."
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
                            placeholder="Describe your work preferences (e.g., Working alone, Being a leader, Having breaks, etc)."
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