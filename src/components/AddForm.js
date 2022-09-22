import React, { useState } from "react";
import "./AddForm.css";
import { insertItem } from "../helpers/crudTask";
import { useContext } from "react";
import { DataContext } from "../App";

function AddForm() {
  const [name, setName] = useState("");
  const { dataChange, setDataChange } = useContext(DataContext);

  return (
    <div className="input">
      <input
        placeholder="New task name..."
        type="text"
        className="input-item"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <button
        className="add-item"
        type="button"
        onClick={() => {
          if (!name) {
            // alert("Please input task name");
            return;
          }
          insertItem(name);
          setName("");
          setDataChange(!dataChange);
        }}
      >
        Create Task
      </button>
    </div>
  );
}

export default AddForm;
