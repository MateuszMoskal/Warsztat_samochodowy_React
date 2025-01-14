import React, {useEffect, useState} from 'react';
import {useApi} from "../composables/useApi";
import { Klient } from '../models/models';
import {Menu} from "../components/Menu";

const Dodanie_klienta: React.FC = () => {
    const { sendKlient, postRequestError, successMessage } = useApi();
    const [client, setClient] = useState<Klient>({
        klientID: 0,
        imie: '',
        nazwisko: '',
        telefon: '',
        email: '',
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is logged in by looking for a token in localStorage
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); // Convert token existence to a boolean
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('roles');
        setIsLoggedIn(false); // Update state to reflect logout
        window.location.href = '/'; // Redirect to the login page
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setClient((prevClient) => ({
            ...prevClient,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await sendKlient(client);
    };

    return (
        <>
            <Menu></Menu>
            <div className="formularz">
                <h2>Dodanie klienta</h2>
                <form onSubmit={handleSubmit}>
                    <h3>Dane klienta:</h3>
                    <label htmlFor="imie">Imię:</label>
                    <input type="text" id="imie" value={client.imie} onChange={handleChange}/>
                    <label htmlFor="nazwisko">Nazwisko:</label>
                    <input type="text" id="nazwisko" value={client.nazwisko} onChange={handleChange}/>
                    <label htmlFor="telefon">Numer telefonu:</label>
                    <input type="text" id="telefon" value={client.telefon} onChange={handleChange}/>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" value={client.email} onChange={handleChange}/>
                    <button type="submit">Dodaj Klienta</button>
                </form>
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                {postRequestError && (
                    <p style={{ color: 'red' }}>Error adding client. Please try again.</p>
                )}
            </div>
        </>
    );
};

export default Dodanie_klienta;
