import React, {useEffect, useState} from 'react';
import {Klient} from "../models/models";
import axios from 'axios';


const Lista_klientów: React.FC = () => {
    const [klienci, setKlienci] = useState<Klient[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get<Klient[]>('http://localhost:8080/klienci')
            .then((response) => {
                setKlienci(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching clients:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{maxWidth: '800px', margin: '20px auto'}}>
            <h1>Client List</h1>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                <tr>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>imie</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>nazwisko</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>telefon</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>email</th>
                </tr>
                </thead>
                <tbody>
                {klienci.map((klient) => (
                    <tr key={klient.klientID}>
                        <td style={{border: '1px solid #ddd', padding: '8px'}}>{klient.imie}</td>
                        <td style={{border: '1px solid #ddd', padding: '8px'}}>{klient.nazwisko}</td>
                        <td style={{border: '1px solid #ddd', padding: '8px'}}>{klient.telefon}</td>
                        <td style={{border: '1px solid #ddd', padding: '8px'}}>{klient.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Lista_klientów;