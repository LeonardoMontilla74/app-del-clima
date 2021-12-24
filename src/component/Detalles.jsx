import React, { Component } from 'react';
import style from '../styles/Detalles.module.css';
import style2 from '../styles/Contenedor.module.css'

export default class Detalles extends Component {
    render() {
        return (
            <div className={style2.tarjetas}>
                <div className={style.card}>
                    <div className="container">
                        <div className="info">
                            <h2>{this.props.ciudad.name}</h2>
                            <img className="iconoClima" src={`http://openweathermap.org/img/wn/${this.props.ciudad.img}@2x.png`} width="80" height="80" alt="" />
                            <div>Pais: {this.props.ciudad.country}</div>
                            <div>Presión: {this.props.ciudad.pressure}</div>
                            <div>Humedad: {this.props.ciudad.humidity}%</div>
                            <div>Clima: {this.props.ciudad.weather}</div>
                            <div>Viento: {this.props.ciudad.wind} km/h</div>
                            <div>Visibilidad: {this.props.ciudad.visibility / 1000} km</div>
                            <div>Cantidad de nubes: {this.props.ciudad.clouds}</div>
                            <div>Latitud: {this.props.ciudad.latitud}º</div>
                            <div>Longitud: {this.props.ciudad.longitud}º</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}