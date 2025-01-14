import React, { useState } from 'react';
import {useApi} from "../composables/useApi";
import {Pojazd, Klient, PojazdKlientDto} from '../models/models';
import {Menu} from "../components/Menu";

const Dodanie_pojazdu: React.FC = () => {
    const { sendPojazdKlientDto, postRequestError, successMessage } = useApi();
    const [carClient, setCarClientDto] = useState<PojazdKlientDto>({
        pojazd: {
            rejestracja: '',
            marka: '',
            model: '',
            rocznik: 0,
            vin: ''
        },
        telefonKlienta: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;

        setCarClientDto((prevCarClient) => {
            if (id in prevCarClient.pojazd) {
                // Update car fields
                return {
                    ...prevCarClient,
                    pojazd: {
                        ...prevCarClient.pojazd,
                        [id]: value,
                    },
                };
            } else if (id === 'telefonKlienta') {
                // Update phoneNumber
                return {
                    ...prevCarClient,
                    telefonKlienta: value,
                };
            }
            return prevCarClient; // No changes for unmatched ids
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await sendPojazdKlientDto(carClient);
    };

    return (
        <>
            <Menu></Menu>
            <div className="formularz">
                <h2>Dodanie pojazdu</h2>
                <form onSubmit={handleSubmit}>
                    <h3>Dane klienta:</h3>
                    <label htmlFor="rejestracja">Rejestracja pojazdu:</label>
                    <input type="text" id="rejestracja" value={carClient.pojazd.rejestracja}
                           onChange={handleChange}/>
                    <label htmlFor="marka">Marka:</label>
                    <input type="text" id="marka" value={carClient.pojazd.marka} onChange={handleChange}/>
                    <label htmlFor="model">Model:</label>
                    <input type="text" id="model" value={carClient.pojazd.model} onChange={handleChange}/>
                    <label htmlFor="rocznik">Rok produkcji:</label>
                    <input type="number" id="rocznik" value={carClient.pojazd.rocznik} onChange={handleChange}/>
                    <label htmlFor="vin">VIN:</label>
                    <input type="text" id="vin" value={carClient.pojazd.vin} onChange={handleChange}/>
                    <label htmlFor="telefonKlienta">Telefon:</label>
                    <input type="text" id="telefonKlienta" value={carClient.telefonKlienta} onChange={handleChange}/>
                    <button type="submit">Dodaj pojazd</button>
                </form>
                {successMessage && <p style={{color: 'green'}}>{successMessage}</p>}
                {postRequestError && (
                    <p style={{ color: 'red' }}>Error adding client. Please try again.</p>
                )}
            </div>
        </>
    );
};

export default Dodanie_pojazdu;

