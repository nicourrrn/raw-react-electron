class Message {
    fromUser: boolean;
    text: string;
    time: Date;
    constructor(text: string, fromUser: boolean) {
        this.text = text;
        this.fromUser = fromUser;
        this.time = new Date();
    }
}

export default Message;