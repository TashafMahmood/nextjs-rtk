'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
    const router = useRouter()

    return (
        <div>
            <h1>Login Page</h1>
            <br />
            <button onClick={() => router.push('/login/loginteacher')}>Go to Teacher Login </button><br /><br />
            <button onClick={() => router.push('/login/loginstudent')}>Go to Student Login </button><br />
            <br />
            <Link href={'/'}>Go to Home</Link>
        </div>
    )
}

export default Login
