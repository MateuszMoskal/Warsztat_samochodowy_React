import axios from '../services/axiosConfig';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {Klient, Mechanik, NaprawaDto, PojazdKlientDto, ZgloszenieDto} from '../models/models';

let ticket = {} as Klient;
let ticket2 = {} as ZgloszenieDto
let ticket3 = {} as NaprawaDto

export const useApi = () => {
    const navigate = useNavigate();
    const [postRequestError, setPostRequestError] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const sendKlient = async (klient: Klient) => {
        try {
            const response = await axios.post('/dodaj/klienta', klient);
            console.log('Client added successfully:', response.data);
            ticket = response.data;
            setPostRequestError(false);
            setSuccessMessage("Klient został dodany");
        } catch (error) {
            console.error('Blad przy dodawaniu klienta:', error);
            if (error) setPostRequestError(true);
            else setPostRequestError(false);
        }
    };

    const sendMechanik = async (mechanik: Mechanik) => {
        try {
            const response = await axios.post('/dodaj/mechanika', mechanik);
            console.log('Mechanic added successfully:', response.data);
            ticket = response.data;
            setPostRequestError(false);
            setSuccessMessage("Mechanik został dodany");
        } catch (error) {
            console.error('Blad przy dodawaniu mechanika:', error);
            if (error) setPostRequestError(true);
            else setPostRequestError(false);
        }
    };

    const sendPojazdKlientDto = async (carClientDto: PojazdKlientDto) => {
        try {
            const response = await axios.post('/dodaj/pojazdy', carClientDto);
            console.log('Car added successfully:', response.data);
            ticket = response.data;
            setPostRequestError(false);
            setSuccessMessage("Pojazd został dodany");
        } catch (error) {
            console.error('Blad przy dodawaniu pojazdu:', error);
            if (error) setPostRequestError(true);
            else setPostRequestError(false);
        }
    };

    const sendZgloszenieDto = async (newTicket: ZgloszenieDto) => {
        try {
            const response = await axios.post('/dodaj/nowe/zgloszenie', newTicket);
            console.log('Ticket added successfully:', response.data);
            ticket2 = response.data;
            setPostRequestError(false);
            setSuccessMessage("Zgloszenie zostalo dodane");
            //navigate('/ticket');
        } catch (error) {
            console.error('Blad przy dodaniu zgloszenia:', error);
            if (error) setPostRequestError(true);
            else setPostRequestError(false);
        }
    };

    const sendPrzyjecieNaprawy = async (newTicket: NaprawaDto) => {
        try {
            const response = await axios.patch('/przyjecie/naprawy', newTicket);
            console.log('Repair accepted successfully:', response.data);
            ticket3 = response.data;
            setPostRequestError(false);
            setSuccessMessage("Naprawa zostala przyjeta");
            //navigate('/ticket');
        } catch (error) {
            console.error('Naprawa nie została przyjeta:', error);
            if (error) setPostRequestError(true);
            else setPostRequestError(false);
        }
    };

    return {
        sendKlient,
        sendZgloszenieDto,
        sendPrzyjecieNaprawy,
        sendMechanik,
        sendPojazdKlientDto,
        postRequestError,
        successMessage
    };
};

