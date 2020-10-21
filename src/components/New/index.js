import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

class New extends Component{

    constructor(props){
        super(props);
        this.state = {
            titulo: "",
            imagem: "",
            descricao: ""
        }
        this.cadastrar = this.cadastrar.bind(this);
    }

    render(){
        return(
            <div>
                <header id="new" >
                    <Link to="/dashboard" >Voltar</Link>
                </header>
                <form onSubmit={this.cadastrar} >
                    <label>Título:</label><br/>
                    <input type="text" value={this.state.titulo} onChange={(e)=> this.setState({titulo: e.target.value})}/><br/>
                    <label>Url da Imagem:</label><br/>
                    <input type="text" value={this.state.imagem} onChange={(e)=> this.setState({imagem: e.target.value})}/><br/>
                    <label>Descrição:</label><br/>
                    <textarea type="text" value={this.state.descricao} onChange={(e)=> this.setState({descricao: e.target.value})}/><br/>
                    <button type="submit" >Cadastrar</button>
                </form>
            </div>
        );
    }
}

export default withRouter(New);