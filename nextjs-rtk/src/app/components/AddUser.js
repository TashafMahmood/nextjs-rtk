'use client'
import React, { useState } from 'react'
import { addUser } from '../redux/slice'
import { useDispatch } from 'react-redux'
import Link from 'next/link'


const AddUser = () => {
    const [user, setUser] = useState('')
    const dispatch = useDispatch()
    const addUserFunc = () => {
        dispatch(addUser(user))
        setUser('')
    }
    return (
        <div className='add-user'>
            <h2>User List</h2>
            <input placeholder='Add User' type='text' className='add-user-input' value={user} onChange={e => setUser(e.target.value)} />
            <button className='add-user-btn' onClick={addUserFunc}>Add user</button>
            <br/>
            <br/>
            <Link href={'/remove-user'}>Remove User</Link>
        </div>
    )
}

export default AddUser
