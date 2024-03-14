'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/slice'

const DisplayUser = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    return (
        <div className='display-user'>
            <h2>User List</h2>
            {
                users.map((user, id) => (
                    <div className='display-user-item'>
                        <span>{user.name}</span>
                        <button onClick={() => dispatch(removeUser(user.id))}>remove</button>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayUser
