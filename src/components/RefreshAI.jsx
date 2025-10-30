import { useState, useEffect } from 'react';


export default function Refresh({refresh}) {
    const [profileExists, setProfileExists] = useState(false);

    useEffect(() => {
        // This check needs to be in useEffect to run on the client side
        // where localStorage is available.
        const savedProfile = localStorage.getItem('userProfile');
        setProfileExists(savedProfile);
    }, []);
    
    if (profileExists) {
        return (
            <button className="btn btn-hover btn-ai-refresh" onClick={refresh}>Refresh AI Results</button>
        );
    }
}