import React from 'react'
import { getUsers } from '../../../services/getUsers'
import Link from 'next/link';
import styles from '../style.module.css'

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
                        <div className={styles.user_item}>
                            <span><Link href={`user/${user.id}`}>{user.name}</Link></span>
                            <span><Link href={`user/${user.id}/updateuser`}>{"Edit"}</Link></span>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default Page
