import React from 'react'
import { JornualEntry } from './JornualEntry';

export const JornualEntries = () => {

    const entries = [1,2,3,4,5,6,7,8,9,10];
    return (
        <div className="jornual__entries">
            {
                entries.map( value=>(
                    <JornualEntry key={value}/>
                ))
            }
        </div>
    )
}
