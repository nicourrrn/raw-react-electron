import React, {useEffect} from "react";
import Message from "../../../models/message";
import "./MessageBox.sass";

interface Props {
    messages: Array<Message>
}

const MessageContainer = (props: Message) => {
    return <div className={props.fromUser ? "UserMessage" : "BotMessage"}>
        {props.text}
    </div>
}

export const MessageBox = (props: Props) => {

    useEffect(() => {
        let box = document.getElementsByClassName("MessageBox")[0]
        box.scrollTop = box.scrollHeight
    }, [props.messages])

    return <div className='MessageBox'>{props.messages.map((m, i) => {
        return <MessageContainer fromUser={m.fromUser} text={m.text} time={m.time} />
    })}</div>
}