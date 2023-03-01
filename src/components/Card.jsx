import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Card = ({ userId, title, body }) => {
    return (
        <div className="card bg-light mb-3 w-25 m-2 mx-auto">
            <div className="card-header">UserId: {userId}</div>
            <div className="card-body">
                <h5 className="card-title"><strong>Title</strong>: {title}</h5>
                <p className="card-text">{body}</p>
            </div>
        </div>
    )
}

export default Card