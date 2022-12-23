import React, { useEffect, useRef } from "react";
import "./edit_form.scss";

export default function EditMessageForm(props) {
    const textarea_element = useRef();
    let { message_content, children, is_editing, submitEditMessage, changeMessageContent } = props;

    useEffect(() => {
        let end = props.message_content.length;
        textarea_element.current?.setSelectionRange(end, end);
        textarea_element.current?.focus();
    }, [is_editing]);


	return (
        <form method="post" className="edit_message_form" onSubmit={submitEditMessage}>
            {is_editing ? (
                <textarea name="post" placeholder="Type your message here." value={message_content} onChange={changeMessageContent} ref={textarea_element}></textarea>
            ) : (
                <p>{message_content}</p>
            )}
            {is_editing ? children[1] : children[0]}
        </form>
    );
}
