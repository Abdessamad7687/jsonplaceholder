import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Card = ({ userId, title, body }) => {
    return (
        <div className="card bg-light mb-3 w-25 m-2 mx-auto">
            <p className="card-header">UserId: {userId}</p>
            <div className="card-body">
                <h6 className="card-title"><strong>Title</strong>: {title}</h6>
                <p className="card-text">{body}</p>
            </div>
        </div>
    )
}

export default Card