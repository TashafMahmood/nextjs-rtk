import React from 'react'

const Page = () => {
    return (
        <div>
            <h1>This is metadata page...</h1>
        </div>
    )
}

export default Page


export const generateMetadata = () => {
    return {
        title: "dynamic metadata",
        description: "this is dynamic metadata page"
    }
}