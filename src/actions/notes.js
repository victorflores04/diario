import Swal from 'sweetalert2';
import { db } from "../firebase/firebase-congif";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";


export const startNewNote= ()=>{
    return async(dispatch,getState)=>{

        const uid= getState().auth.uid

        //console.log(uid);

        const newNote= {
            title: '',
            body:'',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/jornual/notes`).add(newNote);
        dispatch(activeNote(doc.id, newNote));

    }

}
export const activeNote= (id,note)=>({
    type:types.notesActive,
    payload:{
        id,
        ...note
    }

});

export const starLoadingNotes=(uid)=>{
    return async(dispatch)=>{
        const notes=  await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes= (notes)=>({
    type: types.notesLoad,
    payload: notes
});

export const startSaveNote= (note)=>{
    return async(dispatch,getState)=>{

        const uid= getState().auth.uid

        if (!note.url) {
            delete note.url;
        }
        const noteToFirestone = {...note};
        delete noteToFirestone.id;

        await db.doc(`${uid}/jornual/notes/${note.id}`).update(noteToFirestone);
        dispatch(refreshNote(note.id, noteToFirestone));
        Swal.fire('saved', note.title, 'success');
    }
}

export const refreshNote=(id,note)=>({
    type: types.notesUpdated,
    payload:{
        id, 
        note:{
            id,
            ...note
        }
    }
})