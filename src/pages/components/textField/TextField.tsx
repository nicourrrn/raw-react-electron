import React from "react"
import {useAppDispatch} from "../../../storeFiles/hook";
import {push} from "../../../storeFiles/messages";

interface Props {
    setTextField: (text: String) => void
    textField: string
}

export const TextField = (props: Props) => {
    const dispatch = useAppDispatch();
    const onClick = () => dispatch(push({
        text: String(props.textField),
        fromUser: true
    }))
    return <div className="TextField">
        <input value={props.textField} onChange={(e) => props.setTextField(e.target.value)} />
        <input value="Send" type="button" onClick={onClick} />
    </div>
}