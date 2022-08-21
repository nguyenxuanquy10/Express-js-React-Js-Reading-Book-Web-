
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
    updateComment as updateCommentApi,
    deleteComment as deleteCommentApi,
} from "./controllerComment";

const Comments = ({ commentsUrl, currentUserId, socket, id, bookId }) => {
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const [handleClose, setHandleClose] = useState(true);
    const handleCloseFc = () => {
        setHandleClose(false);
    }
    const rootComments = backendComments.filter(
        (backendComment) => backendComment.parentId === null
    );
    const getReplies = (commentId) =>
        backendComments
            .filter((backendComment) => backendComment.parentId === commentId)
            .sort(
                (a, b) =>
                    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
    const addComment = (text, parentId) => {
        createCommentApi(text, parentId, socket, id, bookId).then((comment) => {

            setBackendComments([comment, ...backendComments]);
            setActiveComment(null);

        });
    };

    const updateComment = (text, commentId) => {
        updateCommentApi(text).then(() => {
            const updatedBackendComments = backendComments.map((backendComment) => {
                if (backendComment.id === commentId) {
                    return { ...backendComment, body: text };
                }
                return backendComment;
            });
            setBackendComments(updatedBackendComments);
            setActiveComment(null);
        });
    };
    const deleteComment = (commentId) => {
        if (window.confirm("Are you sure you want to remove comment?")) {
            deleteCommentApi().then(() => {
                const updatedBackendComments = backendComments.filter(
                    (backendComment) => backendComment.id !== commentId
                );
                setBackendComments(updatedBackendComments);
            });
        }

    };

    useEffect(() => {
        getCommentsApi(id, bookId).then((data) => {
            setBackendComments(data);
        });
    }, []);
    socket.on("listComment", (data) => {
        const customComment = {};
        customComment.id = data.id;
        customComment.body = data.body;
        customComment.parentId = data.parentId;
        customComment.userId = data.users;
        customComment.username = data.username;
        customComment.createdAt = data.commentBookDate;
        setBackendComments([data, ...backendComments]);
        setActiveComment(null);
    })
    return (
        <div className="comments">
            <h3 className="comments-title">Bình luận</h3>
            <div className="comment-form-title">Tạo</div>
            {/* {
                handleClose && (
                    <CommentForm submitLabel="Write" handleSubmit={addComment} socket={socket} onBlur={handleCloseFc} />

                )
            } */}
            <CommentForm submitLabel="Write" handleSubmit={addComment} socket={socket} onBlur={handleCloseFc} setActiveComment={setActiveComment} />
            <div className="comments-container">
                {rootComments.map((rootComment) => (
                    <Comment
                        key={rootComment.id}
                        comment={rootComment}
                        replies={getReplies(rootComment.id)}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        addComment={addComment}
                        deleteComment={deleteComment}
                        updateComment={updateComment}
                        currentUserId={currentUserId}
                    />
                ))}
            </div>
        </div>
    );
};

export default Comments;