import Axios from 'axios'

const DB_URL=`https://messageboard-yoko-default-rtdb.firebaseio.com/`
// nn to set up after rewatching, either on ec2 or other one
export const getMessagesFromDB = async () => {
    try {
        const res = await Axios.get(DB_URL+ "messages.json");
        const messages = [];
        for (let id in res.data) {
            messages.push({
                id,
                message: res.data[id].message
            });
        }
        return messages;
    } catch (err) {
        throw new Error("No messages found");
    }
};

export const postMessageInDB = async (message) => {
    try {
        const res = await Axios.post(DB_URL + "messages.json", { message });
        return res.data.message;
    } catch (err) {
        console.log(err);
    }
}; 