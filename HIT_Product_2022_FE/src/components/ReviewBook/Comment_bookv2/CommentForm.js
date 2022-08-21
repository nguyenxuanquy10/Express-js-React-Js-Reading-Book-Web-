import { useState } from "react";

const CommentForm = ({
    handleSubmit,
    submitLabel,
    hasCancelButton = true,
    handleCancel,
    initialText = "",
    setActiveComment
}) => {
    const [text, setText] = useState(initialText);
    const isTextareaDisabled = text.length === 0;
    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(text);
        setText("");
    };
    return (
        <form onSubmit={onSubmit}>
            <textarea
                className="comment-form-textarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="comment-form-button" disabled={isTextareaDisabled}>
                {/* {submitLabel} */}
                Tạo
            </button>
            {hasCancelButton && (
                <button
                    type="button"
                    className="comment-form-button comment-form-cancel-button"
                    onClick={() => {
                        console.log("cancel");
                        setActiveComment(false);
                    }}
                >
                    Hủy
                </button>
            )}
        </form>
    );
};

export default CommentForm;