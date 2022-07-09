import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import Message from "../models/message";

export interface MessageState {
    messages: Array<Message>;
    commands: Array<String>;
}


const messages = createSlice({
    name: "messages",
    initialState: {
        messages: [],
        commands: [],
    } as MessageState,
    reducers: {
        push: (state:Draft<MessageState>, action: PayloadAction<{text: string, fromUser: boolean}>) => {
            const {text, fromUser} = action.payload;
            const message = new Message(text, fromUser)
            state.messages.push(message);
        },
        setCommands: (state: Draft<MessageState>, action: PayloadAction<Array<String>>) => {
            state.commands = action.payload
        },
    }
})

export const {push, setCommands} = messages.actions
export default messages.reducer