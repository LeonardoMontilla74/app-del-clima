import React, { Component } from 'react'

export default class Buscador extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ciudad: ""
        }
    }

    capturarInput = (e) => {
        this.setState({ciudad: e.target.value })
    }
    
    enviarDatos = (e) => {
        e.preventDefault()
        this.props.buscador(this.state.ciudad)
        this.setState({ ciudad: "" })
    }
    

    render() {
        return (
            <form className="d-flex">
                <input
                    className="form-control me-2"
                    type="text"
                    placeholder="Ciudad..."
                    value={this.state.ciudad}
                    onChange={this.capturarInput}
                />
                <button
                    className="btn btn-outline-primary"
                    onClick={this.enviarDatos}>
                    Buscar
                </button>
            </form>
        )
    }
}
