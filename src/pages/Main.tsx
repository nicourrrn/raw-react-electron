import React, {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "../storeFiles/hook";
import {useState} from "react";
import {setCommands} from "../storeFiles/messages";
import {LeftBar} from "./components/LeftBar";
import "./Main.sass"
import {MessageWindow} from "./components/MessageWindow";


export const Main = () => {
    const messages = useAppSelector(state => state.messages.messages);
    const dispatch = useAppDispatch();
    const [textField, setTextField] = useState('0');
    useEffect(() => {
        dispatch(setCommands(
            ['/start', '/stop', '/go_back']
        ))
    }, []);
    const commands = useAppSelector(state => state.messages.commands);
    return (
        <div className="Main">
            <LeftBar onClick={(c) => setTextField(String(c))} commands={commands}/>
            <MessageWindow setTextField={(text) => setTextField(String(text))} textField={textField}/>
        </div>
    )
}
