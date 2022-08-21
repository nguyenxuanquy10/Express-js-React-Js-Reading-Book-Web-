import Comments from '../Comment_bookv2/Comments';
import './comment.css';
import { useEffect } from 'react';

const CommentBooks = ({ socket, id, bookId }) => {
    useEffect(() => { });
    return (
        <div>
            <Comments commentsUrl="http://18.144.43.131:5000/api/commentBooks" currentUserId="1" socket={socket} id={id} bookId={bookId} />
        </div>
    );
};

export default CommentBooks;
