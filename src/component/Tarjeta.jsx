import React, { Component } from 'react'
import style from "../styles/Tarjeta.module.css"

export default class Tarjeta extends Component {
    render() {
        return (
            <div className={ style.card }>
                <div>
                    <button className="btn-close" onClick={this.props.btnCerrar}></button>
                    <h5>{ this.props.name}</h5>
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                    <p>Min</p>
                        <p>{ this.props.min }°</p>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                    <p>Max</p>
                            <p>{ this.props.max}°</p>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                            <img className="iconoClima" src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`} width="50" height="50" alt="" />
                            <button className={style.button}>Detalles</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}