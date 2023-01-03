import React, { useState } from "react";
import ActionButtons from "../actions_buttons/action_buttons";
import "./comment_container.scss";
import EditCommentForm from "../edit_forms/edit_comment_form";

export default function CommentContainer(props) {
    const [is_editing, setIsEditing] = useState(false);
    let { openDeleteCommentModal, comment: { id, content}, message_id, setCommentId } = props;

    return  (
        <li className="comment_container">
            {!is_editing ? (
                <>
                    <p>{content}</p>
                    <ActionButtons
                        id={id}
                        openModal={openDeleteCommentModal}
                        action_for="comment"
                        enableEditForm={() => setIsEditing(true)}
                        setCommentId={setCommentId}
                    />
                </>
            ) : (
                <EditCommentForm 
                    message_id={message_id}
                    comment_id={id}
                    comment_content={content} 
                    cancelEditComment={() => setIsEditing(false)}
                />
            )}
        </li>
    );
}
