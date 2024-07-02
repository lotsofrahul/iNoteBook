import React, { useState } from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";

const AddNote = () => {
  const context = useContext(noteContext);
  const [note, setNote] = useState({title:"",description:"",tag:""});
  const { addNote } = context;

  const handleClick = (e) => {
    e.preventDefault();
    // console.log("yes")
    addNote(note.title,note.description,note.tag);
    setNote({title:"",description:"",tag:""});
  }

  const onChange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value});
  }
  return (
    <div>
      <div className="container my-4">
        <h2>Add a Note</h2>
        <form>
          <div className="mb-3 my-4">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength={5}
              required
              value={note.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              minLength={5}
              required
              value={note.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              minLength={5}
              required
              value={note.tag}
            />
          </div>
          <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary my-3" onClick={handleClick}>
            AddNote
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
