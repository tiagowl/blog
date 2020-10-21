import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyBdKkH_-Jalrr-RRz13dNznO_M2gQPeMPw",
    authDomain: "reactfirebase-8d84d.firebaseapp.com",
    databaseURL: "https://reactfirebase-8d84d.firebaseio.com",
    projectId: "reactfirebase-8d84d",
    storageBucket: "reactfirebase-8d84d.appspot.com",
    messagingSenderId: "177217480094",
    appId: "1:177217480094:web:36c4fbd3d27c8b030d628f",
    measurementId: "G-0ZWG6X1B4Z"
  };
  // Initialize Firebase

class Firebase{

    constructor(){
        app.initializeApp(firebaseConfig);
        this.app = app.database();
    }

    login(email, password){
        return app.auth().signInWithEmailAndPassword(email, password);
    }

    async register(nome, email, password){
        await app.auth().createUserWithEmailAndPassword(email, password);

        const uid = app.auth().currentUser.uid;

        return app.database().ref('usuarios').child(uid).set({
            nome: nome
        })
    }

    isInitialized(){
        return new Promise(resolve =>{
            app.auth().onAuthStateChanged(resolve);
        });
    }

    getCurrent(){
        return app.auth().currentUser && app.auth().currentUser.email
    }

}

export default new Firebase();