import React, { Component } from 'react'
import Tarjeta from './Tarjeta';
import style from '../styles/Contenedor.module.css'

export default class Contenedor extends Component {
    render() {
        return (
            <div className={style.tarjetas}>
                {this.props.listaCiudades.map(c => <Tarjeta
                    key={c.id}
                    id={c.id}
                    name={c.name}
                    min={c.min}
                    max={c.max}
                    img={c.img}
                    btnCerrar={() => this.props.btnCerrar(c.id)}
          /> )}
      </div>
        )
    }
}
