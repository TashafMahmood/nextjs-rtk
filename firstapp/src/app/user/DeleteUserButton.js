'use client'
import React from 'react'

const DeleteUserButton = ({ id }) => {
    const deleteUser = async () => {
        let result = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "DELETE"
        })
        result = await result.json()
        if (result.success) {
            alert("User deleted successfully")
        } else {
            alert("Something went wrong")
        }
    }
    return (
        <div>
            <button onClick={deleteUser}>Delete User</button>
        </div>
    )
}

export default DeleteUserButton
