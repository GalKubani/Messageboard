import React from 'react';
import MessageBoard from './MessageBoard';
import MessageContextProvider from '../../context/MessageContext';



const MessageboardLoader = (props) => {
    const messageId = props.match.params.id;
    
    return (
        <MessageContextProvider messageId={messageId}>
            <MessageBoard />
        </MessageContextProvider>
    );
};

export default MessageboardLoader;