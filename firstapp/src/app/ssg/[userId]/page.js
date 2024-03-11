import React from 'react'
import { getUsers } from '../../../../services/getUsers'

const Page = async ({ params }) => {
    const { userId } = params
    const userList = await getUsers()

    const user = userList[userId - 1]
    return (
        <div>
            <h1>User detail Page</h1>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    )
}

export default Page


export const generateStaticParams = async () => {
    const users = await getUsers()
    return users.map((user,id)=>(
        {
            userId: user.id.toString()
        }
    ))
}