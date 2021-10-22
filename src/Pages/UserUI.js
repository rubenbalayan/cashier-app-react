import React from 'react';
import "../Styles/UserUI.css";

class UserUI extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
            cashier : "Cashier1",
            technicalSupportNumber:"0XX-XX-XX-XX",
            managerNumber:"0XX-XX-XX-XX",
            searchValue : "",
            productCount : "",
            productsList : [
                { id:1,name:"product1",count:10,price:100},
                { id:2,name:"product2",count:4,price:1250},
                { id:3,name:"product3",count:50,price:1520},
                { id:4,name:"product4",count:25,price:3950},
                { id:5,name:"product5",count:18,price:5000},
                { id:6,name:"product6",count:1,price:12000},
                { id:7,name:"product7",count:0,price:200},
                { id:8,name:"product8",count:88,price:60},
                { id:1,name:"product1",count:10,price:100},
                { id:2,name:"product2",count:4,price:1250},
                { id:3,name:"product3",count:50,price:1520},
                { id:4,name:"product4",count:25,price:3950},
                { id:5,name:"product5",count:18,price:5000},
                { id:6,name:"product6",count:1,price:12000},
                { id:7,name:"product7",count:0,price:200},
                { id:8,name:"product8",count:88,price:60},
                { id:1,name:"product1",count:10,price:100},
                { id:2,name:"product2",count:4,price:1250},
                { id:3,name:"product3",count:50,price:1520},
                { id:4,name:"product4",count:25,price:3950},
                { id:5,name:"product5",count:18,price:5000},
                { id:6,name:"product6",count:1,price:12000},
                { id:7,name:"product7",count:0,price:200},
                { id:8,name:"product8",count:88,price:60}
            ],
            orderList:[],
            tempItem : null
    
        }
        
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleCountInput = this.handleCountInput.bind(this);
        this.handleProductSelect = this.handleProductSelect.bind(this);
        this.handleProductSubmit = this.handleProductSubmit.bind(this);
        this.handleOrderListProductDelete = this.handleOrderListProductDelete.bind(this);
    }

    handleSearchInput(event){
        let value = event.target.value;

        if(value == "" ||/^[a-zA-Z0-9]+$/.test(value))
        {
        this.setState({searchValue : value});
        }
      }
    handleCountInput(event){
        let value = event.target.value;

        if(value == "" || /^[0-9]+$/.test(value))
        {
        this.setState({productCount : value});
        }

      }
      handleProductSelect(event)
      {
        this.setState({tempItem : 
            {name : event.target.parentNode.children[0].innerText, 
                price : event.target.parentNode.children[2].innerText,
            totalCount: event.target.parentNode.children[1].innerText}});
        this.setState({productCount : 1});
        document.getElementById("prodCount").focus();
      }

      handleProductSubmit(event)
      {
        if(event.key === 'Enter')
        {   
            if(this.state.tempItem === null)
            {
                alert("No product selected");
            }
            else if(event.target.value > this.state.tempItem.totalCount)
            {
                alert("Entered count is greater than product count in the shop");
            }
            else{
                this.setState(
                    prev => ({orderList : 
                        [...prev.orderList, 
                            {name : this.state.tempItem.name, 
                                count:event.target.value,
                                price:this.state.tempItem.price*event.target.value}]}));
                this.setState({tempItem : null});
                this.setState({productCount : ""});
            }
            
            
        }

        
      }

      handleOrderListProductDelete(event)
      {

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
                        <div className = "userControl">
                            <button className="controlButton">Log Out</button>
                        </div>
                    </div>
                </div>
                <div className = "container">
                    <div className = "box leftBox">
                        <div className = "dropList">
                        <input type="search" placeholder="Search product or scan the bar code" name="searchBox" value={this.state.searchValue} onChange={this.handleSearchInput} required></input>
                        <div className = "productList">
                            <table className = "productTable">
                                <tr>
                                    <th>Name</th>
                                    <th>Count</th>
                                    <th>Price</th>
                                </tr>
                            {this.state.productsList.map(
                                product =>                 
                                    <tr className = "productRow" onClick={this.handleProductSelect}>
                                        <td>{product.name}</td>
                                        <td>{product.count}</td>
                                        <td>{product.price}</td>
                                    </tr>         
                                    )}
                                </table>
                        </div>
                        </div>
                        <div className = "count">
                            <div>Count</div>
                            <input id = "prodCount" type="text" placeholder=" " name="productCount" value={this.state.productCount} onChange={this.handleCountInput} onKeyDown={this.handleProductSubmit} required></input>
                        </div>
                    </div>
                    <div className = "box rightBox">
                    <div className = "orderHeader">Order List</div>
                        <div className="orderList">
                            <table className="orderTable">
                                <tr>
                                    <th>Name</th>
                                    <th>Count</th>
                                    <th>Price</th>
                                </tr>
                            {this.state.orderList.map(
                                product =>                 
                                    <tr className = "orderRow">
                                        <td>{product.name}</td>
                                        <td>{product.count}</td>
                                        <td>{product.price}</td>
                                        <td onClick={this.handleOrderListProductDelete}>X</td>
                                    </tr>         
                                    )}
                            </table>
                        </div>
                        <div className="orderCheckout">

                        </div>
                    </div>
                </div>   
            </div>
        );
    }

}



export default UserUI;