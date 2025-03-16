import React, {useEffect, useState} from 'react';
import {useApi} from "../composables/useApi";
import axios from "../services/axiosConfig";
import {Mechanik} from "../models/models";
import {Menu} from "../components/Menu";

const Lista_mechaników: React.FC = () => {
    const [editingMechanikUsername, setEditingMechanikUsername] = useState<string | null>(null);
    const [editedMechanik, setEditedMechanik] = useState<Partial<Mechanik>>({});
    const [getRequestError, setGetRequestError] = useState(false);
    const [listOfMechanics, setListOfMechanics] = useState<Mechanik[]>([]); // React state for the client list
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

    const getMechanics = async () => {
        try {
            const response = await axios.get(`/mechanicy`);
            setListOfMechanics((prevMechanics) => {
                // console.log('Previous mechanic:', prevMechanics);
                // console.log('New mechanics:', response.data);
                return response.data.sort((a: Mechanik, b: Mechanik) => a.mechanikID - b.mechanikID);
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

    const handleEditClick = (mechanik: Mechanik) => {
        setEditingMechanikUsername(mechanik.login);
        setEditedMechanik(mechanik); // Set the client being edited
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedMechanik((prev) => ({
            ...prev,
            [name]: value, // Dynamically update the edited field
        }));
    };

    const handleSaveClick = async () => {
        try {
            const updatedMechanik = {
                ...editedMechanik,
                //ifEmployed: editedMechanic.ifEmployed === 'YES' ? 'NO' : 'YES', // Toggle the value
            };

            // Optionally, send the updated client to the backend
            await axios.patch(`/zwolnij/mechanika`, updatedMechanik);
            //await axios.put(`/clients/${editingClientId}`, editedClient);

            // Update the client in the local state
            setListOfMechanics((prevMechanics) =>
                prevMechanics.map((mechanic) =>
                    mechanic.login === editingMechanikUsername
                        ? { ...mechanic, ...updatedMechanik }
                        : mechanic
                )
            );

            await getMechanics();

            // Clear editing state
            setEditingMechanikUsername(null);
            setEditedMechanik({});
        } catch (error) {
            console.error('Failed to save changes:', error);
        }
    };

    const handleCancelClick = () => {
        setEditingMechanikUsername(null); // Exit editing mode without saving
        setEditedMechanik({});
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.toLowerCase());
        setCurrentPage(1);
    };

    const filteredMechanics = searchTerm
        ? listOfMechanics.filter(mechanik =>
            mechanik.login.toLowerCase().startsWith(searchTerm))
        : listOfMechanics;

    const indexOfLastMechanik = currentPage * itemsPerPage;
    const indexOfFirstMechanik = indexOfLastMechanik - itemsPerPage;
    const currentMechanik = filteredMechanics.slice(indexOfFirstMechanik, indexOfLastMechanik);
    const totalPages = Math.ceil(filteredMechanics.length / itemsPerPage);


    return (
        <>
            <Menu></Menu>
            <div className="lista_mechaników" id="lista_mechaników">
                <h2>Mechanicy:</h2>

                <input
                    type="text"
                    placeholder="wyszukiwanie po loginie mechanika"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                {getRequestError ? (
                    <p>Failed to fetch mechanics. Please try again later.</p>
                ) : (
                    <table id="tabela_mechaników">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>Login</th>
                            <th>Czy Zatrudniony</th>
                            <th>Zwolnij/Zatrudnij</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentMechanik.length > 0 ? (
                            currentMechanik.map((mechanik) => (
                                <tr key={mechanik.login}>
                                    {editingMechanikUsername === mechanik.login ? (
                                        <>
                                            <td>{mechanik.mechanikID}</td>
                                            <td>{mechanik.imie}</td>
                                            <td>{mechanik.nazwisko}</td>
                                            <td>{mechanik.login}</td>
                                            <td>{mechanik.czyZatrudniony}</td>
                                            <td>
                                                <button onClick={handleSaveClick}>Potwierdź</button>
                                                <button onClick={handleCancelClick}>Anuluj</button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{mechanik.mechanikID}</td>
                                            <td>{mechanik.imie}</td>
                                            <td>{mechanik.nazwisko}</td>
                                            <td>{mechanik.login}</td>
                                            <td>{mechanik.czyZatrudniony}</td>
                                            <td>
                                                <button id="modify"
                                                        onClick={() => handleEditClick(mechanik)}>{mechanik.czyZatrudniony === 'TAK' ? 'Zwolnij' : 'Zatrudnij'} {/* Show Zwolnij if employed, Zatrudnij if not */}</button>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>
                                    Brak danych
                                </td>
                            </tr>
                        )}
                        </tbody>

                    </table>
                )}
                {filteredMechanics.length > 0 && (
                    <div className="button-container">
                        <button className="button-page"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Poprzednia
                        </button>

                        <button className="button-page"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Następna
                        </button>

                        <span> Strona {currentPage} z {totalPages} </span>
                    </div>
                )}
            </div>
        </>
    );
};

export default Lista_mechaników;
