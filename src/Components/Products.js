import React from 'react'
import '../App.css';
import productData from "../Data.json";
import "../Styles/Products.css"

function Products() {
    return (
       
        <div className = "productsList">
        {
          productData && productData.map(item=>(
            <li>{item.productName}</li>
          ))
        }</div>
    
    )
}

export default Products
