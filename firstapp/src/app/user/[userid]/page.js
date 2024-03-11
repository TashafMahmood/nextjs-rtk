import React from 'react'

export const getSingleUser = async (id) => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`)
    data = await data.json();
    return data.data;
}

const Page = async ({ params }) => {
    const user = await getSingleUser(params.userid)
    return (
        <div>
            <h1>User Detail</h1>
            <h1>Name: {user.name}</h1>
            <h2>Email: {user.email}</h2>
        </div>
    )
}

export default Page
