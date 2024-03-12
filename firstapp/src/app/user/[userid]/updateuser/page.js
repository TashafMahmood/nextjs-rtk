'use client'
import React, { useEffect, useState } from 'react'

const Page = ({ params }) => {
  const id = params.userid
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')

  useEffect(() => {
    getSingleUser()
  }, [])

  const getSingleUser = async () => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`)
    data = await data.json();
    console.log(data, 'data')
    setName(data.data.name)
    setEmail(data.data.email)
    setAge(data.data.age)
  }

  return (
    <div>
      <h1>Update user page</h1>
      <input placeholder='Enter name' type='text' value={name} onChange={e => setName(e.target.value)} />
      <br />
      <input placeholder='Enter email' type='email' value={email} onChange={e => setEmail(e.target.value)} />
      <br />
      <input placeholder='Enter age' type='number' value={age} onChange={e => setAge(e.target.value)} />
      <br />
      <br />
      <button>Update User</button>
    </div>
  )
}

export default Page
