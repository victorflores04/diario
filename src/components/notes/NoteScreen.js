import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NoteAppBar/>
            <div className="notes__content">
                <input className="notes__title-input" type="text" placeholder="Some awesome title"/>
                <textarea className="notes__textarea" placeholder="what happend today">
                </textarea>
                <div className="notes__image">
                    <img src="https://www.colcaperu.gob.pe/wp-content/uploads/2017/09/Recortado-ca%C3%B1%C3%B3n.jpg" alt="description"  />
                </div>
            </div>
        </div>
    )
}
