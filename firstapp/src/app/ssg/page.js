import React from 'react'
import { getUsers } from '../../../services/getUsers'
import Link from 'next/link'

const Page = async () => {
    const userList = await getUsers()
    return (
        <div>
            <h2>Static Site Generation - USER LIST</h2>
            {
                userList.map((user, id) => (
                    <h2 key={id}>
                        <Link href={`/ssg/${user.id}`}>{user.name}</Link >
                    </h2>
                ))
            }
        </div>
    )
}

export default Page


export const generateMetadata = () => {
    return {
        title: 'SSG- Static Site Generation',
        description: 'This is a static page generated by Next.js using the getServerSideProps method'
    }
}