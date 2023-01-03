import { createSlice } from "@reduxjs/toolkit";
import { getId } from "../../__helpers/helpers";

const initialState = {
	messages: [],
    message_id: "",
    comment_id: ""
};

export const wall_slice = createSlice({
	name: "wall",
	initialState,
	reducers: {
		addMessage: (state, action) => {
			state.messages.unshift({ id: getId(), content: action.payload, comments: []});
		},
        deleteMessage: (state, action) => {
            state.messages = state.messages.filter((message => message.id !== action.payload))
        },
        editMessage: (state, action) => {
            const { message_id, post } = action.payload;
            state.messages[state.messages.findIndex((message) => message.id === message_id)].content = post;
        },
        addComment: (state, action) => {
            const { message_id, comment } = action.payload;
            state.messages[state.messages.findIndex((message) => message.id === message_id)].comments.unshift({id: getId(), content: comment});
        },
        editComment: (state, action) => {
            const { message_id, post_comment, comment_id } = action.payload;
            let comments = state.messages[state.messages.findIndex((message) => message.id === message_id)].comments;
            comments[comments.findIndex((comment) => comment.id === comment_id)].content = post_comment;
        },
        deleteComment: (state, action) => {
            const { message_id, comment_id } = action.payload;
            let comments = state.messages[state.messages.findIndex((message) => message.id === message_id)].comments;

            comments.splice(comments.findIndex(comment => comment.id === comment_id), 1);
        }
	},
});

export const { addMessage, deleteMessage, editMessage, addComment, editComment, deleteComment } = wall_slice.actions;
export default wall_slice.reducer;
