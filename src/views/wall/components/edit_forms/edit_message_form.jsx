import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { editMessage } from "../../../../redux/wall/wall_slice";
import "./edit_form.scss";
import EditFormButtons from "../edit_form_buttons/edit_form_buttons";
import { useForm } from "react-hook-form";

export default function EditMessageForm(props) {
    const { register, handleSubmit, setFocus, getValues } = useForm({defaultValues: { post: props.message_content}});
    const dispatch = useDispatch();
    let { message_id, cancelEditMessage } = props;

	useEffect(() => {
		setFocus("post");
    }, [setFocus]);

	return (
        <form 
            method="post" 
            className="edit_message_form" 
            onSubmit={handleSubmit(({ post }) => {
                dispatch(editMessage({message_id, post}));
                cancelEditMessage();
            })}
        >
            <textarea
				{...register("post", {
					required: true
				})}
                placeholder="Type your message here."
            ></textarea>
            <EditFormButtons
                cancelEditForm={cancelEditMessage}
                textarea_content={getValues("post")}
            />
        </form>
    );
}
