import React, { Component } from 'react'
import { Routes,Route,BrowserRouter,useParams } from 'react-router-dom';
import MenuDepartamentos from './MenuDepartamentos';
import HomeDepartamentos from './HomeDepartamentos';
import CreateDepartamento from './CreateDepartamento';


export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
      <h1>hgjhg</h1>
      {/* <MenuDepartamentos/>
      <Routes>
          <Route path='/' element={<HomeDepartamentos/>}/>
          <Route path='/create' element={<CreateDepartamento/>}/>
      </Routes> */}
      </BrowserRouter>
    )
  }
}
