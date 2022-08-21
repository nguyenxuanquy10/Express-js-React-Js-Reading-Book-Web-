import Comments from "../Comment_bookv2/Comments"
import './comment.css'
const CommentBooks = () => {
    return (
        <div>
            <Comments
                commentsUrl="http://localhost:3004/comments"
                currentUserId="1"
            />
        </div>
    );
};

export default CommentBooks;
