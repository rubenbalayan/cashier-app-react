import React, { useState } from 'react';
import "../Styles/Login.css";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Login = () => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    //const [token,setToken] = useState();
    const [data,setData] = useState();

    const history = useHistory();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      }
      
    const handlePasswordChange = (event) => { 
        setPassword(event.target.value);
      }

    const handleSubmit = async (event) =>
    {
       //Fetching a call to ensure that credentials are correct

       let data = await loginUser({username,password});

       debugger 
        
        //history.push('/userui');   
       
    }

    async function loginUser(credentials)
    {
        return fetch("http://192.168.88.92:8085/api/auth/login",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': credentials.length
              }
        })
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => console.log(err));
    }
    

    return(

        <div id="loginMain">
                <form id="loginForm" onSubmit={handleSubmit} >
                    <label for = "username">Username</label>
                    <input type="text" placeholder="Enter Username" name="username" value={username} onChange={handleUsernameChange} required></input>
                    
                    <label for = "password">Password</label>
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={handlePasswordChange} required></input>

                    <button type="submit">Submit</button>
                </form>

        </div>

    );

}


/*class Login extends React.Component{
    constructor(props)
    {
        super(props);
        
        this.state = {
            username: "",
            password: "",
            data : []
        };

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);    
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleUsernameChange(event){
        this.setState({username : event.target.value});
      }
      
    handlePasswordChange(event){ 
        this.setState({password : event.target.value});
      }

    handleSubmit(event)
    {
       //Fetching a call to ensure that credentials are correct
        let username = this.state.username;
        let password = this.state.password;
        let body = {username, password};
        fetch("http://192.168.88.92:8085/api/auth/login", {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(body)
        }).then(results => results.json()).then(data => this.setState({ data: data }));

        alert(this.state.data);

       this.props.history.push('/userui');
       
    }


    render()
    {
        return(
            <div id="loginMain">
                    <form id="loginForm" onSubmit={this.handleSubmit} >
                        <label for = "username">Username</label>
                        <input type="text" placeholder="Enter Username" name="username" value={this.state.username} onChange={this.handleUsernameChange} required></input>
                        
                        <label for = "password">Password</label>
                        <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handlePasswordChange} required></input>
    
                        <button type="submit">Submit</button>
                    </form>
            </div>
        );
    }
}*/

export default Login;