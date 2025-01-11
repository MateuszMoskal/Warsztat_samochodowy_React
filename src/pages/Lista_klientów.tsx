import React, {useEffect, useState} from 'react';
import {Klient} from "../models/models";
//import {useApi} from "../../composables/useApi";
import axios from "../services/axiosConfig";

const Lista_klientów: React.FC = () => {
    // const [listOfClients, setListOfClients] = useState<Klient[]>([]);
    // const [getRequestError, setGetRequestError] = useState<boolean>(false);
    const [getRequestError, setGetRequestError] = useState(false);
    const [listOfClients, setListOfClients] = useState<Klient[]>([]); // React state for the client list

    const getClients = async () => {
        try {
            const response = await axios.get(`/clients`);
            setListOfClients((prevClients) => {
                console.log('Previous clients:', prevClients);
                console.log('New clients:', response.data);
                return response.data;
            });
            setGetRequestError(false);
        } catch (error) {
            if (error) setGetRequestError(true);
            else setGetRequestError(false);
        }
    };

    useEffect(() => {
        getClients();
    }, []);

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
            <div className="lista_klientów" id="lista_klientów">
                <h2>Klienci:</h2>
                {getRequestError ? (
                    <p>Failed to fetch clients. Please try again later.</p>
                ) : (
                    <table id="tabela_klientów">
                        <thead>
                        <tr>
                            <th>Imie</th>
                            <th>Nazwisko</th>
                            <th>Telefon</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {listOfClients.map((klient) => (
                            <tr key={klient.klientID}>
                                <td>{klient.imie}</td>
                                <td>{klient.nazwisko}</td>
                                <td>{klient.telefon}</td>
                                <td>{klient.email}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default Lista_klientów;
