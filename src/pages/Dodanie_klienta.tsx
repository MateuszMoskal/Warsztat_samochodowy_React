import React, {useEffect, useState} from 'react';
//import {useApi} from "../../composables/useApi";
//import { Client } from '../../models/models';

const Dodanie_klienta: React.FC = () => {
    // const { sendClient, postRequestError, successMessage } = useApi();
    // const [client, setClient] = useState<Client>({
    //     id: 0,
    //     firstName: '',
    //     secondName: '',
    //     phoneNumber: '',
    //     email: '',
    // });
    //
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
    //
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { id, value } = e.target;
    //     setClient((prevClient) => ({
    //         ...prevClient,
    //         [id]: value,
    //     }));
    // };
    //
    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     await sendClient(client);
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
            <div className="formularz">
                <h2>Dodanie klienta</h2>
                {/*<form onSubmit={handleSubmit}>*/}
                {/*    <h3>Dane klienta:</h3>*/}
                {/*    <label htmlFor="firstName">Imię:</label>*/}
                {/*    <input type="text" id="firstName" value={client.firstName} onChange={handleChange}/>*/}
                {/*    <label htmlFor="secondName">Nazwisko:</label>*/}
                {/*    <input type="text" id="secondName" value={client.secondName} onChange={handleChange}/>*/}
                {/*    <label htmlFor="phoneNumber">Numer telefonu:</label>*/}
                {/*    <input type="text" id="phoneNumber" value={client.phoneNumber} onChange={handleChange}/>*/}
                {/*    <label htmlFor="email">Email:</label>*/}
                {/*    <input type="text" id="email" value={client.email} onChange={handleChange}/>*/}
                {/*    <button type="submit">Add Client</button>*/}
                {/*</form>*/}
                {/*{successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}*/}
                {/*{postRequestError && (*/}
                {/*    <p style={{ color: 'red' }}>Error adding client. Please try again.</p>*/}
                {/*)}*/}
            </div>
        </>
    );
};

export default Dodanie_klienta;
