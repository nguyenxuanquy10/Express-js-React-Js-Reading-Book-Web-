import axios from 'axios';
export const getComments = async(id, bookId) => {
    let commentBook = [];
    const book_id = bookId;
    // http://localhost:5000/api/commentBooks/
    await axios
        .get("http://18.144.43.131:5000/api/commentBooks/" + `${book_id}`)
        .then(data => {
            console.log(data.data.commentBook);
            data.data.commentBook.forEach(function(current, index) {
                const customData = {
                    id: current._id,
                    body: current.commentBookContent,
                    username: current.users.username,
                    userId: current.users._id,
                    parentId: current.parentId,
                    createdAt: current.commentBookDate,
                };
                commentBook.push(customData);
            })

        })
        .catch(error => console.log(error));


    return commentBook;
};

export const createComment = async(text, parentId = null, socket, id, bookId) => {
    const book_id = bookId;
    const userId = id ? id : "62f35d162a90ab209c7210c8";
    const headers = {
        'Content-Type': 'application/json',
        'token': "toke_fake"
    };

    let newCommentBook = {
        book: book_id,
        commentBookContent: text,
        parentId,
        users: userId,
    };

    const customComment = {};
    await axios.post("http://18.144.43.131:5000/api/commentBooks/", newCommentBook, headers)
        .then(res => {
            customComment.id = res.data._doc._id;
            customComment.body = res.data._doc.commentBookContent;
            customComment.parentId = parentId;
            customComment.userId = res.data._doc.users;
            customComment.username = res.data.username;
            customComment.createdAt = res.data._doc.commentBookDate;
            console.log(customComment);
        })
    socket.emit("comment", customComment);
    return customComment;

    // })
    // await socket.emit("comment", newCommentBook);
};

export const updateComment = async(text) => {
    return { text };
};

export const deleteComment = async() => {
    return {};
};