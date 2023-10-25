import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from '../Global'
import { Navigate } from 'react-router-dom'

export default class ModificarDepartamentos extends Component {

  cajaNumero = React.createRef();
  cajaNombre = React.createRef();
  cajaLocalidad = React.createRef();

  state = {
    statusGet: false, 
    departamento: {},
    statusPut:  false
  }
  //primero buscamos el departamento por el id que me trae props
    findDepartamento=()=>{
        var id = this.props.iddepartamento;
        var request = "api/departamentos/" + id;
        var url = Global.apiurlDepartamentos + request;
        axios.get(url).then(response =>{
            this.setState({
                statusGet: true,
                departamento : response.data
            })
        })

    }
            // y lo iniciamos al iniciar la pagina 
    componentDidMount=()=>{
        this.findDepartamento()
    }
    modificarDepartamento =(e)=>{
        e.preventDefault();
        //EL METODO PUT PUEDE TENER DOS PARAMETROS 
        //1 URL DE ACCESO AL SERVICIO
        //2 LOS DATOS A ENVIAR A DICHO SERVICIO 
        var id = parseInt(this.cajaNumero.current.value)
        var nombre = this.cajaNombre.current.value
        var localidad = this.cajaLocalidad.current.value
        var data = {
            numero: id,
            nombre:nombre,
            localidad:localidad
        }
        var request = "api/departamentos"; 
        var url = Global.apiurlDepartamentos + request; 
        axios.put(url,data).then(response=>{
            this.setState({
                statusPut : true 
                
            })
        })
       

    }
  render() {
    return (
      <div>
        <NavLink to={"/"}>Back to home</NavLink>
        <h1 style={{color:"purple"}}>ModificarDepartamento {this.props.iddepartamento}</h1>
        {
            this.state.statusGet == true &&
            (
                <form style={{width:"500px", margin:"0 auto"}}>
                    
                    <input type='hidden' ref={this.cajaNumero} defaultValue={this.state.departamento.numero} className='form-control'></input>
                    <label>Nombre Departamento</label>
                    <input type='text' ref={this.cajaNombre} defaultValue={this.state.departamento.nombre} className='form-control'></input>
                    <label>Localidad Departamento</label>
                    <input type='text' ref={this.cajaLocalidad} defaultValue={this.state.departamento.localidad} className='form-control'></input>
                    <button onClick={this.modificarDepartamento} className='btn btn-outline-info'> Modificar Departamento</button>
             </form>
            )
        }

        {
            this.state.statusPut == true &&
            (
                <Navigate to={"/"}/>
            )
        }
        
        </div>
    )
  }
}
