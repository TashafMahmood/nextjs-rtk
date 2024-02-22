'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const About = () => {
    const router = useRouter()
    return (
        <div>
            <h1>About Page</h1>
            <button onClick={() => router.push("/")}>Go to home</button>
            <br />
            <br />
            <Link href={'/about/aboutcollege'}>Go to About College</Link><br /><br />
            <Link href={'/about/aboutstudent'}>Go to About Student</Link>
        </div>

    )
}

export default About
