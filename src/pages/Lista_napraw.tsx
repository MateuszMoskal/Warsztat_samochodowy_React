import React, {useEffect, useState} from 'react';
import {useApi} from "../composables/useApi";
import {formatDate, formatUsername, Klient, Naprawa} from "../models/models";
import axios from "../services/axiosConfig";
import {Menu} from "../components/Menu";

const Lista_napraw: React.FC = () => {
    const [editingNaprawaID, setEditingNaprawaID] = useState<string | null>(null);
    const [editedNaprawa, setEditedNaprawa] = useState<Partial<Naprawa>>({});
    const [getRequestError, setGetRequestError] = useState(false);
    const [listOfRepairs, setListOfRepairs] = useState<Naprawa[]>([]); // React state for the client list
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

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

    const handleEditClick = (naprawa: Naprawa) => {
        setEditingNaprawaID(naprawa.naprawaID);
        setEditedNaprawa(naprawa); // Set the client being edited
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedNaprawa((prev) => ({
            ...prev,
            [name]: value, // Dynamically update the edited field
        }));
    };

    const handleSaveClick = async () => {
        try {
            // Optionally, send the updated client to the backend
            await axios.patch(`/modyfikuj/dane/naprawy`, editedNaprawa);
            //await axios.put(`/clients/${editingClientId}`, editedClient);

            // Update the client in the local state
            setListOfRepairs((prevNaprawa) =>
                prevNaprawa.map((naprawa) =>
                    naprawa.naprawaID === editingNaprawaID ? { ...naprawa, ...editedNaprawa } : naprawa
                )
            );

            // Clear editing state
            setEditingNaprawaID(null);
            setEditedNaprawa({});
        } catch (error) {
            console.error('Nie zapisano zmian:', error);
        }
    };

    const handleCancelClick = () => {
        setEditingNaprawaID(null); // Exit editing mode without saving
        setEditedNaprawa({});
    };

    const filteredNaprawy = searchTerm
        ? listOfRepairs.filter(naprawa => naprawa.naprawaID.includes(searchTerm))
        : listOfRepairs;

    const indexOfLastRepair = currentPage * itemsPerPage;
    const indexOfFirstRepair = indexOfLastRepair - itemsPerPage;
    const currentRepair = filteredNaprawy.slice(indexOfFirstRepair, indexOfLastRepair);
    const totalPages = Math.ceil(filteredNaprawy.length / itemsPerPage);

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
                            <th>Modyfikuj</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentRepair.length > 0 ? (
                        currentRepair.map((naprawa) => (
                            <tr key={naprawa.naprawaID}>
                                {editingNaprawaID === naprawa.naprawaID ? (
                                    <>
                                        <td>{naprawa.naprawaID}</td>
                                        <td>{naprawa.telefon_klienta}</td>
                                        <td>{formatUsername(naprawa.mechanik)}</td>
                                        <td>{naprawa.pojazd.vin}</td>
                                        <td>
                                            <input
                                                type="text"
                                                name="protokol_naprawy"
                                                value={editedNaprawa.protokol_naprawy || ''}
                                                onChange={handleInputChange}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="stan"
                                                value={editedNaprawa.stan || ''}
                                                onChange={handleInputChange}
                                            />
                                        </td>

                                        <td>
                                            <input
                                                type="text"
                                                name="opis_usterki"
                                                value={editedNaprawa.opis_usterki || ''}
                                                onChange={handleInputChange}
                                            />
                                        </td>

                                        <td>
                                            <input
                                                type="text"
                                                name="data_rozpoczecia"
                                                value={editedNaprawa.data_rozpoczecia || ''}
                                                onChange={handleInputChange}
                                            />
                                        </td>

                                        <td>
                                            <input
                                                type="text"
                                                name="data_zakonczenia"
                                                value={editedNaprawa.data_zakonczenia || ''}
                                                onChange={handleInputChange}
                                            />
                                        </td>
                                        <td>
                                            <button onClick={handleSaveClick}>Zapisz</button>
                                            <button onClick={handleCancelClick}>Anuluj</button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>{naprawa.naprawaID}</td>
                                        <td>{naprawa.telefon_klienta}</td>
                                        <td>{formatUsername(naprawa.mechanik)}</td>
                                        <td>{naprawa.pojazd.vin}</td>
                                        <td>{naprawa.protokol_naprawy}</td>
                                        <td>{naprawa.stan}</td>
                                        <td>{naprawa.opis_usterki}</td>
                                        <td>{formatDate(naprawa.data_rozpoczecia)}</td>
                                        <td>{formatDate(naprawa.data_zakonczenia)}</td>
                                        <td>
                                            <button id="modify" onClick={() => handleEditClick(naprawa)}>Modyfikuj
                                            </button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))
                        ) :(
                            <tr>
                                <td>
                                    Brak danych
                                </td>
                            </tr>
                        )}
                        </tbody>

                    </table>
                )}
                {filteredNaprawy.length > 0 && (
                    <div>
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Poprzednia
                        </button>

                        <span> Strona {currentPage} z {totalPages} </span>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Następna
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Lista_napraw;
