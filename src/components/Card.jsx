import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Card = ({ userId, title, body }) => {
    return (
        <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 bg-gray-100 mb-3 w-1/4 m-2 mx-auto">
            <p className="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900">UserId: {userId}</p>
            <div className="flex-auto p-6">
                <h6 className="mb-3"><strong>Title</strong>: {title}</h6>
                <p className="mb-0">{body}</p>
            </div>
        </div>
    )
}

export default Card