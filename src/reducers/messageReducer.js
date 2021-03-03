
export const initialMessageboardState = {
    messages: []
};
const MessageReducer=(messagesState, action)=>{
    switch (action.type) {
        case "ADD_MESSAGE":
            return {
                ...messagesState,
                messages: messagesState.messages.concat(action.message)
            };     
        case "INIT_MESSAGEBOARD":
            return { messages:messagesState.messages.concat(action.messagesData) };  
        default:
            return { ...messagesState };
    }
}
export default MessageReducer;