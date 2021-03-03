import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { initMessageboardAction } from '../actions/MessageAction';
import MessageReducer, { initialMessageboardState } from '../reducers/messageReducer';
import { getMessagesFromDB } from '../server/db';

export const MessageContext= createContext();

const MessageContextProvider=(props)=>{
    const [messageState,messageDispatch]=useReducer(MessageReducer,initialMessageboardState)
    const history= useHistory()

    useEffect(()=>{
        let isComponentExist=true;
        getMessagesFromDB().then((messageBoardData)=>{
            if(isComponentExist) messageDispatch(initMessageboardAction(messageBoardData))
        },(err)=>{
            // if(err.message==="No messages found"){
            //     history.push("/messageboard")
            // }
        })
        return()=>{
            isComponentExist=false;
        }
    },[])
    return(
        <MessageContext.Provider value={{messageState,messageDispatch}}>
            {props.children}
        </MessageContext.Provider>

    )
}
export default MessageContextProvider;