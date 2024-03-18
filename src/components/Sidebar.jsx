import { useState } from "react";
import img from "../assets/icons8-note.png"
import { useMemo } from "react";

export default function({newNote, notes, currentNote, setCurNoteId, deleteNote}){
    const [numberOfItemShown, setNumberOfItemShown] = useState(7);

const showMore=()=>{
    if(numberOfItemShown <= notes.length){
        setNumberOfItemShown( numberOfItemShown + 5)
    }else{
        setNumberOfItemShown(notes.length)
    }
}


    const noteElements = useMemo(()=>(

        notes.slice(0, numberOfItemShown).map((note,index)=>(
            <div key={note.id}>
               <div className={`title ${note.id === currentNote.id ? "selected-note" : ""}`}
    
                onClick={()=> setCurNoteId(note.id)}>
                   <img src={img} alt="Note"/>
               <h4 className="text-snippet">{note.body.split("\n")[0]} </h4>
               
               <button title='delete' className="delete-btn" onClick={(event) => deleteNote(event, note.id)} >
                        <i className="gg-trash trash-icon"></i>
                    </button>
               </div>
            </div>
        ))

    )) 

    return(
       
        <aside className='sidebar editor'>
            <div className="prime-side">
            <div className="sidebar__header">
                <button className="sidebar__new-note" onClick={newNote}>+ Add a new note</button>
            </div>
            {noteElements.length ? noteElements : "loading..."}
           <button className="show-more" onClick={showMore}>Show more</button> 
           </div>
           
        </aside>
    );
}