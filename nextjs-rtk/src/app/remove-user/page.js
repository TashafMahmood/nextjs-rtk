'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/slice'

const page = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    console.log(users)
    return (
        <div>
            <h2>Remove user page</h2>
            {
                users.map((user, id) => (
                    <div>
                        <span>{user.name}</span>
                        <button onClick={() => dispatch(removeUser(user.id))}>delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default page
