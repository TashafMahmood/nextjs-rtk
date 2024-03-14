'use client'
import React, { useState } from 'react'
import { addUser } from '../redux/slice'
import { useDispatch } from 'react-redux'


const AddUser = () => {
    const [user, setUser] = useState('')
    const dispatch = useDispatch()
    const addUserFunc = () => {
        console.log(user)
        dispatch(addUser(user))
    }
    return (
        <div className='add-user'>
            <h2>User List</h2>
            <input placeholder='Add User' type='text' className='add-user-input' value={user} onChange={e => setUser(e.target.value)} />
            <button className='add-user-btn' onClick={addUserFunc}>Add user</button>
        </div>
    )
}

export default AddUser
