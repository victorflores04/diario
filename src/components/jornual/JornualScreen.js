import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelecter } from './NothingSelecter'
import { SiderBar } from './SiderBar'

export const JornualScreen = () => {

    const {active} = useSelector(state => state.notes)
    return (
        <div className="jornual__main-content">
            <SiderBar/>
                <main>
                    {
                        (active)?(<NoteScreen/>):(<NothingSelecter/>)
                    }
                </main>
        </div>
    )
}
