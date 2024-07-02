import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

//FOR EXPLANATION OF CONTEXT API

// const NoteState = (props) => {
//     //initial state
//   const s1 = {
//     name: "dsadsa",
//     class: "5b"
//   };
//   const [state, setState] = useState(s1);
//   const update = () => {
//     setTimeout(() => {
//       setState({
//         name: "lksjkss",
//         class: "52b",
//       });
//     }, 1000);
//   };
//   return (
//     <NoteContext.Provider value={{state,update}}>
//         {props.children}
//     </NoteContext.Provider>
//   );
// };

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //get all notes
  const getNotes = async () => {
    //API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch("http://localhost:5000/api/notes/addnote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes([...notes,note]);
  };

  //delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });

    const json = await response.json();
    console.log(json);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // edit a note
  const editNote = async (id, title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    //edit a note from client side
    for (let index = 0; index < notes.length; index++) {
      // const element = notes[index];
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          element.title = title;
          element.description = description;
          element.tag = tag;
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
