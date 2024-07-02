import React from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <h6 className="card-title">{note.title}</h6>
          <p className="card-text">{note.description}</p>
          <i
            className="fa-solid fa-trash mx-2"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
          <i
            className="mx-2 fa-solid fa-pen-to-square"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
