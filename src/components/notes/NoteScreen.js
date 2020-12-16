import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();
    const {active:note} = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset]=useForm(note);
    const {body,title} = formValues;
    const activeId= useRef(note.id);
    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note)
            activeId.current = note.id
        }
    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(formValues.id,{...formValues}));
    }, [formValues, dispatch])

    return (
        <div className="notes__main-content">
            <NoteAppBar/>
            <div className="notes__content">
                <input className="notes__title-input" name="title" value={title} onChange={handleInputChange} type="text" placeholder="Some awesome title"/>
                <textarea className="notes__textarea" name="body" value={body} onChange={handleInputChange} placeholder="what happend today">
                </textarea>
                {
                    (note.url) &&
                    (<div className="notes__image">
                        <img src="https://www.colcaperu.gob.pe/wp-content/uploads/2017/09/Recortado-ca%C3%B1%C3%B3n.jpg" alt="description"  />
                    </div>)
                }
            </div>
        </div>
    )
}
