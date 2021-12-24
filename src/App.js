import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Contenedor from './component/Contenedor';
import Nav from './component/Nav';
import Detalles from './component/Detalles';
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

  filtrarDetalles = (id) => {
    let ciudad = this.state.listaCiudades.filter((c) => c.id === parseInt(id));
    return ciudad[0];
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
                    country: recurso.sys.country,
                    pressure: recurso.main.pressure,
                    humidity: recurso.main.humidity,
                    visibility: recurso.visibility,
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
      <>
        <Nav buscador={this.buscador} />
        <Route
          exact path="/"
          component={() => <Contenedor listaCiudades={this.state.listaCiudades} btnCerrar={this.btnCerrar} />} />
        <Route
          path="/ciudad/:id"
          component={({ match }) => <Detalles ciudad={this.filtrarDetalles(match.params.id)} />} />
      </>
    )
  }
}
