'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginStudent = () => {
    const router = useRouter()
    return (
        <div>
            <h1>This is Login Page for Student</h1>
            <br />
            <br />
            <button onClick={() => router.push("/")}>Go to Home</button>
        </div>
    )
}

export default LoginStudent
