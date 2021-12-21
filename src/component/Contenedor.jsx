import React, { Component } from 'react'
import Tarjeta from './Tarjeta';
import Style from '../styles/Contenedor.module.css'

export default class Contenedor extends Component {
    render() {
        return (
            <div className={Style.tarjetas}>
                {this.props.listaCiudades.map(c => <Tarjeta
                    key={c.id}
                    name={c.name}
                    min={c.min}
                    max={c.max}
                    img={c.img}
                    id={c.id}
          /> )}
      </div>
        )
    }
}
