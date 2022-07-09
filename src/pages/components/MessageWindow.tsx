import React from "react";
import {useAppDispatch, useAppSelector} from "../../storeFiles/hook";
import {MessageBox} from "./wessageWindow/MessageBox";
import {TextField} from "./textField/TextField";

interface Props {
    setTextField: (text: String) => void
    textField: string
}

export const MessageWindow = (props: Props) => {
    const messages = useAppSelector(state => state.messages.messages);
    const dispatch = useAppDispatch();

    return (<div className='MessageWindow'>
        <MessageBox messages={messages} />
        <TextField  setTextField={props.setTextField} textField={props.textField}/>
    </div>)

}