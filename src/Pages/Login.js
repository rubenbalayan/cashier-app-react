import React from 'react';
import "../Styles/Login.css";

class Login extends React.Component{
    constructor(props)
    {
        super(props);
        
        this.state = {
            username: "",
            password: ""
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
}

export default Login;