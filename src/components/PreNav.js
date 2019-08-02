import React from 'react';

import './PreNav.css';

const PreNav = () => {
    return (
        <nav className="navbar navbar-expand-lg" id="preNav" style={{ backgroundColor: '#439ab3' }}>
            <div className="container">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <h6 className="nav-link" style={{ color: 'white' }}>
                            <i className="fas fa-mobile-alt"></i> Call Us 623-555-1111
                        </h6>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/" style={{ color: 'white' }}>
                            <i className="fab fa-facebook-square fa-lg"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" style={{ color: 'white' }}>
                            <i className="fab fa-instagram fa-lg"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" style={{ color: 'white' }}>
                            <i className="fab fa-linkedin fa-lg"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default PreNav;