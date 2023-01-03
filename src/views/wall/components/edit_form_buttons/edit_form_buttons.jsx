import React from "react";
import "./edit_form_buttons.scss";

export default function EditFormButtons(props) {
    let { cancelEditForm, textarea_content } = props;

	return (
		<div className="edit_form_buttons">
			<button
				type="button"
				className="cancel_button"
				onClick={cancelEditForm}
			>
				Cancel
			</button>
			<button
				type="submit"
				className={!textarea_content ? "success_button disabled_button" : "success_button"}
				disabled={!textarea_content}
			>
				Update Message
			</button>
		</div>
	);
}
