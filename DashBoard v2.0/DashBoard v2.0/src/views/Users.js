
import { Line} from "react-chartjs-2";
// reactstrap components
import {Card, CardHeader, CardBody, CardFooter, 
  UncontrolledAlert, CardTitle, Row, Col,} from "reactstrap";

//import {dashboardTEMPChart} from "variables/charts.js"
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const funcionSave = () =>{
    alert("Usuario Registrado");
}



function Users() {


  return (
    <>
      <div className="content">
        
        <Row>       
        <Col md="4">
                    <h4>Datos De Usuario</h4>
                    <label>Usuario: </label>
                    <br />
                    <div className="input-group">
                        <span class="input-group-text" id="inputGroupPrepend2">@</span>
                        <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required></input>
                    </div>
                    <br />
                    <label>Contraseña: </label>
                    <br />
                    <input
                    type="password"
                    className="form-control"
                    name="password"
                    required
                    />
                    <br />
                    <label>Repita la Contraseña: </label>
                    <br />
                    <input
                    type="password"
                    className="form-control"
                    name="username"
                    required
                    />
                    <br />
                    <label>Rol: </label>
                    <br />
                    <select name="Rol">
                    <option >-Rol-</option>
                    <option value="value1">Rol 1</option>
                    <option value="value2">Rol 2</option>
                    <option value="value3">Rol 3</option>
                    </select>
                    
                    <br />
                
            </Col>
            <Col md="4">
                <h4>Datos Personales</h4>
                    <label>Nombre: </label>
                    <br />
                    <input
                    type="text"
                    className="form-control"
                    name="username"
                    required
                    />
                    <br />
                    <label>Apellido: </label>
                    <br />
                    <input
                    type="text"
                    className="form-control"
                    name="username"
                    required
                    />
                    <br />
                    <label>DNI: </label>
                    <br />
                    <input
                    type="text"
                    className="form-control"
                    name="username"
                    required
                    />
                    <br />
                    <label>Correo: </label>
                    <br />
                    <input
                    type = "email" 
                    className="form-control"
                    name="username"
                    required
                    />
                    <br />
                    <label>Teléfono: </label>
                    <br />
                    <input
                    type = "tel" 
                    className="form-control"
                    name="username"
                    required
                    />
                    <br />
                    <input type="submit" value="Registrar" class="btn btn-primary btn-sm" onClick={() => funcionSave()} />
                
            </Col>
              
        </Row>

        <br/>
       
        <hr/>
        <Row>
          <Col md="2"></Col>
          <Col>
          <h4>Usuarios Registrados</h4>
          <br/>
         <div id ="muestra">
          <table id ="muestra" class="table">
            
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">DNi</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Correo</th>
                <th scope="col">Rol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Juan</td>
                <td>Perez</td>
                <td>41414141</td>
                <td>2664444444</td>
                <td>correo@mail.com</td>
                <td>Visualizador</td>
                <button className="nc-icon nc-simple-remove"></button>
              </tr>
              <tr>
              <td>Juan</td>
                <td>Perez</td>
                <td>41414141</td>
                <td>2664444444</td>
                <td>correo@mail.com</td>
                <td>Visualizador</td>
                <button className="nc-icon nc-simple-remove"></button>

              </tr>
              <tr>
                <td>Juan</td>
                <td>Perez</td>
                <td>41414141</td>
                <td>2664444444</td>
                <td>correo@mail.com</td>
                <td>Visualizador</td>
                <button className="nc-icon nc-simple-remove"></button>
              </tr>
            </tbody>
          </table>
        </div>
        </Col>
        <Col md="2"></Col>
        </Row>
      
        
      </div>
      
    </>
    
    
  );

 
  
  
}



export default Users;