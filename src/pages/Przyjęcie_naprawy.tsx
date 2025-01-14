import React, { useState } from 'react';
import {useApi} from "../composables/useApi";
import {NaprawaDto} from '../models/models';
import {Menu} from "../components/Menu";

const Przyjęcie_naprawy: React.FC = () => {
    const { sendPrzyjecieNaprawy, postRequestError } = useApi();
    const [ticketDto, setTicketDto] = useState<NaprawaDto>({
        naprawaID: 0,
        mechanikLogin: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setTicketDto((prevTicket) => ({
            ...prevTicket,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await sendPrzyjecieNaprawy(ticketDto);
    };


    return (
        <>
            <Menu></Menu>
            <div>
                <div className="formularz">
                    <h2>Przyjęcie naprawy</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="naprawaID">Id naprawy:</label>
                        <input type="text" id="naprawaID" value={ticketDto.naprawaID} onChange={handleChange}/>
                        <label htmlFor="mechanikLogin">Login mechanika:</label>
                        <input type="text" id="mechanikLogin" value={ticketDto.mechanikLogin}
                               onChange={handleChange}/>
                        <button type="submit">Przyjmij naprawę</button>
                        {/*<Button type="submit" onClick={() => sendNumbers({ inputNumbers: inputs })}*/}
                    </form>
                    {postRequestError && <p>Error submitting client. Please try again.</p>}
                </div>
            </div>
        </>
    );
};

export default Przyjęcie_naprawy;
