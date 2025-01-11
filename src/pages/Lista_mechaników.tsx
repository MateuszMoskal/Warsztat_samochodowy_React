import React, {useEffect, useState} from 'react';
//import {useApi} from "../../composables/useApi";
//import {Mechanic} from "../../models/models";
//mport axios from "../../services/axiosConfig";

const Lista_mechaników: React.FC = () => {
    // const [getRequestError, setGetRequestError] = useState(false);
    // const [listOfMechanics, setListOfMechanics] = useState<Mechanic[]>([]); // React state for the client list
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
    // const getMechanics = async () => {
    //     try {
    //         const response = await axios.get(`/mechanics`);
    //         setListOfMechanics((prevMechanics) => {
    //             console.log('Previous mechanic:', prevMechanics);
    //             console.log('New mechanics:', response.data);
    //             return response.data;
    //         });
    //         setGetRequestError(false);
    //         console.log("WORKING");
    //         //navigate('/checkResults/results');
    //     } catch (error) {
    //         if (error) setGetRequestError(true);
    //         else setGetRequestError(false);
    //     }
    // };
    //
    // useEffect(() => {
    //     getMechanics();
    // }, []);

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
            <div className="lista_mechaników" id="lista_mechaników">
                <h2>Mechanicy:</h2>
                {/*{getRequestError ? (*/}
                {/*    <p>Failed to fetch mechanics. Please try again later.</p>*/}
                {/*) : (*/}
                {/*    <table id="tabela_mechaników">*/}
                {/*        <thead>*/}
                {/*        <tr>*/}
                {/*            <th>Imię</th>*/}
                {/*            <th>Nazwisko</th>*/}
                {/*            <th>Login</th>*/}
                {/*            <th>Czy Zatrudniony</th>*/}
                {/*        </tr>*/}
                {/*        </thead>*/}
                {/*        <tbody>*/}
                {/*        {listOfMechanics.map((mechanic) => (*/}
                {/*            <tr key={mechanic.id}>*/}
                {/*                <td>{mechanic.firstName}</td>*/}
                {/*                <td>{mechanic.secondName}</td>*/}
                {/*                <td>{mechanic.username}</td>*/}
                {/*                <td>{mechanic.ifEmployed}</td>*/}
                {/*            </tr>*/}
                {/*        ))}*/}
                {/*        </tbody>*/}
                {/*    </table>*/}
                {/*)}*/}
            </div>
        </>
    );
};

export default Lista_mechaników;
