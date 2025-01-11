import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Strona_glowna from "./pages/Strona_głowna";
import Dodanie_zgłoszenia from "./pages/Dodanie_zgłoszenia";
import Dodanie_mechanika from "./pages/Dodanie_mechanika";
import Dodanie_pojazdu from "./pages/Dodanie_pojazdu";
import Dodanie_klienta from "./pages/Dodanie_klienta";
import Lista_klientów from "./pages/Lista_klientów";
import Lista_pojazdów from "./pages/Lista_pojazdów";
import Lista_mechaników from "./pages/Lista_mechaników";
import Lista_napraw from "./pages/Lista_napraw";
import Przyjęcie_naprawy from "./pages/Przyjęcie_naprawy";
import Strona_mechanika from "./pages/Strona_mechanika";
import Strona_admina from "./pages/Strona_admina";


const App: React.FC = () => {
    return (
        <div className="app-container">
            <div className="content">
                <Routes>
                    <Route path="/" element={<Strona_glowna />}/>
                    <Route path="/Dodanie_zgłoszenia" element={<Dodanie_zgłoszenia />}/>
                    <Route path="/Dodanie_mechanika" element={
                        //<PrivateRoute allowedRoles={['ROLE_ADMIN', 'ROLE_MECHANIC']}>
                            <Dodanie_mechanika />
                        //</PrivateRoute>

                    }/>
                    <Route path="/Dodanie_pojazdu" element={
                        //<PrivateRoute allowedRoles={['ROLE_ADMIN', 'ROLE_MECHANIC']}>
                            <Dodanie_pojazdu />
                        //</PrivateRoute>
                    }/>
                    <Route path="/Dodanie_klienta" element={
                        //<PrivateRoute allowedRoles={['ROLE_ADMIN', 'ROLE_MECHANIC']}>
                            <Dodanie_klienta />
                        //</PrivateRoute>
                    }/>
                    <Route path="/Lista_klientów" element={
                        //<PrivateRoute allowedRoles={['ROLE_ADMIN', 'ROLE_MECHANIC']}>
                            <Lista_klientów />
                        //</PrivateRoute>
                    }/>
                    <Route path="/Lista_pojazdów" element={
                        //<PrivateRoute allowedRoles={['ROLE_ADMIN', 'ROLE_MECHANIC']}>
                            <Lista_pojazdów />
                        //</PrivateRoute>
                    }/>
                    <Route path="/Lista_mechaników" element={
                        //<PrivateRoute allowedRoles={['ROLE_ADMIN']}>
                            <Lista_mechaników />
                        //</PrivateRoute>
                    }/>
                    <Route path="/Lista_napraw" element={
                        //<PrivateRoute allowedRoles={['ROLE_ADMIN', 'ROLE_MECHANIC']}>
                            <Lista_napraw />
                        //</PrivateRoute>
                    }/>
                    <Route path="/Przyjęcie_naprawy" element={
                        //<PrivateRoute allowedRoles={['ROLE_ADMIN', 'ROLE_MECHANIC']}>
                            <Przyjęcie_naprawy />
                        //</PrivateRoute>
                    }/>
                    <Route path="/Strona_mechanika" element={
                        //<PrivateRoute allowedRoles={['ROLE_ADMIN', 'ROLE_MECHANIC']}>
                            <Strona_mechanika />
                        //</PrivateRoute>
                    }/>
                    <Route path="/Strona_admina" element={
                        //<PrivateRoute allowedRoles={['ROLE_ADMIN']}>
                            <Strona_admina />
                        //</PrivateRoute>
                    }/>
                    {/*<Route path="/unauthorized" element={<Unauthorized />}/>*/}
                    {/*<Route path="/login" element={<LoginPage />}/>*/}
                    {/*<Route path="/Kontakt" element={<AddTicket/>}/>*/}
                    {/*<Route path="/Zaloguj" element={<AddTicket/>}/>*/}
                </Routes>
            </div>
        </div>
    );
};

export default App;


