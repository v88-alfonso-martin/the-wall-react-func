import React, { useState } from "react";
import empty_icon from "../../assets/images/empty.png";
import CreateMessageModal from "./modals/create_message_modal/create_message_modal";
import MessageContainer from "./components/message_container/message_container";
import DeleteMessageModal from "./modals/delete_modals/delete_message_modal";
import { useSelector } from "react-redux";
import "./wall.scss";

export default function Wall() {
    const [is_open_create_message_modal, setIsOpenCreateMessageModal] = useState(false);
    const [is_open_delete_message_modal, setIsOpenDeleteMessageModal] = useState(false);
    const [message_id, setMessageId] = useState("");
    const messages = useSelector((state) => state.wall.messages)


    function openDeleteMessageModal(message_id) {
        setIsOpenDeleteMessageModal(true);
        setMessageId(message_id)
    }

	return (
        <div className="wall_container">
            <header>
                <div className="container">
                    <h4>The Wall Assignment</h4>
                    <nav>
                        <p>Welcome, Alfonso Martin B. Angeles!</p>
                        <a href="/">Logout</a>
                    </nav>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="main_header">
                        <p>
                            <span>{messages.length}</span> messages arranged by latest posted
                        </p>
                        <button onClick={() => setIsOpenCreateMessageModal(true)}>Create Message</button>
                    </div>
                    <ul className="messages_container">
                        {messages.map((message) => (
                            <MessageContainer 
                                key={message.id}
                                message={message}
                                openDeleteMessageModal={openDeleteMessageModal}
                            />
                        ))}
                    </ul>
                    {messages.length === 0 && (
                        <div id="no_messages">
                            <img src={empty_icon} alt="Empty Icon" />
                            <p>No Posted Message Yet.</p>
                        </div>
                    )}
                </div>
            </main>
            {is_open_create_message_modal && (
                <CreateMessageModal 
                    show={is_open_create_message_modal}
                    onHide={() => setIsOpenCreateMessageModal(false)} 
                />
            )}
            {is_open_delete_message_modal && (
                <DeleteMessageModal
                    show={is_open_delete_message_modal}
                    message_id={message_id}
                    onHide={() => setIsOpenDeleteMessageModal(false)}
                />
            )}
        </div>
    );
}
