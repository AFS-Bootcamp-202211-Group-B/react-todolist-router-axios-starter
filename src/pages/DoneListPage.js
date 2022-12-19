import React from 'react';
import { useSelector } from "react-redux";
import DoneGroup from '../features/todo/DoneGroup';
export default function DoneList() {
    
        return (
           <>
           <h2>Done List</h2>
           <DoneGroup/>
           </>
        );
      
}
