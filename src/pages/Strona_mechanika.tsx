import React, {useEffect, useState} from 'react';
import {Menu} from "../components/Menu";

const Strona_mechanika: React.FC = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    //
    // useEffect(() => {
    //     // Check if the user is logged in by looking for a token in localStorage
    //     const token = localStorage.getItem('token');
    //     setIsLoggedIn(!!token); // Convert token existence to a boolean
    // }, []);
    //
    // const handleLogout = () => {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('roles');
    //     setIsLoggedIn(false); // Update state to reflect logout
    //     window.location.href = '/'; // Redirect to the login page
    // };

    return (
        <>
            <Menu></Menu>
            <div className="main">
                <h2>Strona Mechanika</h2>
            </div>
        </>

    );
};

export default Strona_mechanika;
