import React, {useEffect, useState} from 'react';
import {useApi} from "../composables/useApi";
import {formatDate, formatUsername, Naprawa} from "../models/models";
import axios from "../services/axiosConfig";
import {Menu} from "../components/Menu";

const Lista_napraw: React.FC = () => {
    const [getRequestError, setGetRequestError] = useState(false);
    const [listOfRepairs, setListOfRepairs] = useState<Naprawa[]>([]); // React state for the client list
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

    const getRepairs = async () => {
        try {
            const response = await axios.get(`/naprawy`);
            setListOfRepairs((prevRepairs) => {
                // console.log('Previous repairs:', prevRepairs);
                // console.log('New repairs:', response.data);
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
        getRepairs();
    }, []);


    return (
        <>
            <Menu></Menu>
            <div className="lista_napraw" id="lista_napraw">
                <h2>Naprawy:</h2>
                {getRequestError ? (
                    <p>Failed to fetch repairs. Please try again later.</p>
                ) : (
                    <table id="tabela_napraw">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Telefon klienta</th>
                            <th>Mechanik</th>
                            <th>Vin pojazdu</th>
                            <th>Protokół</th>
                            <th>Stan</th>
                            <th>Opis</th>
                            <th>Data rozpoczęcia</th>
                            <th>Data zakończenia</th>
                        </tr>
                        </thead>
                        <tbody>
                        {listOfRepairs.map((repair) => (
                            <tr key={repair.naprawaID}>
                                <td>{repair.naprawaID}</td>
                                <td>{repair.telefon_klienta}</td>
                                <td>{formatUsername(repair.mechanik)}</td>
                                <td>{repair.pojazd.vin}</td>
                                <td>{repair.protokol_naprawy}</td>
                                <td>{repair.stan}</td>
                                <td>{repair.opis_usterki}</td>
                                <td>{formatDate(repair.data_rozpoczecia)}</td>
                                <td>{formatDate(repair.data_zakonczenia)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default Lista_napraw;
