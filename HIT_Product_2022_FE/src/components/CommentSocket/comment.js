import React from 'react'
import './comment.scss'

const Comment = (props) => {
    const {
        users,
        commentBookContent,
        date
    } = props.comment;

    return (
        <div className="comment">
            <div className="comment-user">
                <p className="comment-user_name">{users}</p>
                <p className="comment-user_comment">{commentBookContent}</p>
            </div>
        </div>
    )
}

export default Comment