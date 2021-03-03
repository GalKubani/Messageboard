import { nanoid } from 'nanoid';
import React, { useContext, useReducer } from 'react';
import { addMessageAction } from '../../actions/MessageAction';
import { MessageContext } from '../../context/MessageContext';
import MessageReducer, { initialMessageboardState } from '../../reducers/messageReducer';
import { postMessageInDB } from '../../server/db';

const AddMessage = () => {

    const {messageDispatch}= useContext(MessageContext);
    const onSubmit = (event) => {
        event.preventDefault();
        const message = event.target.children[0].children[0].value.trim();
        if (message.length > 0) {
            postMessageInDB(message)
            messageDispatch(addMessageAction({
                message,
                id:nanoid()
            }));
        }
        event.target.children[0].children[0].value = "";
    };
    return (
        <form onSubmit={ onSubmit }>
            <div className="message-input">
                <input />
                <button type="submit">Send</button>
            </div>
        </form>
    );
};

export default AddMessage;