import React from "react";
import { read } from "../helpers/crudTask";
import KanbanItem from "./KanbanItem";

function KanbanToDo({ data }) {
  return (
    <div className="category-column">
      <h1 className="category-column__title">To Do</h1>
      <ul>
        {data.map((item) => {
          if (item.stage == 1) {
            return (
              <KanbanItem
                key={item.id}
                id={item.id}
                name={item.name}
              ></KanbanItem>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default KanbanToDo;
