import React, { Component } from 'react'
import { Routes,Route,BrowserRouter,useParams } from 'react-router-dom';
import MenuDepartamentos from './MenuDepartamentos';
import HomeDepartamentos from './HomeDepartamentos';
import CreateDepartamento from './CreateDepartamento';
import DetalleDepartamento from './DetalleDepartamento';
import EliminarDepartamento from './EliminarDepartamento';
import ModificarDepartamentos from './ModificarDepartamentos';


export default class Router extends Component {
  
  render() {


    //VERSION 1 DELETE
    function EliminarDepartamentoElement(){
      var {iddepartamento} = useParams()
      return <EliminarDepartamento iddepartamento = {iddepartamento}/>
    }
    function DetalleDepartamentoElement() {
      //Version 2 
        var {iddepartamento, nombre,localidad} = useParams()
      //version 1
      // var {iddepartamento} = useParams();
      //RETURN VERSION 1 
      return <DetalleDepartamento iddepartamento={iddepartamento}/>;
      //RETURN VERSION 2
      return <DetalleDepartamento iddepartamento={iddepartamento} nombre={nombre} localidad = {localidad}/>;
    }

    //VERSION 1 UPDATE-MODIFICAR
    function UpdateDepartamentoElement(){
      var {iddepartamento} = useParams();
      return <ModificarDepartamentos iddepartamento = {iddepartamento}/>
    }
    return (
      <BrowserRouter>
       <MenuDepartamentos/>
      <Routes>
          <Route path='/' element={<HomeDepartamentos/>}/>
          <Route path='/create' element={<CreateDepartamento/>}/>
          <Route path='/detalle/:iddepartamento' element={<DetalleDepartamentoElement/>}/>
          {/* DETALLE VERSION 2  */}
          <Route path='/detalle/:iddepartamento/:nombre/:localidad' element={<DetalleDepartamentoElement/>}/>
          {/* DETALLE VERSION 2  */}

          {/* VERSION 1 DELETE */}
          <Route path="/delete/:iddepartamento" element={<EliminarDepartamentoElement/>}/>

          {/* VERSION 1 UPDATE- MODIFICAR */}
          <Route path="/modificar/:iddepartamento" element={<UpdateDepartamentoElement/>}/>
      </Routes> 
      </BrowserRouter>
    )
  }
}
