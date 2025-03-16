import React, {useEffect, useState} from 'react';

export const Menu: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        // Check if the user is logged in by looking for a token in localStorage
        const token = localStorage.getItem('token');
        const roles = localStorage.getItem('roles'); // Assuming roles are stored in localStorage as a JSON string

        setIsLoggedIn(!!token); // Convert token existence to a boolean
        setRole(roles ? JSON.parse(roles)[0] : null); // Assuming roles is an array and we want the first role
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('roles');
        setIsLoggedIn(false); // Update state to reflect logout
        window.location.href = '/'; // Redirect to the login page
    };

    return (
        <nav className="menu">
            <ul>
                <li>
                    <a href="/"> <img src="/car.png" style={{width: "25px", height: "25px"}}/>
                    </a>
                </li>
                <li><a href="/">Strona główna</a></li>
                <li><a href="/Dodanie_zgłoszenia">Dodaj zgłoszenie</a></li>
                {isLoggedIn && (role === 'ROLE_ADMIN' || role === 'ROLE_MECHANIC') && (
                    <li><a href="/Lista_napraw">Naprawy</a></li>
                )}
                <li><a href="/Strona_mechanika">Strona mechanika</a></li>
                {isLoggedIn && (role === 'ROLE_ADMIN' || role === 'ROLE_MECHANIC') && (
                    <li><a href="/Przyjęcie_naprawy">Przyjmij naprawę</a></li>
                )}
                {isLoggedIn && (role === 'ROLE_ADMIN') && (
                    <li><a href="/Lista_klientów">Klienci</a></li>
                )}
                {isLoggedIn && (role === 'ROLE_ADMIN' || role === 'ROLE_MECHANIC') && (
                    <li><a href="/Lista_pojazdów">Pojazdy</a></li>
                )}
                {isLoggedIn && (role === 'ROLE_ADMIN') && (
                    <li><a href="/Lista_mechaników">Mechanicy</a></li>
                )}
                {isLoggedIn && (role === 'ROLE_ADMIN') && (
                    <li><a href="/Dodanie_pojazdu">Dodaj pojazd</a></li>
                )}
                {isLoggedIn && (role === 'ROLE_ADMIN' || role === 'ROLE_MECHANIC') && (
                    <li><a href="/Dodanie_klienta">Dodaj klienta</a></li>
                )}
                {isLoggedIn && (role === 'ROLE_ADMIN') && (
                    <li><a href="/Dodanie_mechanika">Dodaj mechanika</a></li>
                )}
                {isLoggedIn ? (
                    <li><a href="/" onClick={handleLogout}>Wyloguj</a></li>
                ) : (
                    <li><a href="/Login">Zaloguj</a></li>
                )}
            </ul>
        </nav>
    );
};

