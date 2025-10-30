import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProfileCheckWrapper({ children }) {
    const [profileExists, setProfileExists] = useState(false);

    useEffect(() => {
        // This check needs to be in useEffect to run on the client side
        // where localStorage is available.
        const savedProfile = localStorage.getItem('userProfile');
        setProfileExists(savedProfile);
    }, []);

    if (!profileExists) {
        return (
            <>
                <section id="container" className='profile-redirect'>
                <p className="main-header">Create your profile to get <i><b>personalized</b></i> results.<br/></p>
                    <Link to="/Profile" className="btn btn-hover btn-inbetween">Set Up Profile</Link>
                </section>
            </>
        );
    }

    return children;
}
