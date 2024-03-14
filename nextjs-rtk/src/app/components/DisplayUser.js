'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const DisplayUser = () => {
    const users = useSelector(state => state.users)
    return (
        <div className='display-user'>
            <h2>User List</h2>
            {
                users.map((user, id) => (
                    <div className='display-user-item'>{user.name}</div>
                ))
            }
        </div>
    )
}

export default DisplayUser
