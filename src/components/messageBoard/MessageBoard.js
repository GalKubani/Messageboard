import React from 'react'
import AddMessage from './AddMessage'
import Messages from './Messages'

const MessageBoard=()=>{


    return (
        <div className="messageboard-container">
                <Messages />
                <AddMessage />
        </div>
    )
}

export default MessageBoard