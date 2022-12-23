import React from "react";
import Modal from "react-bootstrap/Modal";
import "./delete_modal.scss";

export default function DeleteMessageModal(props) {

    function submitDeleteMessage(event) {
        event.preventDefault();
        let { deleteMessage, message_id } = props;

		deleteMessage(message_id);
    }

    let { deleteMessage, message_id, ...rest } = props;


	return (
        <Modal
            className="delete_comment_modal"
            {...rest}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="py-0 px-5 pb-5">
                <form
                    method="post"
                    onSubmit={submitDeleteMessage}
                >
                    <h4 className="pb-3">Confirm Delete Message</h4>
                    <p>Are you sure you want to remove this message? This action cannot be undone.</p>
                    <div className="buttons_container">
                        <button
                            type="button"
                            className="cancel_button"
                            onClick={rest.onHide}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="success_button"
                        >
                            Yes, Remove it.
                        </button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}
