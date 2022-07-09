import React from "react"

interface Props {
    commands: Array<String>
    onClick: (command: String) => void
}


export const LeftBar = (props: Props) => {

    return <div className='LeftBar'>{props.commands.map((command, key) => {
        return <h3 key={key} onClick={() => props.onClick(command)}>{command}</h3>
    })}</div>
}