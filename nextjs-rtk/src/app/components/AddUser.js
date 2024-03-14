import React from 'react'

const AddUser = () => {
    return (
        <div className='add-user'>
            <h2>User List</h2>
            <input placeholder='Add User' type='text' className='add-user-input' />
            <button className='add-user-btn'>Add user</button>
        </div>
    )
}

export default AddUser
