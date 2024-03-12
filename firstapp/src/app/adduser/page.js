'use client'
import React, { useState } from 'react'

const Page = () => {
    const [name, setName] = useState('')
    const handleSubmit = async () => {
        let response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            body: JSON.stringify({ name }),
        })
        response = await response.json()
    }
    return (
        <div>
            <h1>Add New User</h1>
            <input type="text" placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
            <br /><br />
            <button onClick={handleSubmit}>Add User</button>
        </div>
    )
}

export default Page
