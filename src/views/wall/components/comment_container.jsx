import React, { useState } from "react";
import ActionButtons from "./action_buttons";
import "./comment_container.scss";
import EditCommentForm from "./edit_comment_form";
import EditFormButtons from "./edit_form_buttons";

export default function CommentContainer(props) {
    const [comment_content, setCommentContent] = useState(props.comment.content);
    const [prev_comment_content, setPrevCommentContent] = useState(props.comment.content);
    const [is_editing, setIsEditing] = useState(false);

    function enableEditComment() {
        setIsEditing(true);
    }

    function cancelEditComment() {
        setIsEditing(false);
        setCommentContent(prev_comment_content);
    }

    function changeEditCommentContent(event) {
        setCommentContent(event.target.value);
    }

    function submitEditComment(event) {
        event.preventDefault();
        setIsEditing(false);
        setCommentContent(event.target.post_comment.value);
        setPrevCommentContent(event.target.post_comment.value);
    }

    let { openDeleteCommentModal, comment: { id } } = props;

	return  (
        <li className="comment_container">
            <EditCommentForm 
                comment_content={comment_content} 
                is_editing={is_editing} 
                changeEditCommentContent={changeEditCommentContent} 
                submitEditComment={submitEditComment}
            >
                <ActionButtons
                    id={id}
                    openModal={openDeleteCommentModal}
                    action_for="comment"
                    enableEditForm={enableEditComment}
                />
                <EditFormButtons cancelEditForm={cancelEditComment} textarea_content={comment_content} />
            </EditCommentForm>
        </li>
    );
}
