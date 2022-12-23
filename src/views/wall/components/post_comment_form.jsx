import React, { useEffect, useRef } from "react";
import "./post_comment_form.scss";

export default function PostCommentForm(props) {
    const textarea_element = useRef();
    let { comment_content, submitComment, changeCommentContent } = props;

    useEffect(() => {
      textarea_element.current.focus();
    }, [])
    
	return (
		<form
			method="post"
			className="post_comment_form"
			onSubmit={submitComment}
		>
			<textarea
				name="comment"
				placeholder="Type your comment here."
				value={comment_content}
				onChange={changeCommentContent}
				ref={textarea_element}
			></textarea>
			<button
				type="submit"
				className={!comment_content ? "success_button disabled_button" : "success_button"}
				disabled={!comment_content}
			>
				Post Comment
			</button>
		</form>
	);
}
