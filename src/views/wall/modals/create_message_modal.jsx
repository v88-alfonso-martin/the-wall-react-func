import React, { useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import "./create_message_modal.scss";

export default function CreateMessageModal(props) {
	let { changeMessageContent, message_content, submitMessage, ...rest } = props;
	const textarea_element = useRef();

	useEffect(() => {
		textarea_element.current.focus();
	}, [])

	return (
		<Modal
			className="create_message_modal"
			{...rest}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body className="py-0 px-5 pb-5">
				<h4 className="pb-3">Create a Message</h4>
				<form
					method="post"
					onSubmit={submitMessage}
				>
					<textarea
						name="message"
						ref={textarea_element}
						value={message_content}
						onChange={changeMessageContent}
					></textarea>
					<div className="buttons_container pt-4">
						<button
							type="button"
							className="cancel_button"
							onClick={rest.onHide}
						>
							Cancel
						</button>
						<button
							type="submit"
							className={!message_content ? "success_button disabled_button" : "success_button"}
							disabled={!message_content}
						>
							Post Message
						</button>
					</div>
				</form>
			</Modal.Body>
		</Modal>
	);
}
