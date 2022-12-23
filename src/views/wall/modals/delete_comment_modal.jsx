import React from "react";
import Modal from "react-bootstrap/Modal";
import "./delete_modal.scss";

export default function DeleteCommentModal(props) {

    function submitDeleteComment(event) {
        event.preventDefault();
		let { deleteComment, comment_id } = props;
		deleteComment(comment_id);
    }

    let {deleteComment, comment_id, ...rest } = props;

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
                    onSubmit={submitDeleteComment}
                >
                    <h4 className="pb-3">Confirm Delete Comment</h4>
                    <p>Are you sure you want to remove this comment? This action cannot be undone.</p>
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
