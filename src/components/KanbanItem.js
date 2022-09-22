import React from "react";
import "./KanbanItem.css";
import { deleteItem, editItemStage } from "../helpers/crudTask";
import { useContext } from "react";
import { DataContext } from "../App";

function KanbanItem(props) {
  const { dataChange, setDataChange } = useContext(DataContext);

  return (
    <li className="kanban__column">
      <div className="kanban__item">
        <div className="kanban__item-description">{props.name}</div>
        <div className="kanban__item-action">
          {!props.backlog ? (
            <button
              className="btn btn-prev"
              onClick={() => {
                editItemStage(props.id, "prev");
                setDataChange(!dataChange);
              }}
            >
              {" "}
              &#9194;{" "}
            </button>
          ) : (
            ""
          )}
          {!props.done ? (
            <button
              className="btn btn-next"
              onClick={() => {
                editItemStage(props.id, "next");
                setDataChange(!dataChange);
              }}
            >
              &#9193;{" "}
            </button>
          ) : (
            ""
          )}

          <button
            className="btn btn-delete"
            onClick={() => {
              deleteItem(props.id);
              setDataChange(!dataChange);
            }}
          >
            {" "}
            &#128465;{" "}
          </button>
        </div>
      </div>
    </li>
  );
}

export default KanbanItem;
