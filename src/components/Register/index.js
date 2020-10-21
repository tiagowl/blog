import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Firebase from '../../firebase';
import './register.css';

class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            password: ''
        }

        this.register = this.register.bind(this);
        this.onRegister = this.onRegister.bind(this);

    }

    register(e){
        this.onRegister();
    }

    onRegister = async () => {
        const { nome, email, password } = this.state;

        await Firebase.register(nome, email, password);

        this.props.history.replace("/dashboard");
    }

    render(){
        return(
            <div>
               <h1 className="register-h1" >Novo Usuário</h1><br/>
               <form onSubmit={this.register} id="login" >
                   <label>Nome:</label><br/>
                   <input type="text" value={this.state.nome} onChange={(e)=> this.setState({nome: e.target.value})} /><br/>
                   <label>Email:</label><br/>
                   <input type="email" value={this.state.email} onChange={(e)=> this.setState({email: e.target.value})} /><br/>
                   <label>Password:</label><br/>
                   <input type="password" value={this.state.password} onChange={(e)=> this.setState({password: e.target.value})} /><br/>
                   <button type="submit" >Cadastrar</button><br/>
                   <Link to="/login" >Já possui uma conta?</Link>
               </form>
            </div>
        );
    }
}

export default withRouter(Register);