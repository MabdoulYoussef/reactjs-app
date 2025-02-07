import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'




export default function ShowMore() {
    const [users, setUsers] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setUsers(response.data)
        })
    }, [])
    const user = users.find((u) => u.id === parseInt(id))
    console.log(user)
    function goBack() {
        navigate('/api')
    }
    return (
        <div>
            <h1>Show More</h1>
            {user && (
                <div>
                    <h1>{user.name}</h1>
                    <h2>{user.email}</h2>
                    <h3>{user.phone}</h3>
                    <h4>{user.website}</h4>
                    <Link to={"/api"}>Go Back</Link>
                    <br />
                    <button onClick={goBack}>back</button>
                </div>
            )}
        </div>
    )
}