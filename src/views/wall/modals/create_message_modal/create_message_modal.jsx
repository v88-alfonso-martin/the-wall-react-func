import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { addMessage } from "../../../../redux/wall/wall_slice";
import "./create_message_modal.scss";

export default function CreateMessageModal(props) {
	const dispatch = useDispatch();
	const { register, handleSubmit, formState: { isValid }, setFocus } = useForm();

	useEffect(() => {
		setFocus("message");
	}, [setFocus]);
	
	return (
		<Modal
			className="create_message_modal"
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body className="py-0 px-5 pb-5">
				<h4 className="pb-3">Create a Message</h4>
				<form
					method="post"
					onSubmit={handleSubmit(({ message }) => {
						dispatch(addMessage(message));
						props.onHide();
					})}
				>
					<textarea
						{...register("message", {
							required: true
						})}
					></textarea>
					<div className="buttons_container pt-4">
						<button
							type="button"
							className="cancel_button"
							onClick={props.onHide}
						>
							Cancel
						</button>
						<button
							type="submit"
							className={!isValid ? "success_button disabled_button" : "success_button"}
							disabled={!isValid}
						>
							Post Message
						</button>
					</div>
				</form>
			</Modal.Body>
		</Modal>
	);
}
