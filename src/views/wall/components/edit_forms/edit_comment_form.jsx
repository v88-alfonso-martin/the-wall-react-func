import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { editComment } from "../../../../redux/wall/wall_slice";
import "./edit_form.scss";
import EditFormButtons from "../edit_form_buttons/edit_form_buttons";
import { useForm } from "react-hook-form";

export default function EditCommentForm(props) {
	const { register, handleSubmit, setFocus, getValues } = useForm({defaultValues: { post_comment: props.comment_content}});
	const dispatch = useDispatch();
    let { cancelEditComment, message_id, comment_id } = props;

	useEffect(() => {
		setFocus("post_comment");
    }, [setFocus]);

	return (
		<form
			method="post"
			className="edit_comment_form"
			onSubmit={handleSubmit(({ post_comment }) => {
				dispatch(editComment({post_comment, message_id, comment_id}));
				cancelEditComment();
			})}
		>
			<textarea
				{...register("post_comment", {
					required: true
				})}
			></textarea>
			<EditFormButtons cancelEditForm={cancelEditComment} textarea_content={getValues("post_comment")} />		
		</form>
	);
}
