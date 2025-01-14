import React, {useEffect, useState} from 'react';
import {useApi} from "../composables/useApi";
import axios from "../services/axiosConfig";
import {Mechanik} from "../models/models";
import {Menu} from "../components/Menu";

const Lista_mechaników: React.FC = () => {
    const [getRequestError, setGetRequestError] = useState(false);
    const [listOfMechanics, setListOfMechanics] = useState<Mechanik[]>([]); // React state for the client list
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

    const getMechanics = async () => {
        try {
            const response = await axios.get(`/mechanicy`);
            setListOfMechanics((prevMechanics) => {
                // console.log('Previous mechanic:', prevMechanics);
                // console.log('New mechanics:', response.data);
                return response.data;
            });
            setGetRequestError(false);
            // console.log("WORKING");
            //navigate('/checkResults/results');
        } catch (error) {
            if (error) setGetRequestError(true);
            else setGetRequestError(false);
        }
    };

    useEffect(() => {
        getMechanics();
    }, []);

    return (
        <>
            <Menu></Menu>
            <div className="lista_mechaników" id="lista_mechaników">
                <h2>Mechanicy:</h2>
                {getRequestError ? (
                    <p>Failed to fetch mechanics. Please try again later.</p>
                ) : (
                    <table id="tabela_mechaników">
                        <thead>
                        <tr>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>Login</th>
                            <th>Czy Zatrudniony</th>
                        </tr>
                        </thead>
                        <tbody>
                        {listOfMechanics.map((mechanic) => (
                            <tr key={mechanic.mechanikID}>
                                <td>{mechanic.imie}</td>
                                <td>{mechanic.nazwisko}</td>
                                <td>{mechanic.login}</td>
                                <td>{mechanic.czyZatrudniony}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default Lista_mechaników;
