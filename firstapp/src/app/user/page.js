import React from 'react'
import { getUsers } from '../../../services/getUsers'
import Link from 'next/link';

export const getData = async () => {
    let data = await fetch("http://localhost:3000/api/users");
    data = await data.json();
    return data;
}

const Page = async () => {
    const users = await getData()
    return (
        <div>
            <h1>All Users</h1>
            {
                users.map((user, id) => (
                    <>
                        <div><Link href={`user/${user.id}`}>{user.name}</Link></div>
                    </>
                ))
            }
        </div>
    )
}

export default Page
