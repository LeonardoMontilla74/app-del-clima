import React, { Component } from 'react';
import Logo from '../styles/img/logoHenry.png'
import Buscador from './Buscador';

export default class Nav extends Component {
    render() {
        return (
             <nav className="navbar fixed-bottom navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://www.soyhenry.com/">
                        <img src={Logo} alt="soyHenry.com" width= "100px" />
                    </a>
                <h1>App del clima</h1>
                <Buscador />
                </div>
            </nav>

        )
    }
}
