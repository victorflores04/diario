import Swal from 'sweetalert2';
import { db } from "../firebase/firebase-congif";
import { fileUpload } from '../helpers/fileUpload';
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

export const startUploading = (file)=>{
    return async(dispatch, getState)=>{
        const {active:activeNote} = getState().notes;
        Swal.fire({
            title: 'Uploading...',
            text: 'Please my Queen wait...',
            showConfirmButton: false,
            onBeforeOpen:()=>{
                Swal.showLoading();
            }
        })
        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;
        dispatch(startSaveNote(activeNote))
        //console.log(fileUrl);
        Swal.close();
    }
}

export const startDeleting=(id)=>{
    return async(dispatch, getState)=>{
        const uid= getState().auth.uid;
        await db.doc(`${uid}/jornual/notes/${id}`).delete();

        dispatch(deleteNote(id));

    }
}

export const deleteNote=(id)=>({
    type: types.notesDelete,
    payload: id
})