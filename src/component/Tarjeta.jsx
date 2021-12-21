import React, { Component } from 'react'
import style from "../styles/Tarjeta.module.css"

export default class Tarjeta extends Component {
    render() {
        return (
            <div className={ style.card }>
                <div className={style.cardBody}>
                    <button className={style.button}>X</button>
                    <h5>Nombre de la ciudad</h5>
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                    <p>Min</p>
                    <p>28°</p>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                    <p>Max</p>
                    <p>33°</p>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                            <img className="iconoClima" src="" width="80" height="80" alt="Img clima" />
                            <button className={style.button}>Detalles</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}