import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { starLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JornualEntries } from './JornualEntries'

export const SiderBar = () => {

const dispatch = useDispatch();
const {name} = useSelector(state => state.auth)

const handleLogout= ()=>{
    dispatch(starLogout())
}

const handleAddNew= ()=>{
    dispatch(startNewNote());
}

    return (
        <aside className="jornual__sidebar">
            <div className="jornual__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i> 
                    <span> {name}</span>
                </h3>
                <button className="btn" onClick={handleLogout} >
                    logout
                </button>
            </div>
            <div className="jornual__new-entry" onClick={handleAddNew} >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">new entry</p>
            </div>
            <JornualEntries/>
        </aside>
    )
}
