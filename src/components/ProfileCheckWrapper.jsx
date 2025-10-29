import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProfileCheckWrapper({ children }) {
    const [profileExists, setProfileExists] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // This check needs to be in useEffect to run on the client side
        // where localStorage is available.
        const savedProfile = localStorage.getItem('userProfile');
        setProfileExists(savedProfile);
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <p className="main-header">Loading...</p>;
    }

    if (!profileExists) {
        return (
            <>
                <h3 className="main-header">Please set up your profile to get personalized AI results.<br/></h3>
                <section id="container" className='profile-redirect'>
                    <Link to="/Profile" className="btn btn-hover btn-inbetween">Set Up Profile</Link>
                </section>
            </>
        );
    }

    return children;
}
