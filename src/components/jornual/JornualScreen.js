import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
// import { NothingSelecter } from './NothingSelecter'
import { SiderBar } from './SiderBar'

export const JornualScreen = () => {
    return (
        <div className="jornual__main-content">
            <SiderBar/>
                <main>
                    {/* <NothingSelecter/> */}
                    <NoteScreen/>
                </main>
        </div>
    )
}
