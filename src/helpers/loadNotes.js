import { db } from "../firebase/firebase-congif"


export const loadNotes = async(uid)=>{

  const notesSnap = await db.collection(`${uid}/jornual/notes`).get();
  const notes = [];
  notesSnap.forEach(snapHijo=>{
      //console.log(snapHijo.data());
      notes.push({
          id: snapHijo.id,
          ...snapHijo.data()
      })
  });

  //console.log(notes);
  return notes;
}