import React, { Fragment, useState } from "react";
import ActionButtons from "../actions_buttons/action_buttons";
import EditMessageForm from "../edit_forms/edit_message_form";
import PostCommentForm from "../post_comment_form/post_comment_form";
import CommentContainer from "../comment_container/comment_container";
import DeleteCommentModal from "../../modals/delete_modals/delete_comment_modal";
import "./message_container.scss";

export default function MessageContainer(props) {
    const [toggle_comment, setToggleComment] = useState(false);
    const [is_editing, setIsEditing] = useState(false);
    const [is_open_delete_comment_modal, setIsOpenDeleteCommentModal] = useState(false);
    const [comment_id, setCommentId] = useState("");

	let { openDeleteMessageModal, message: { id, content, comments } } = props;

	return (
		<li className="message_container">
			{!is_editing ? (
				<>
					<p>{content}</p>
					<ActionButtons
						openModal={openDeleteMessageModal}
						id={id}
						enableEditForm={() => setIsEditing(true)}
						toggleCreateComment={() => setToggleComment(prev_state => !prev_state)}
						comment_length={comments.length}
						action_for="message"
						toggle_comment={toggle_comment}
					/>
				</>
			) : (
				<EditMessageForm
					message_content={content}
					message_id={id}
					toggle_comment={toggle_comment}
					cancelEditMessage={() => setIsEditing(false)}
				/>
			) }

			{toggle_comment && (
				<Fragment>
					<PostCommentForm message_id={id} />
					<ul className="comments_container">
						{comments.map(comment => (
							<CommentContainer
								key={comment.id}
								comment={comment}
								message_id={id}
								openDeleteCommentModal={() => setIsOpenDeleteCommentModal(true)}
								setCommentId={setCommentId}
							/>
						))}
					</ul>
					{is_open_delete_comment_modal && (
						<DeleteCommentModal
							show={is_open_delete_comment_modal}
							message_id={id}
							comment_id={comment_id}
							onHide={() => setIsOpenDeleteCommentModal(false)}
						/>
					)}
				</Fragment>
			)}
		</li>
	);
}
