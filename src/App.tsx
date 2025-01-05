import React from 'react';
import './App.css';


const App: React.FC = () => {
    return (
        <div className="app-container">
            <nav className="menu">
                <ul>
                    <li><a href="/Dodanie_zgłoszenia">Dodaj zgłoszenie</a></li>
                    <li><a href="/Kontakt">Kontakt</a></li>
                    <li><a href="/Zaloguj">Zaloguj</a></li>
                </ul>
            </nav>
            {/*<div className="content">*/}
            {/*    <Routes>*/}
            {/*        <Route path="/Dodanie_zgłoszenia" element={<AddTicket />}/>*/}
            {/*        /!*<Route path="/Kontakt" element={<AddTicket/>}/>*!/*/}
            {/*        /!*<Route path="/Zaloguj" element={<AddTicket/>}/>*!/*/}
            {/*    </Routes>*/}
            {/*</div>*/}
            <div className="formularz">
                <h2>Dodanie zgłoszenia</h2>
                <form>
                    <h3>Dane klienta:</h3>
                    <label htmlFor="imie">Imię:</label>
                    <input type="text" id="imie"/>
                    <label htmlFor="nazwisko">Nazwisko:</label>
                    <input type="text" id="nazwisko"/>
                    <label htmlFor="telefon">Telefon:</label>
                    <input type="text" id="telefon"/>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email"/>
                    <h3>Dane pojazdu:</h3>
                    <label htmlFor="rejestracja">Rejestracja:</label>
                    <input type="text" id="rejestracja"/>
                    <label htmlFor="marka">Marka:</label>
                    <input type="text" id="marka"/>
                    <label htmlFor="model">Model:</label>
                    <input type="text" id="model"/>
                    <label htmlFor="rocznik">Rocznik:</label>
                    <input type="text" id="rocznik"/>
                    <label htmlFor="vin">VIN:</label>
                    <input type="text" id="vin"/>
                    <button type="submit">Dodaj zgłoszenie</button>
                </form>
            </div>
            <div className="kontakt">
                <p>Kontakt: numer telefonu</p>
            </div>
        </div>
    );
};


export default App;
