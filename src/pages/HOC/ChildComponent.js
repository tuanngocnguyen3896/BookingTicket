import React from 'react'

export default function ChildComponent(props) {
    return (
        <div>
             {props.children} - {props.title}
        </div>
    )
}
