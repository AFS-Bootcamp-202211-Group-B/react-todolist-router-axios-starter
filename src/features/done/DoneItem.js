import React from 'react'
import "./DoneItem.css";
export default function DoneItem(props) {
    const { done } = props;
  return (
    <div className="box done">
        <span>{done.text}</span>
    </div>
  )
}
