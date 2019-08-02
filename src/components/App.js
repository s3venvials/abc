import React, { Component } from 'react';

import PreNav from './PreNav';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';

class App extends Component {

    render() {
        return (
            <div>
                <PreNav />
                <Header />
                <div className="container-fluid">
                    <HomePage />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;