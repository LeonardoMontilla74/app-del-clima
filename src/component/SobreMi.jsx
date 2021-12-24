import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/Detalles.module.css';
import Caricatura from '../styles/img/Caricatura.jpg';

export default class SobreMi extends Component {
    render() {
        return (
            <div className={style.card}>
                <img src={Caricatura} alt="Imagen de Leonardo Montilla" width="120" height="120" />
                <div>
                    <span>App creada por: <h1>Leonardo Montilla</h1></span>
                </div>
                <p>Este es un ejercicio que forma parte del curso de "desarrollo web full stack"
                    de #soyHenry.</p>
                <p>Mis correo electrónico es: leme.310589@gmail.com</p>
                <Link to="/">
                    <button className={style.button}>Regresar</button>
                </Link>
            </div>
        );
    }
}
