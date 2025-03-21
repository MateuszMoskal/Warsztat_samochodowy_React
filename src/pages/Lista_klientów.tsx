import React, {useEffect, useState} from 'react';
import {Klient} from "../models/models";
//import {useApi} from "../../composables/useApi";
import axios from "../services/axiosConfig";
import {Menu} from "../components/Menu";

const Lista_klientów: React.FC = () => {
    // const [listOfClients, setListOfClients] = useState<Klient[]>([]);
    // const [getRequestError, setGetRequestError] = useState<boolean>(false);
    const [editingClientPhoneNumber, setEditingClientPhoneNumber] = useState<string | null>(null);
    const [editedClient, setEditedClient] = useState<Partial<Klient>>({});
    const [getRequestError, setGetRequestError] = useState(false);
    const [listOfClients, setListOfClients] = useState<Klient[]>([]); // React state for the client list
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    const getClients = async () => {
        try {
            const response = await axios.get('/klienci');
            setListOfClients((prevClients) => {
                // console.log('Previous clients:', prevClients);
                // console.log('New clients:', response.data);
                return response.data.sort((a: Klient, b: Klient)=> a.klientID - b.klientID);
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

    const handleEditClick = (client: Klient) => {
        setEditingClientPhoneNumber(client.telefon);
        setEditedClient(client); // Set the client being edited
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedClient((prev) => ({
            ...prev,
            [name]: value, // Dynamically update the edited field
        }));
    };

    const handleSaveClick = async () => {
        try {
            // Optionally, send the updated client to the backend
            await axios.patch(`/modyfikuj/dane/klienta`, editedClient);
            //await axios.put(`/clients/${editingClientId}`, editedClient);

            // Update the client in the local state
            setListOfClients((prevClients) =>
                prevClients.map((client) =>
                    client.telefon === editingClientPhoneNumber ? { ...client, ...editedClient } : client
                )
            );

            // Clear editing state
            setEditingClientPhoneNumber(null);
            setEditedClient({});
        } catch (error) {
            console.error('Nie zapisano zmian:', error);
        }
    };

    const handleCancelClick = () => {
        setEditingClientPhoneNumber(null); // Exit editing mode without saving
        setEditedClient({});
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.toLowerCase());
        setCurrentPage(1);
    };

    const filteredClients = searchTerm
        ? listOfClients.filter(client => client.telefon.startsWith(searchTerm))
        : listOfClients;

    const indexOfLastClient = currentPage * itemsPerPage;
    const indexOfFirstClient = indexOfLastClient - itemsPerPage;
    const currentClients = filteredClients.slice(indexOfFirstClient, indexOfLastClient);
    const totalPages = Math.ceil(filteredClients.length / itemsPerPage);



    return (
        <>
            <Menu></Menu>
            <div className="lista_klientów" id="lista_klientów">
                <h2>Klienci:</h2>

                <input
                    type="text"
                    placeholder="wyszukiwanie po numerze telefonu"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />

                {getRequestError ? (
                    <p>Failed to fetch clients. Please try again later.</p>
                ) : (

                    <table id="tabela_klientów">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Imie</th>
                            <th>Nazwisko</th>
                            <th>Telefon</th>
                            <th>Email</th>
                            <th>Modyfikuj</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentClients.length > 0 ? (
                            currentClients.map((client) => (
                                <tr key={client.telefon}>
                                    {editingClientPhoneNumber === client.telefon ? (
                                        <>
                                            <td>{client.klientID}</td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={editedClient.imie || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="secondName"
                                                    value={editedClient.nazwisko || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </td>
                                            <td>{client.telefon}</td>

                                            <td>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    value={editedClient.email || ''}
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
                                            <td>{client.klientID}</td>
                                            <td>{client.imie}</td>
                                            <td>{client.nazwisko}</td>
                                            <td>{client.telefon}</td>
                                            <td>{client.email}</td>
                                            <td>
                                                <button id="modify" onClick={() => handleEditClick(client)}>Modyfikuj
                                                </button>
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
                {filteredClients.length > 0 && (
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

export default Lista_klientów;
