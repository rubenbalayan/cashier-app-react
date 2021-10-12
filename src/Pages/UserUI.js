import React from 'react';
import "../Styles/UserUI.css";

class UserUI extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
            cashier : "Cashier1",
            technicalSupportNumber:"0XX-XX-XX-XX",
            managerNumber:"0XX-XX-XX-XX"
        }
    }

    render(){
        return(
            <div id="userMain">
                <div className = "header">
                    <div className = "information">
                        Welcome {this.state.cashier}
                    </div>
                    <div className = "menu">
                        <div className = "contacts">
                            <div>Technical support : {this.state.technicalSupportNumber} 
                            </div>
                            <div>Manager : {this.state.managerNumber}</div>
        
                        </div>
                        <div className = "switchUser">
                            <button className="switchButton">Switch User</button>
                        </div>
                    </div>
                </div>
                <div className = "container">
                    <div className = "box">
                        
                    </div>
                    <div className = "box">
                    </div>
                </div>   
            </div>
        );
    }

}



export default UserUI;