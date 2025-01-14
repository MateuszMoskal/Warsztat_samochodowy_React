import React, { useState } from 'react';
import {useApi} from "../composables/useApi";
import {Klient, Mechanik} from '../models/models';
import {Menu} from "../components/Menu";

const Dodanie_mechanika: React.FC = () => {
    const { sendMechanik, postRequestError, successMessage } = useApi();
    const [mechanic, setMechanic] = useState<Mechanik>({
        mechanikID: 0,
        imie: '',
        nazwisko: '',
        czyZatrudniony: '',
        login: '',
        haslo: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setMechanic((prevMechanic) => ({
            ...prevMechanic,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await sendMechanik(mechanic);
    };

    return (
        <>
            <Menu></Menu>
            <div className="formularz">
                <h2>Dodanie mechanika</h2>
                <form onSubmit={handleSubmit}>
                    <h3>Dane mechanika:</h3>
                    <label htmlFor="imie">Imię:</label>
                    <input type="text" id="imie" value={mechanic.imie} onChange={handleChange}/>
                    <label htmlFor="nazwisko">Nazwisko:</label>
                    <input type="text" id="nazwisko" value={mechanic.nazwisko} onChange={handleChange}/>
                    <label htmlFor="login">Username:</label>
                    <input type="text" id="login" value={mechanic.login} onChange={handleChange}/>
                    <label htmlFor="haslo">Hasło:</label>
                    <input type="password" id="haslo" value={mechanic.haslo} onChange={handleChange}/>
                    <button type="submit">Dodaj Mechanika</button>
                </form>
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                {postRequestError && (
                    <p style={{ color: 'red' }}>Error adding client. Please try again.</p>
                )}
            </div>
        </>
    )
};

export default Dodanie_mechanika;
