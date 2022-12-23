import React, { Fragment, useState } from "react";
import { getId } from "../../../__helpers/helpers";
import ActionButtons from "./action_buttons";
import EditFormButtons from "./edit_form_buttons";
import EditMessageForm from "./edit_message_form";
import PostCommentForm from "./post_comment_form";
import CommentContainer from "./comment_container";
import DeleteCommentModal from "../modals/delete_comment_modal";
import "./message_container.scss";

export default function MessageContainer(props) {
    const [toggle_comment, setToggleComment] = useState(false);
    const [message_content, setMessageContent] = useState(props.message.content);
    const [prev_message_content, setPrevMessageContent] = useState(props.message.content);
    const [is_editing, setIsEditing] = useState(false);
    const [comments, setComments] = useState([]);
    const [comment_content, setCommentContent] = useState("");
    const [is_open_delete_comment_modal, setIsOpenDeleteCommentModal] = useState(false);
    const [comment_id, setCommentId] = useState("");

    function toggleCreateComment() {
        setToggleComment(prev_state => !prev_state);
        setCommentContent("");
    }

    function changeCommentContent(event) {
        setCommentContent(event.target.value);
    }

    function submitComment(event) {
        event.preventDefault();
        setComments(prev_state => ([{id: getId(), content: comment_content}, ...prev_state]));
		setCommentContent("");
    }

    function enableEditMessage() {
        setIsEditing(true);
    }

    function cancelEditMessage() {
        setIsEditing(false);
        setMessageContent(prev_message_content);
    }

    function changeMessageContent(event) {
        setMessageContent(event.target.value);
    }

    function submitEditMessage(event) {
        event.preventDefault();
        setIsEditing(false);
        setMessageContent(event.target.post.value);
        setPrevMessageContent(event.target.post.value);
    }

    function openDeleteCommentModal(comment_id) {
        setIsOpenDeleteCommentModal(true);
        setCommentId(comment_id);
    }

    function closeDeleteCommentModal() {
        setIsOpenDeleteCommentModal(false);
    }

    function deleteComment(comment_id) {
		setIsOpenDeleteCommentModal(false);
        setComments(prev_state => (prev_state.filter((comment) => comment.id !== comment_id)));
    }

	let { openDeleteMessageModal, message: { id } } = props;
	return (
		<li className="message_container">
			<EditMessageForm
				message_content={message_content}
				is_editing={is_editing}
				changeMessageContent={changeMessageContent}
				submitEditMessage={submitEditMessage}
				toggle_comment={toggle_comment}
			>
				<ActionButtons
					openModal={openDeleteMessageModal}
					id={id}
					enableEditForm={enableEditMessage}
					toggleCreateComment={toggleCreateComment}
					comment_length={comments.length}
					action_for="message"
					toggle_comment={toggle_comment}
				/>
				<EditFormButtons
					cancelEditForm={cancelEditMessage}
					textarea_content={message_content}
				/>
			</EditMessageForm>
			{toggle_comment && (
				<Fragment>
					<PostCommentForm
						changeCommentContent={changeCommentContent}
						comment_content={comment_content}
						submitComment={submitComment}
					/>
					<ul className="comments_container">
						{comments.map(comment => (
							<CommentContainer
								key={comment.id}
								comment={comment}
								openDeleteCommentModal={openDeleteCommentModal}
							/>
						))}
					</ul>
					{is_open_delete_comment_modal && (
						<DeleteCommentModal
							show={is_open_delete_comment_modal}
							comment_id={comment_id}
							onHide={closeDeleteCommentModal}
							deleteComment={deleteComment}
						/>
					)}
				</Fragment>
			)}
		</li>
	);
}
