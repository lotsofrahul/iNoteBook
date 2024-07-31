import React, { useState } from "react";

const Switch = () => {
    const [color, setColor] = useState("white")
    const onClick = () => {
        //set the color for switch's text
        if(color === "white") {
            setColor("#F0E27B");
        }
        else {
            setColor("white");
        }
    }
  return (
    <div>
      <div className="form-check form-switch mx-4">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={onClick}
          style={{ color: color, cursor: "pointer" }}
        />
        <label
          className="form-check-label"
          htmlFor="flexSwitchCheckDefault"
          style={{ color: color, cursor: "pointer"}}
        >
          Dark Mode
        </label>
      </div>
    </div>
  );
};

export default Switch;
