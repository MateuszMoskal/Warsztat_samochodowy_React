import React, { useState } from 'react';
//import {useApi} from "../../composables/useApi";
//import {Client, Mechanic} from '../../models/models';

const Dodanie_mechanika: React.FC = () => {
    // const { sendMechanic, postRequestError, successMessage } = useApi();
    // const [mechanic, setMechanic] = useState<Mechanic>({
    //     id: 0,
    //     firstName: '',
    //     secondName: '',
    //     ifEmployed: false,
    //     username: '',
    //     password: '',
    // });
    //
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { id, value } = e.target;
    //     setMechanic((prevMechanic) => ({
    //         ...prevMechanic,
    //         [id]: value,
    //     }));
    // };
    //
    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     await sendMechanic(mechanic);
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
                <h2>Dodanie mechanika</h2>
                {/*<form onSubmit={handleSubmit}>*/}
                {/*    <h3>Dane mechanika:</h3>*/}
                {/*    <label htmlFor="firstName">Imię:</label>*/}
                {/*    <input type="text" id="firstName" value={mechanic.firstName} onChange={handleChange}/>*/}
                {/*    <label htmlFor="secondName">Nazwisko:</label>*/}
                {/*    <input type="text" id="secondName" value={mechanic.secondName} onChange={handleChange}/>*/}
                {/*    <label htmlFor="login">Username:</label>*/}
                {/*    <input type="text" id="username" value={mechanic.username} onChange={handleChange}/>*/}
                {/*    <label htmlFor="password">Hasło:</label>*/}
                {/*    <input type="password" id="password" value={mechanic.password} onChange={handleChange}/>*/}
                {/*    <button type="submit">Add Client</button>*/}
                {/*</form>*/}
                {/*{successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}*/}
                {/*{postRequestError && (*/}
                {/*    <p style={{ color: 'red' }}>Error adding client. Please try again.</p>*/}
                {/*)}*/}
            </div>
        </>
    )
};

export default Dodanie_mechanika;
