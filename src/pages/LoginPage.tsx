import React, { useState } from 'react';
import axios from '../services/axiosConfig'; // Use Axios instance configured for your backend
import { useNavigate } from 'react-router-dom';
import {LoginRequest} from "../models/models";
import {useApi} from "../composables/useApi";
import {Menu} from "../components/Menu";
// import {Menu} from "../components/Menu";

const LoginForm: React.FC = () => {
    const {successMessage } = useApi();
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [loginRequest, setLoginRequest] = useState<LoginRequest>({
        login: '',
        haslo: '',

    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Send login request to the backend
            const response = await axios.post('/login', loginRequest);

            const { token, roles } = response.data; // Extract token and roles from response

            // Store token in localStorage (or cookies)
            localStorage.setItem('token', token);
            localStorage.setItem('roles', JSON.stringify(roles));

            // Navigate based on roles
            if (roles.includes('ROLE_ADMIN')) {
                navigate('/Strona_admina');
            } else if (roles.includes('ROLE_MECHANIC')) {
                navigate('/Strona_mechanika');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('Invalid username or password');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setLoginRequest((prevLogin) => ({
            ...prevLogin,
            [id]: value,
        }));
    };

    return (
        <>
            <Menu></Menu>
            <div className="formularz">
                <h2>Zaloguj się jako mechanik warsztatu</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="login">Login:</label>
                    <input type="text" id="login" value={loginRequest.login} onChange={handleChange}/>
                    <label htmlFor="haslo">Hasło:</label>
                    <input type="password" id="haslo" value={loginRequest.haslo} onChange={handleChange}/>
                    <button type="submit">Zaloguj</button>
                </form>
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                {errorMessage && (
                    <p style={{ color: 'red' }}>{errorMessage}</p>
                )}
            </div>
        </>
    );
};

export default LoginForm;
