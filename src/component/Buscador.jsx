import React, { Component } from 'react'

export default class Buscador extends Component {
    render() {
        return (
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Ciudad..." aria-label="Ciudad..." />
                <button className="btn btn-outline-primary" type="submit">Buscar</button>
            </form>
        )
    }
}
