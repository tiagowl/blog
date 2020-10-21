import React, {Component} from 'react';
import Firebase from '../../firebase';
import './home.css';

class Home extends Component{

    state = {
        posts: []
    }

    componentDidMount(){
        Firebase.app.ref('posts').once('value', (snapshot)=>{
            let state = this.state;
            state.posts = [];
            snapshot.forEach((childItem)=>{
                state.posts.push({
                    key: childItem.key,
                    titulo: childItem.val().titulo,
                    imagem: childItem.val().imagem,
                    descricao: childItem.val().descricao,
                    autor: childItem.val().autor
                })
            });
            this.setState(state);
        });
    }

    render(){
        return(
            <section id="post" >
                {this.state.posts.map((post)=>{
                    return(
                        <article key={post.key} >
                            <header>
                                <div className="title" >
                                    <strong>{post.titulo}</strong>
                                    <span>{post.autor}</span>
                                </div>
                            </header>
                            <img src={post.imagem} alt="Capa do post" />
                            <footer>
                                <p>{post.descricao}</p>
                            </footer>
                        </article>
                    );
                })}
            </section>
        );
    }
}

export default Home;