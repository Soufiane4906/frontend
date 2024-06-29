import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        authService.logout();
        navigate('/login');
        window.location.reload();
    };

    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/home" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/clients" className="nav-link">
                        Clients
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/factures" className="nav-link">
                        Factures
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/produits" className="nav-link">
                        Produits
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/ventes" className="nav-link">
                        Ventes
                    </Link>
                </li>
            </div>

            <div className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={handleLogout}>
                        Logout
                    </a>
                </li>
            </div>
        </nav>
    );
};

export default Navbar;
