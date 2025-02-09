import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router'


export default function Api() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => 
            {setUsers(response.data)})
    }, [])
    // ADD
    return (
        <div>
            {users.map((e, index) => {
                return (
                    <div key={index}>
                        <h1>{e.name}</h1>
                        <h2>{e.email}</h2>
                        <Link to={`/api/${e.id}`} > Show More</Link>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}