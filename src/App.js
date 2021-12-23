import React, { Component } from 'react'
import Contenedor from './component/Contenedor';
import Nav from './component/Nav';
import "./global.css"

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      listaCiudades: []
    }
  }
  
  btnCerrar = (id) => {
    this.setState((state) => ({
      listaCiudades: state.listaCiudades.filter((c) => c.id !== id)
    }));
  }


  buscador = (ciudad) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4219bde49ede151ec3c27147df0cdbb3&units=metric`)
            .then(r => r.json())
            .then((recurso) => {
                if (recurso.main !== undefined) {
                  const ciudad = {
                        min: Math.round(recurso.main.temp_min),
                        max: Math.round(recurso.main.temp_max),
                        img: recurso.weather[0].icon,
                        id: recurso.id,
                        wind: recurso.wind.speed,
                        temp: recurso.main.temp,
                        name: recurso.name,
                        weather: recurso.weather[0].main,
                        clouds: recurso.clouds.all,
                        latitud: recurso.coord.lat,
                        longitud: recurso.coord.lon
                    };
                    this.setState({
                        listaCiudades: [...this.state.listaCiudades, ciudad]
                    });
                } else {
                    alert("Ciudad no encontrada");
                }
            });
  };

  render() {
    return (
      <div>
        <Nav buscador={this.buscador} />
        <Contenedor listaCiudades={this.state.listaCiudades} btnCerrar={this.btnCerrar} />
      </div>
    )
  }
}

