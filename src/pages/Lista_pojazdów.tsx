import React, {useEffect, useState} from 'react';
import axios from "../services/axiosConfig";
import {Klient, Pojazd} from "../models/models";
import {Menu} from "../components/Menu";

const Lista_pojazdów: React.FC = () => {
    const [editingPojazdVin, setEditingPojazdVin] = useState<string | null>(null);
    const [editedPojazd, setEditedPojazd] = useState<Partial<Pojazd>>({});
    const [getRequestError, setGetRequestError] = useState(false);
    const [listOfCars, setListOfCars] = useState<Pojazd[]>([]); // React state for the client list
    const [searchTerm, setSearchTerm] = useState("");
    const [searchTerm2, setSearchTerm2] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    const getCars = async () => {
        try {
            const response = await axios.get(`/pojazdy`);
            setListOfCars((prevCars) => {
                // console.log('Previous cars:', prevCars);
                // console.log('New cars:', response.data);
                return response.data;
            });
            setGetRequestError(false);
            //navigate('/checkResults/results');
        } catch (error) {
            if (error) setGetRequestError(true);
            else setGetRequestError(false);
        }
    };

    useEffect(() => {
        getCars();
    }, []);

    const handleEditClick = (pojazd: Pojazd) => {
        setEditingPojazdVin(pojazd.vin);
        setEditedPojazd(pojazd); // Set the client being edited
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedPojazd((prev) => ({
            ...prev,
            [name]: value, // Dynamically update the edited field
        }));
    };

    const handleSaveClick = async () => {
        try {
            // Optionally, send the updated client to the backend
            await axios.patch(`/modyfikuj/dane/pojazdow`, editedPojazd);
            //await axios.put(`/clients/${editingClientId}`, editedClient);

            // Update the client in the local state
            setListOfCars((prevPojazdy) =>
                prevPojazdy.map((pojazd) =>
                    pojazd.vin === editingPojazdVin ? { ...pojazd, ...editedPojazd } : pojazd
                )
            );

            // Clear editing state
            setEditingPojazdVin(null);
            setEditedPojazd({});
        } catch (error) {
            console.error('Nie zapisano zmian:', error);
        }
    };

    const handleCancelClick = () => {
        setEditingPojazdVin(null); // Exit editing mode without saving
        setEditedPojazd({});
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.toLowerCase());
        setCurrentPage(1);
    };

    const handleSearchChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm2(e.target.value.toLowerCase());
        setCurrentPage(1);
    };

    // const filteredCars = searchTerm
    //     ? listOfCars.filter(pojazd =>
    //         pojazd.vin.toLowerCase().startsWith(searchTerm)) &&
    //         pojazd.rejestracja.toLowerCase().startsWith(searchTerm2)
    //     : listOfCars;

    const filteredCars = listOfCars.filter(pojazd => {
        const a = pojazd.vin.toLowerCase().startsWith(searchTerm);
        const b =  pojazd.rejestracja.toLowerCase().startsWith(searchTerm2);
        return a && b;
    })

    const indexOfLastCar = currentPage * itemsPerPage;
    const indexOfFirstCar = indexOfLastCar - itemsPerPage;
    const currentCar = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
    const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

    return (
        <>
            <Menu></Menu>
            <div className="lista_pojazdów" id="lista_pojazdów">
                <h2>Pojazdy:</h2>

                <input
                    type="text"
                    placeholder="wyszukiwanie po Vin pojazdu"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />

                <input
                    type="text"
                    placeholder="wyszukiwanie po rejestracji"
                    value={searchTerm2}
                    onChange={handleSearchChange2}
                />

                {getRequestError ? (
                    <p>Failed to fetch cars. Please try again later.</p>
                ) : (
                    <table id="tabela_pojazdow">
                        <thead>
                        <tr>
                            <th>vin</th>
                            <th>rejestracja</th>
                            <th>marka</th>
                            <th>model</th>
                            <th>rocznik</th>
                            <th>modyfikuj</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentCar.length > 0 ? (
                            currentCar.map((pojazd) => (
                                <tr key={pojazd.vin}>
                                    {editingPojazdVin === pojazd.vin ? (
                                        <>
                                            <td>{pojazd.vin}</td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="rejestracja"
                                                    value={editedPojazd.rejestracja || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </td>

                                            <td>
                                                <input
                                                    type="text"
                                                    name="marka"
                                                    value={editedPojazd.marka || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </td>

                                            <td>
                                                <input
                                                    type="text"
                                                    name="model"
                                                    value={editedPojazd.model || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </td>

                                            <td>
                                                <input
                                                    type="number"
                                                    name="rocznik"
                                                    value={editedPojazd.rocznik || ''}
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
                                            <td>{pojazd.vin}</td>
                                            <td>{pojazd.rejestracja}</td>
                                            <td>{pojazd.marka}</td>
                                            <td>{pojazd.model}</td>
                                            <td>{Number(pojazd.rocznik)}</td>
                                            <td>
                                                <button id="modify" onClick={() => handleEditClick(pojazd)}>Modyfikuj
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
                {filteredCars.length > 0 && (
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

export default Lista_pojazdów;
