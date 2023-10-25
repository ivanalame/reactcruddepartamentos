import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

export default class EliminarDepartamento extends Component {

    state = {
        status : false
    }

    deleteDepartamento = () =>{
        var id = this.props.iddepartamento; 
        var request = "api/departamentos/"+ id;; 
        var url = Global.apiurlDepartamentos + request;
        axios.delete(url).then(response=>{
            this.setState({
                status: true
            })
        }) 
    }

  render() {
    return (
      <div>
        {
            this.state.status ==true &&
            (
                <Navigate to="/" />
            )
        }
        <NavLink to={"/"}>Back To home</NavLink>
        <h1 style={{color:"green"}}>¿EliminarDepartamento: {this.props.iddepartamento}?</h1>
        <button className='btn btn-danger' onClick={this.deleteDepartamento}> Eliminar </button>
        </div>
    )
  }
}
