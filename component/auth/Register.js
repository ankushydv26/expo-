import React, { Component } from 'react';
import {TextInput , View ,Button } from "react-native";
import firebase from "./firebase/firebase";

 class Register extends Component {
    constructor(props){
        super(props)
        this.state ={
            name:'',
            email:'',
            password:''
        }
        this.SignUp = this.onSignUp.bind(this);
    }

    onSignUp =() =>{
         const {email, name, password} = this.state;
        //  firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    
    render() {
        return (
            <View>
              <p style={{textAlign:'center'}}>Name</p>
                <TextInput
                  style={{textAlign:'center'}}
                  placeholder="name"
                  onChangeText={(name) => this.setState({name})}
                />
              <p style={{textAlign:'center'}}>Email</p>  
                <TextInput
                  style={{textAlign:'center'}}
                  placeholder="email"
                  onChangeText={(email) => this.setState({email})}
                />
             <p style={{textAlign:'center'}}>password</p>   
                <TextInput
                  style={{textAlign:'center'}}
                  secureTextEntry={true}
                  placeholder="password"
                  onChangeText={(password) => this.setState({password})}
                />
                <Button 
                  title="Register"
                  onPress={ this.onSignUp()}
                />

            </View>
        )
    }
}

export default Register;