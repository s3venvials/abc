import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">

                    <a className="navbar-brand" href="/">
                        <img src="https://res.cloudinary.com/frontndev/image/upload/c_scale,h_130,w_150/v1564623952/IMG_0193_adtvjs.jpg" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Our Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        );
    }
}

export default Header;