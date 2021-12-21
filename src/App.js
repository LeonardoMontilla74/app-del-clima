import React, { Component } from 'react'
import Contenedor from './component/Contenedor';
import Nav from './component/Nav';
import "./global.css"

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Contenedor />
      </div>
    )
  }
}

