'use client'
import React from 'react'

const TestButton = ({ price }) => {
    return (
        <button onClick={() => alert(price)}>Check Price</button>
    )
}

export default TestButton
