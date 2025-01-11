import React, {useEffect, useState} from 'react';

const Strona_admina: React.FC = () => {
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
            <nav className="menu">
                <ul>
                    <li><a href="/">Strona główna</a></li>
                    <li><a href="/Dodanie_zgłoszenia">Dodaj zgłoszenie</a></li>
                    <li><a href="/Lista_napraw">Naprawy</a></li>
                    <li><a href="/Przyjęcie_naprawy">Przyjmij naprawę</a></li>
                    <li><a href="/Lista_klientów">Klienci</a></li>
                    <li><a href="/Lista_pojazdów">Pojazdy</a></li>
                    <li><a href="/Lista_mechaników">Mechanicy</a></li>
                    <li><a href="/Dodanie_pojazdu">Dodaj pojazd</a></li>
                    <li><a href="/Dodanie_klienta">Dodaj klienta</a></li>
                    <li><a href="/Dodanie_mechanika">Dodaj mechanika</a></li>
                    {/*<li><a href="/Logout">Wyloguj</a></li>*/}
                </ul>
            </nav>
            <div className="main">
                <h2>Strona Admina</h2>
            </div>
            {/*<div className="formularz">*/}
            {/*    <h2>Dodanie zgłoszenia</h2>*/}
            {/*    <form>*/}
            {/*        <h3>Dane klienta:</h3>*/}
            {/*        <label htmlFor="imie">Imię:</label>*/}
            {/*        <input type="text" id="imie"/>*/}
            {/*        <label htmlFor="nazwisko">Nazwisko:</label>*/}
            {/*        <input type="text" id="nazwisko"/>*/}
            {/*        <label htmlFor="telefon">Telefon:</label>*/}
            {/*        <input type="text" id="telefon"/>*/}
            {/*        <label htmlFor="email">Email:</label>*/}
            {/*        <input type="text" id="email"/>*/}
            {/*        <h3>Dane pojazdu:</h3>*/}
            {/*        <label htmlFor="rejestracja">Rejestracja:</label>*/}
            {/*        <input type="text" id="rejestracja"/>*/}
            {/*        <label htmlFor="marka">Marka:</label>*/}
            {/*        <input type="text" id="marka"/>*/}
            {/*        <label htmlFor="model">Model:</label>*/}
            {/*        <input type="text" id="model"/>*/}
            {/*        <label htmlFor="rocznik">Rocznik:</label>*/}
            {/*        <input type="text" id="rocznik"/>*/}
            {/*        <label htmlFor="vin">VIN:</label>*/}
            {/*        <input type="text" id="vin"/>*/}
            {/*        <button type="submit">Dodaj zgłoszenie</button>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </>
    );
};

export default Strona_admina;
