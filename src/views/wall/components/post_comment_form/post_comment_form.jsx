import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addComment } from "../../../../redux/wall/wall_slice";
import "./post_comment_form.scss";

export default function PostCommentForm(props) {	
	const { register, handleSubmit, setFocus, reset, formState, formState: { isValid, isSubmitted } } = useForm({defaultValues: { post_comment: props.comment_content}});
	const dispatch = useDispatch();
	const [comment_content, setCommentContent] = useState("")

	useEffect(() => {
		setFocus("comment");
		if(isSubmitted) {
			reset({comment: ""});
		}
    }, [setFocus, formState, reset]);
	
    let { message_id } = props;

	return (
		<form
			method="post"
			className="post_comment_form"
			onSubmit={handleSubmit(({comment}) => {
				dispatch(addComment({comment, message_id}));
				setCommentContent("");
			})}
		>
			<textarea
				placeholder="Type your comment here."
				{...register("comment", {
					required: true
				})}
			></textarea>
			<button
				type="submit"
				className={!isValid ? "success_button disabled_button" : "success_button"}
				disabled={!isValid}
			>
				Post Comment
			</button>
		</form>
	);
}
