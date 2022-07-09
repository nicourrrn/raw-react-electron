import {store} from "../storeFiles/store";
import {push} from "../storeFiles/messages";
import Message from "../models/message";
import message from "../models/message";

export const EchoBot = () => {
    const state = store.getState()
    const len = state.messages.messages.length
    let message =  state.messages.messages[len - 1]
    if (message === undefined || !message.fromUser) {
        return
    }
    store.dispatch(push(new Message(message.text, !message.fromUser)))
}

export const DefaultBot = () => {
    const state = store.getState()
    const len = state.messages.messages.length
    let lastMessage = state.messages.messages[len - 1]
    if (lastMessage === undefined || !lastMessage.fromUser){
        return
    }
    switch (lastMessage.text) {
        case "/start": store.dispatch(push(new Message("Hello from bot", false)));
        break;
        case "/stop": window.close();
        break;
        case "/go_back": store.dispatch(push(new Message("Мне лень, сори) ", false)));
        break;
    }

}