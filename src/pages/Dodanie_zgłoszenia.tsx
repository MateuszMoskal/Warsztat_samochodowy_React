import React, {useEffect, useState} from 'react';
import {useApi} from "../composables/useApi";
import {ZgloszenieDto} from "../models/models";
import {Menu} from "../components/Menu";

const Dodanie_zgłoszenia: React.FC = () => {
    const { sendZgloszenieDto, postRequestError, successMessage } = useApi();
    const [ticket, setTicketDto] = useState<ZgloszenieDto>({
        klient: {
            klientID: 0,
            imie: '',
            nazwisko: '',
            telefon: '',
            email: ''
        },
        pojazd: {
            rejestracja: '',
            marka: '',
            model: '',
            rocznik: 0,
            vin: ''
        }
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
        setTicketDto((prevTicketDto) => ({
            ...prevTicketDto,
            klient: {
                ...prevTicketDto.klient,
                [id]: value,
            },
            pojazd: {
                ...prevTicketDto.pojazd,
                [id]: value,
            }
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await sendZgloszenieDto(ticket);
    };

    return (
        <>
            <Menu></Menu>
            <div className="formularz">
                <h2>Dodanie zgłoszenia</h2>
                <form onSubmit={handleSubmit}>
                    <h3>Dane klienta:</h3>
                    <label htmlFor="imie">Imię:</label>
                    <input type="text" id="imie" value={ticket.klient.imie} onChange={handleChange}/>
                    <label htmlFor="nazwisko">Nazwisko:</label>
                    <input type="text" id="nazwisko" value={ticket.klient.nazwisko} onChange={handleChange}/>
                    <label htmlFor="telefon">Numer telefonu:</label>
                    <input type="text" id="telefon" value={ticket.klient.telefon} onChange={handleChange}/>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" value={ticket.klient.email} onChange={handleChange}/>
                    <h3>Dane pojazdu:</h3>
                    <label htmlFor="rejestracja">Rejestracja:</label>
                    <input type="text" id="rejestracja" value={ticket.pojazd.rejestracja} onChange={handleChange}/>
                    <label htmlFor="marka">Marka:</label>
                    <input type="text" id="marka" value={ticket.pojazd.marka} onChange={handleChange}/>
                    <label htmlFor="model">Model:</label>
                    <input type="text" id="model" value={ticket.pojazd.model} onChange={handleChange}/>
                    <label htmlFor="rocznik">Rocznik:</label>
                    <input type="number" id="rocznik" value={ticket.pojazd.rocznik} onChange={handleChange}/>
                    <label htmlFor="vin">VIN:</label>
                    <input type="text" id="vin" value={ticket.pojazd.vin} onChange={handleChange}/>
                    <button type="submit">Dodaj zgloszenie</button>
                </form>
                {successMessage && <p style={{color: 'green'}}>{successMessage}</p>}
                {postRequestError && (
                    <p style={{color: 'red'}}>Error adding ticket. Please try again.</p>
                )}
            </div>
        </>
    );
};

export default Dodanie_zgłoszenia;
