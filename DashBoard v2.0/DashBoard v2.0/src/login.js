import React, { Component } from 'react';
import '../src/assets/css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

import logo from "logo-agua.png";

var baseUrl="http://10.42.0.1:8080/getUser=";
const cookies = new Cookies();

class Login extends Component {
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        
        console.log(baseUrl+
                    this.state.form.username+
                    '&pass='+
                    md5(this.state.form.password))
       
        await axios.get(baseUrl + this.state.form.username+
                           '&pass=' + md5(this.state.form.password))
            .then(response=>{
                console.log(response.data)
                if(response.data > 0){
                    window.location.href="http://localhost:3000/admin/dashboard";
                }else{
                    alert('Usuario o Contraseña Incorrectos');
                    window.location.href="/";
                }
        })
    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./menu";
        }
    }
    

    render() {
        return (
                <div className="contPrincipal">
                    <div className="logo-img">
                        <img src={logo} alt="react-logo" />
                    </div>
                    <div className="contSecundario">
                        <div className="form-group">
                            <label>Usuario: </label>
                            <br />
                            <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={this.handleChange}
                            />
                            <br />
                            <label>Contraseña: </label>
                            <br />
                            <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleChange}
                            />
                            <br />
                            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Login;