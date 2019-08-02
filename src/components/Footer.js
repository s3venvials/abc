import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid fixed-bottom bg-light">
            <div className="container" style={{paddingTop: '20px'}}>
                <div className="row">
                    <div class="col-md-6 text-center" style={{borderRight: '1px solid #CCC'}}>
                        <ul className="list-group">
                            <li className="list-group-item">ABC LLC</li>
                            <li className="list-group-item">123 Main Ave</li>
                            <li className="list-group-item">Phoenix, AZ 85005</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <h5>Subscribe</h5>
                            <h6>Enter your email to sign up for our newsletter.</h6>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" placeholder="Email" className="col-md-6" />
                                    <div className="input-group-append">
                                        <button className="btn btn-info" type="button" id="button-addon2">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="text-center">
                    <small style={{ opacity: '0.5' }}>
                        Advanced Behavior Consulting <i className="far fa-copyright"></i> 2019 All Rights Reserved | Created by Mark White
                    </small>
                </div>
            </div>
        </div>
    );
}

export default Footer;