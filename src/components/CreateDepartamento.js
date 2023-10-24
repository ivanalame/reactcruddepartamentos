import React, { Component, createRef } from "react";
import Global from "../Global";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class CreateDepartamento extends Component {
  cajaNumero = React.createRef();
  cajaNombre = React.createRef();
  cajaLocalidad = React.createRef();

  state = {
    status: false,
  };

  añadirDepartamento = (e) => {
    e.preventDefault();
    var id = parseInt(this.cajaNumero.current.value)
    var nombre = this.cajaNombre.current.value
    var localidad = this.cajaLocalidad.current.value
    //CREAMOS UN OBJETO DEPARTAMENTO CON LAS PROPIEDADES DEL JSON
    var departamento = {
      //esto sera lo qu queremos enviar
      numero: id,
      nombre: nombre,
      localidad: localidad,
    };

    var request = "/api/Departamentos";
    var url = Global.apiurlDepartamentos + request;
    axios.post(url, departamento).then(response => {
      this.setState({
        status: true
      });
    });
  };

  render() {
    if (this.state.status == true) {
      return <Navigate to="/" />;
    } else {
      return (
        <div>
          <h1>CreateDepartamento</h1>
          <form>
            <label>Id Departamento</label>
            <input
              type="number"
              ref={this.cajaNumero}
              className="form-control"
            ></input>
            <label>Nombre</label>
            <input
              type="text"
              ref={this.cajaNombre}
              className="form-control"
            ></input>
            <label>Localidad</label>
            <input
              type="text"
              ref={this.cajaLocalidad}
              className="form-control"
            ></input>
            <button className="btn btn-info" onClick={this.añadirDepartamento}>
              Añadir departamento
            </button>
          </form>
        </div>
      );
    }
  }
}
