import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink } from 'react-router-dom'

export default class DetalleDepartamento extends Component {

    // state = {
    //     departamento : {},
    //     status:false
    // }

    // findDepartamento = ()=>{
    //      var request = "api/departamentos/" + this.props.iddepartamento; 
    //      var url = Global.apiurlDepartamentos + request;
    //      axios.get(url).then(response =>{
    //         this.setState({
    //             departamento: response.data,
    //             status:true
    //         })
    //      })
         
    // }
    // componentDidMount=() =>{
    //     this.findDepartamento();
    // }
  render() {
    return (
      <div>
        {/* cuando usamos props siempres utilizamos minusculas  */}
        <h1>DetalleDepartamento {this.props.iddepartamento}</h1>
        <NavLink to="/">Volver a home</NavLink>
        {/* {
            this.state.status == true &&
            ( */}
                <ul>
                         <li> Id:{this.props.departamento.numero}</li>
                         <li> Nombre:{this.props.departamento.nombre}</li>
                         <li> Localidad:{this.props.departamento.localidad}</li>

                 </ul>
            {/* )
        } */}
        
    </div>
    )
  }
}
