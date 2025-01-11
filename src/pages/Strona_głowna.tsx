import React from "react";


const Strona_głowna: React.FC = () => {


    return (
        <>
            <nav className="menu">
                <ul>
                    <li><a href="/">Strona główna</a></li>
                    <li><a href="/Dodanie_zgłoszenia">Dodaj zgłoszenie</a></li>
                    <li><a href="/Strona_mechanika">Strona mechanika</a></li>
                    {/*<li><a href="/Login">Zaloguj</a></li>*/}
                </ul>
            </nav>
            <div className="main">
                <h2>Strona Główna</h2>
                <h2>Warsztat samochodowy. Zapraszamy!</h2>
                <p>W zakładce Dodaj zgłoszenie możesz wysłać swoje zgłoszenie</p>
            </div>
        </>


    )
        ;
};


export default Strona_głowna;
