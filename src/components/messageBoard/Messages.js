import React, { useContext } from 'react'
import { MessageContext } from '../../context/MessageContext'
import Message from './Message'
// will use reducer to import the messages

const Messages=()=>{
    const{messageState}=useContext(MessageContext)
    return(
        <div className="messages-container">
            <h3>Our message board:</h3>
            { messageState.messages.map((message)=>(
                <Message key={message.id} message={ message } />
            ))
            }
        </div>
    )
}
export default Messages