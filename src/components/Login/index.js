import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Firebase from '../../firebase';
import './login.css';

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.entrar = this.entrar.bind(this);
        this.login = this.login.bind(this);
    }

    componentDidMount(){
        //verfificar se um usuario esta logado
        if(Firebase.getCurrent()){
            return this.props.history.replace("/dashboard");
        }
    }

    entrar(e){
        this.login();
    }

    login = async () => {
        const { email, password } = this.state;
        await Firebase.login(email, password)
        .catch((error)=>{
            if(error.code === 'auth/user-not-found'){
                alert("Esse usuário não existe");
            }else{
                alert(`Código de erro: ${error.code}`);
                return null;
            }
        })

        this.props.history.replace("/dashboard")
    }

    render(){
        return(
            <div>
               <form onSubmit={this.entrar} id="login" >
                   <label>Email:</label><br/>
                   <input type="email" value={this.state.email} onChange={(e)=> this.setState({email: e.target.value})} /><br/>
                   <label>Password:</label><br/>
                   <input type="password" value={this.state.password} onChange={(e)=> this.setState({password: e.target.value})} /><br/>
                   <button type="submit" >Entrar</button><br/>
                   <Link to="/register" >Ainda não possui uma conta?</Link>
               </form>
            </div>
        );
    }
}

export default withRouter(Login);