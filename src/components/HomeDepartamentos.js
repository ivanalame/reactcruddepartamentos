import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import image from  './../assets/images/Grupo.jpg'
import { NavLink } from "react-router-dom";

export default class HomeDepartamentos extends Component {
  state = {
    departamentos: [],
    status: false,
  };

  loadDepartamentos = () => {
    var request = "api/departamentos";
    var url = Global.apiurlDepartamentos + request;
    axios.get(url).then((response) => {
      this.setState({
        departamentos: response.data,
        status: true,
      });
        console.log(response.data)
    });
  };

  componentDidMount = () => {
    this.loadDepartamentos();
  };

  render() {

    if(this.state.status == false){
      return(
        <img  style={{width:"300", height:"200px"}}src={image}/>
      )
    }else{  
return (
      <div>
        <h1>HomeDepartamentos </h1>
        {this.state.status == true && (
          <table className="table table-hover table-dark">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Localidad</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.departamentos.map((departamento,index) =>{
                  return(
                    <tr key={index}>
                       <td>{departamento.nombre}</td>
                       <td>{departamento.localidad}</td>
                       <td><NavLink  to={"/detalle/"+ departamento.numero} >Detalle departamento</NavLink></td>
                       <td><NavLink  to={"/detalle/"+ departamento.numero + "/" + departamento.nombre + "/" + departamento.localidad} >Detalle departamento VERSION  2</NavLink></td>
                       <td><NavLink to={"/modificar/" + departamento.numero}>Modificar departamento</NavLink></td>
                      <td><NavLink to={"/delete/" + departamento.numero}>Eliminar departamento</NavLink></td>
                    </tr>                  
                  )
                })
              }
            </tbody>
          </table>
        )}
      </div>
    );
    }

    
  }
}
