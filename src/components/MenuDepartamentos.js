import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MenuDepartamentos extends Component {
  render() {
    return (
      <div>
        <h1>MenuDepartamentos</h1>
        <nav className="navbar navbar-expand-lg bg-body-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              DEPARTAMENTOS
            </a>
            <button
             className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/create">
                  Añadir nuevo Departamento
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
