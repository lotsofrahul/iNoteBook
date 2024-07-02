import React from "react";
import Notes from "./Notes";
// import { useContext } from "react";
// import noteContext from "../context/notes/noteContext";

const Home = (props) => {
  return (
    <div>
      <div className="container">
        <Notes showAlert={props.showAlert} />
      </div>
    </div>
  );
};

export default Home;
