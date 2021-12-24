import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../styles/img/logoHenry.png';
import Buscador from './Buscador';

export default class Nav extends Component {
    render() {
        return (
             <nav className="navbar fixed-bottom navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://www.soyhenry.com/">
                        <img src={Logo} alt="soyHenry.com" width= "100px" />
                    </a>
                    <Link to="/about">
                        <h1>App del clima</h1>
                    </Link>
                    <Buscador buscador={this.props.buscador}/>
                </div>
            </nav>

        )
    }
}
