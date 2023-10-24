import React, { Component } from "react";

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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  Features
                </a>
                <a className="nav-link" href="#">
                  Pricing
                </a>
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
