import Axios from 'axios'

const DB_URL=`http://ec2-18-203-251-138.eu-west-1.compute.amazonaws.com`
// 
export const getMessagesFromDB = async () => {
    try {
        const res = await Axios.get(DB_URL+"/messages/getall");

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
        const res = await Axios.post(DB_URL+"/messages/new", { message:message });
        return res.data.message;
    } catch (err) {
        console.log(err);
    }
}; 