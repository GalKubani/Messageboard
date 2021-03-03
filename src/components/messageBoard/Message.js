import React from 'react';

const Message = ({ message}) => {
    return (
        <div className="message">
            <div className="content">{ message.message }</div>
        </div>
    );
};

export default Message;