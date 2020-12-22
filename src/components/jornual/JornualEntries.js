import React from 'react'
import { useSelector } from 'react-redux';
import { JornualEntry } from './JornualEntry';

export const JornualEntries = () => {

    const {notes} = useSelector(state => state.notes)
    //const entries = [1,2,3,4,5,6,7,8,9,10];
    return (
        <div className="jornual__entries ">
            {
                notes.map( note=>(
                    <JornualEntry key={note.id} {...note}  />
                ))
            }
        </div>
    )
}
