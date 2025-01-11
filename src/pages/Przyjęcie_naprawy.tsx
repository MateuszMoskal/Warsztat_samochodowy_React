import React, { useState } from 'react';
//import {useApi} from "../../composables/useApi";
//import { RepairMechanicDto } from '../../models/models';

const Przyjęcie_naprawy: React.FC = () => {
    // const { sendAcceptRepair, postRequestError } = useApi();
    // const [ticketDto, setTicketDto] = useState<RepairMechanicDto>({
    //     repairId: 0,
    //     mechanicUsername: '',
    // });
    //
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { id, value } = e.target;
    //     setTicketDto((prevTicket) => ({
    //         ...prevTicket,
    //         [id]: value,
    //     }));
    // };
    //
    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     await sendAcceptRepair(ticketDto);
    // };


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
            <div>
                <div className="formularz">
                    <h2>Przyjęcie naprawy</h2>
                    {/*<form onSubmit={handleSubmit}>*/}
                    {/*    <label htmlFor="repairId">Id naprawy:</label>*/}
                    {/*    <input type="text" id="repairId" value={ticketDto.repairId} onChange={handleChange}/>*/}
                    {/*    <label htmlFor="mechanicUsername">Login mechanika:</label>*/}
                    {/*    <input type="text" id="mechanicUsername" value={ticketDto.mechanicUsername}*/}
                    {/*           onChange={handleChange}/>*/}
                    {/*    <button type="submit">Przyjmij naprawę</button>*/}
                    {/*    /!*<Button type="submit" onClick={() => sendNumbers({ inputNumbers: inputs })}*!/*/}
                    {/*</form>*/}
                    {/*{postRequestError && <p>Error submitting client. Please try again.</p>}*/}
                </div>
            </div>
        </>
    );
};

export default Przyjęcie_naprawy;
