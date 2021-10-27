import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [data, setData] = useState([])
    useEffect(() => {
        //axios.get('http://localhost:8084/api/supplier')
        axios.get('https://jsonplaceholder.typicode.com/users')

        .then(res => {
            console.log(res)
            setData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })
    return (
        <div>
        <ul>
        {
            data.map(d => <li key ={d.id}> {d.name, d.contactName, d.address, d.phone}</li>)
        }
        </ul>
            
        </div>
    )
}

export default DataFetching
