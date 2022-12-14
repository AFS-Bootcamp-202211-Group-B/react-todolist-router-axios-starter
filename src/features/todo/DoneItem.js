import React from 'react'

export default function DoneItem(props) {
    const { done } = props;
    return (
        <div className="box">
      <span>{done.text}</span>
    </div>
    )
}
