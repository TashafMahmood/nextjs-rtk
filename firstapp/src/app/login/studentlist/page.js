import Link from 'next/link'
import React from 'react'

const StudentList = () => {
    const data = [
        {
            id: 1,
            name: 'Tashaf'
        },
        {
            id: 2,
            name: 'Atique'
        },
        {
            id: 1,
            name: 'Saif'
        },
        {
            id: 1,
            name: 'Naveen'
        },
    ]
    return (
        <div>
            <h1>Students List</h1>
            <ul>
                {
                    data?.map((item, id) => (
                        <li><Link href={`/login/studentlist/${item.name}`}>{item?.name}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default StudentList
