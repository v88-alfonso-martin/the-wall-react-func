import React, { useEffect, useRef } from "react";
import "./edit_form.scss";

export default function EditCommentForm(props) {
    const textarea_element = useRef();
    let { is_editing, children, comment_content, changeEditCommentContent, submitEditComment } = props;

	useEffect(() => {
        let end = props.comment_content.length;
        textarea_element.current?.setSelectionRange(end, end);
        textarea_element.current?.focus();
    }, [is_editing]);

	return (
		<form
			method="post"
			className="edit_comment_form"
			onSubmit={submitEditComment}
		>
			{is_editing ? (
				<textarea
					name="post_comment"
					value={comment_content}
					onChange={changeEditCommentContent}
					ref={textarea_element}
				></textarea>
			) : (
				<p>{comment_content}</p>
			)}
			{is_editing ? children[1] : children[0]}
		</form>
	);
}
